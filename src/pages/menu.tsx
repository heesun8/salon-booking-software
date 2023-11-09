import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React, { useState } from 'react'
import Link from 'next/link'
import { MenuCart } from '../components/MenuCart'
import { MenuList } from '../components/MenuList'
import { data } from '../constants'
// import Success from './success'

export const Menu = ({ }) => {
    const [productsInCart, setProductsInCart] = useState<{ id: number; quantity: number }[]>([])

    //increase the quantity of the specified product in the cart
    const increaseCartQuantity = (id: number) => {
        setProductsInCart(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    //decrease the quantity of the specified product in the cart
    const decreaseCartQuantity = (id: number) => {
        setProductsInCart(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    //fully remove specified item from the cart
    const removeFromCart = (id: number) => {
        setProductsInCart(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    //get current total quantity of the specified selected product 
    const getItemQuantity = (id: number) => {
        return productsInCart.find(item => item.id === id)?.quantity || 0
    }

    return (
        <div className='bg-peach-100'>
            <div className='flex sticky top-0 justify-between p-4 bg-zinc-500/[0.06]'>
                <Link href='/'><h1 className='font-serif font-bold text-2xl text-zinc-700'>éveiller</h1></Link>
                <MenuCart removeFromCart={removeFromCart} products={productsInCart} />
            </div>
            <div className='mx-10 py-10'>
                <Tabs isFitted defaultIndex={0} align='center' size='lg' variant='enclosed unstyled' bg='peach.80' className=''>
                    <TabList>
                        <Tab bg={'peach.200'} color={'white'} _selected={{ color: 'black', bg: 'peach.80' }}><p className='font-rondal font-bold text-2xl'>Hair</p></Tab>
                        <Tab bg={'peach.200'} color={'white'} _selected={{ color: 'black', bg: 'peach.80' }}><p className='font-rondal font-bold text-2xl'>Nails</p></Tab>
                        <Tab bg={'peach.200'} color={'white'} _selected={{ color: 'black', bg: 'peach.80' }}><p className='font-rondal font-bold text-2xl'>Massages</p></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {data.hairMenu.map((tab, index) => (
                                <MenuList
                                    // key={tab.title + index}
                                    // id={tab.id}
                                    key={tab.id}
                                    // title={tab.title}
                                    // subtitle={tab.subtitle}
                                    // price={tab.price}
                                    // imgUrl={tab.imgUrl}
                                    increaseCartQuantity={increaseCartQuantity}
                                    decreaseCartQuantity={decreaseCartQuantity}
                                    getItemQuantity={getItemQuantity}
                                    {...tab}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {data.nailMenu.map((tab, index) => (
                                <MenuList
                                    // key={tab.title + index}
                                    // id={tab.id}
                                    key={tab.id}
                                    // title={tab.title}
                                    // subtitle={tab.subtitle}
                                    // price={tab.price}
                                    // imgUrl={tab.imgUrl}
                                    increaseCartQuantity={increaseCartQuantity}
                                    decreaseCartQuantity={decreaseCartQuantity}
                                    getItemQuantity={getItemQuantity}
                                    {...tab}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {data.massageMenu.map((tab, index) => (
                                <MenuList
                                    // key={tab.title + index}
                                    // id={tab.id}
                                    key={tab.id}
                                    // title={tab.title}
                                    // subtitle={tab.subtitle}
                                    // price={tab.price}
                                    // imgUrl={tab.imgUrl}
                                    increaseCartQuantity={increaseCartQuantity}
                                    decreaseCartQuantity={decreaseCartQuantity}
                                    getItemQuantity={getItemQuantity}
                                    {...tab}
                                />
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

// Menu.getInitialProps = ({ res, err }: any) => {
//     /* eslint-disable @typescript-eslint/restrict-template-express */
//     /* eslint-disable @typescript-eslint/no-unsafe-assignment */
//     /* eslint-disable @typescript-eslint/no-unsafe-member-access */
//     const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//     return { statusCode }
//     /* eslint-disable @typescript-eslint/no-unsafe-assignment */
//     /* eslint-disable @typescript-eslint/no-unsafe-member-access */
//     /* eslint-disable @typescript-eslint/restrict-template-express */

// }

export default Menu