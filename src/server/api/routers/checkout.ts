import { TRPCError } from '@trpc/server'
import { publicProcedure, createTRPCRouter } from '../trpc'
import { z } from 'zod'
import _stripe from 'stripe'
import { data } from '~/constants'
// import { title } from 'process'

const stripe = new _stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-08-16'
})

export const checkoutRouter = createTRPCRouter({
    checkoutSession: publicProcedure
        .input(
            z.object({
                products: z.array(
                    z.object({
                        id: z.number(),
                        quantity: z.number().min(1, 'Quantity must be at least 1')
                    })
                )
            })
        )
        .mutation(async ({ ctx, input }) => {
            try {
                const productsInCart = (
                    data.menu.map((p) => ({
                        ...p,
                        quantity: input.products.find((product) => product.id === p.id)?.quantity || 0
                    }))
                )

                //productsInCart currently returns even items with 0 quantity, stripe does not accept 0 quantity items so 
                //creating this new array with only the items that the user has selected
                const productsInCart2 = (
                    input.products.map(product => (
                        productsInCart.filter(p => p.id === product.id)
                    ))
                )
                
                // const productsInCart3 = (
                //     productsInCart2.map(product => product.id)
                //     )

                // const productsInCart3 = productsInCart2.map(item => {
                //     const container = {};
                //     container[item.title] = item.quantity
                //     return container
                // })

                //IGNORE THIS. console.log's just for various testings
                // console.log('[PRODUCTSINCART2]' + productsInCart2.length)
                // console.log('[INPUT PRODUCTS]' + input.products.length)
                // console.log('[INPUT ID]' + input.products.find(product => console.log(product.id)))
                // console.log('[PRODUCTS ID]' + productsInCart2.find(p => console.log(p[0].title)))

                // if (productsInCart2.length !== input.products.length) {
                //     // throw new TRPCError({ code: 'CONFLICT', message: `${console.log('[INPUT PRODUCTS]' + input.products.length)}` + 'Some products are not available' })
                //     throw new TRPCError({ code: 'CONFLICT', message: 'Some products are not available' })
                // }

                const session = await stripe.checkout.sessions.create({
                    payment_method_types: ['card'],

                    mode: 'payment',
                    line_items: productsInCart2.map((product) => ({
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: product[0]!.title,
                            },
                            unit_amount: product[0]!.price * 100,
                        },
                        quantity: product[0]!.quantity,
                    })),
                    // line_items: productsInCart.map((product) => ({
                    //     price_data: {
                    //         currency: 'usd',
                    //         product_data: {
                    //             name: product.title,
                    //         },
                    //         unit_amount: product.price * 100,
                    //     },
                    //     quantity: product.quantity,
                    // })),
                    shipping_options: [
                        {
                            shipping_rate_data: {
                                type: 'fixed_amount',
                                fixed_amount: {
                                    amount: 0,
                                    currency: 'usd',
                                },
                                display_name: 'Pickup in store',
                            },
                        },
                    ],
                    success_url: 'http://localhost:3000/success',
                    cancel_url: 'http://localhost:3000/menu',
                })

                return {
                    url: session.url || '',
                }
            } catch (error) {
                let msg = ''
                if (error instanceof Error) {
                    msg = 'HEYHEYEHY' + error.message
                }
                throw new TRPCError({
                    message: msg || 'Payment failed',
                    code: 'INTERNAL_SERVER_ERROR',
                })
            }
        }),
})