import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import Link from 'next/link'
// import randomstring from 'randomstring'
import images from '../constants/images'
import { data } from '../constants'
import { Footer } from '~/container/Footer'

//interfect DEPRECIATED, not used. LocalStorage.setItem and .getItem were used instead 
interface SuccessProps {
    menuProducts: {
        id: number
        quantity: number
    }[]
}
export const Success = ({ menuProducts }: SuccessProps) => {
    const [products, setProducts] = useState<{ id: number; quantity: number }[] | null>(null)
    const [isProducts, isSetProducts] = useState(true)
    const [ticketNumber2, setTicketNumber2] = useState<string | null>()
     // const [subtotal2, setSubtotal2] = useState<string>()

    //Get total of the selected amount
    const subtotal = (
        products?.reduce(
            (acc: number, products: { id: number; quantity: number }) => {
                const item = data.menu.find(p => p.id === products.id)
                return acc + (item?.price || 0) * products.quantity
            },
            0
        ) ?? 0
    ).toFixed(2)


    //To get the products associated with this order. Its setup was in the server file 'checkout.ts' 
    useEffect(() => {
        /* eslint-disable @typescript-eslint/no-unsafe-argument */
        const products = localStorage.getItem('products')
        if (!products) isSetProducts(false)
        else {
            console.log(products)
            setProducts(JSON.parse(products))
        }
        /* eslint-disable @typescript-eslint/no-unsafe-argument */
    }, [])

    //To get the ticket number associated with this order. Its setup was in the server file 'checkout.ts' 
    useEffect(() => {
        const ticketNumber2 = localStorage.getItem('ticketNumber')
        setTicketNumber2(ticketNumber2)
    }, [])

    // Show spinning animation if it's empty
    if (products === null)
        return (
            <div className='flex flex-col h-screen justify-center items-center'>
                <Spinner
                    size='xl'
                    color='peach.200'
                    emptyColor='peach.50'
                    thickness='4px'
                    speed='0.8s'
                />
                <h1 className='font-bebas text-3xl m-5'>Nothing was ordered</h1>
                <Link href='/menu'><p className='underline p-2 px-4 rounded-lg bg-peach-50 text-slate-200 font-medium'>Exit and try again</p></Link>
            </div>
        )

    //question why the user is here 
    if (isProducts === false) return <div>What are you doing on this page</div>

    return (
        <div className='flex flex-1 flex-col'>
            <div className='flex flex-col'>
                <Image
                    width={500}
                    height={500}
                    style={{ objectFit: 'cover' }}
                    src={images.thankyou}
                    alt='success page photo.'
                    className='w-full'
                    unoptimized
                />
                <div className='flex flex-1 absolute text-3xl p-2 text-slate-50 justify-center pl-5 top-20 sm:top-10 sm:right-10 font-serif font-bold'>éveiller</div>
            </div>
            <div className='flex flex-1 relative sm:absolute flex-col sm:w-1/3 m-10 absolute px-10 bg-slate-10'>
                <div className='flex flex-1 border-b items-center my-8 flex-col'>
                    <h1 className=''>Thank you for your order!</h1>
                    <h1 className='font-bebas text-2xl'>Ticket Number :</h1>
                    <p className='font-serif font-bold text-4xl'>{ticketNumber2}</p>
                </div>
                <ul>
                    {data.menu.map(item => {
                        const thisItem = products?.find(p => p.id === item.id)
                        if (products?.find(p => item.id === p.id)) {
                            return (
                                (
                                    <li key={item.id}>

                                        <div className='flex flex-1 text-left justify-between'>
                                            <div className='flex'>
                                                <p className='pr-1'>- </p>
                                                <h1>{item.title}</h1>
                                            </div>
                                            <p>${item.price}.00 x {thisItem?.quantity}</p>
                                        </div>


                                    </li>
                                )
                            )
                        }
                    })}
                </ul>
                <div className='flex flex-1 justify-between my-8 items-end border-t'>
                    <h1 className='font-sans font-bold text-lg'>TOTAL</h1>
                    <p className='text-lg font-bold'>${subtotal}</p>
                </div>
            </div>
<div className='relative flex-1'><Footer /></div>
        </div>
    )
}

export default Success