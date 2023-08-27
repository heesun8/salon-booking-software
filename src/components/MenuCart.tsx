import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { MenuCartItem } from '../components/MenuCartItem'
import { data } from '../constants'
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { api } from 'src/utils/api'

interface MenuCartProps {
    products: { id: number, quantity: number }[]
    removeFromCart: (id: number) => void
}
export const MenuCart = ({ products, removeFromCart }: MenuCartProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [subtotal2, setSubtotal2] = useState<number[]>([])
    // const { cartItems } = useShoppingCart()
    const btnRef = React.useRef(null)
    const router = useRouter()

    //tRPC 
    const { mutate: checkout, isLoading } = api.checkout.checkoutSession.useMutation({
        onSuccess: ({ url }) => {
            router.push(url)
        },
        onMutate: ({ products }) => {
            localStorage.setItem('products', JSON.stringify(products))
        },
    })

    //get the price of an item using their id
    //ATM DEPRECIATED, not used in the overall code 
    const getPrice = () => (
        data.menu.map((item) => {
            if (products.find(i => i.id === item.id)) {
                const q = products.find(i => i.id === item.id)?.quantity
                console.log(item.price * q)
                return (item.price * q)
            } else {
                return item.price
            }
        }
        )
    )

    //get the total number of items in the cart 
    const cartQuantity = (
        products.reduce(
            (acc, item) => acc + item.quantity, 0
        )
    )
    //use the .reduce() function to add all the items in the shopping cart
    const subtotal = (
        products.reduce(
            (acc, product) => {
                const item = data.menu.find(i => i.id === product.id)
                return acc + (item?.price || 0) * product.quantity
            },
            0
        ) ?? 0
    ).toFixed(2)

    return (
        <div>
            {cartQuantity > 0 && (
                <Button
                    variant={''}
                    bg={'slate.50'}
                    ref={btnRef} onClick={onOpen}
                >
                    <AiOutlineShoppingCart size={40} color={''} />
                    <div
                    className='absolute bottom-0 right-0 translate-y-3 translate-x-2 bg-peach-200  p-2 rounded-full flex justify-center items-center'>
                        {cartQuantity}
                    </div>
                </Button>
            )}
            {cartQuantity <= 0 && (
                <Button
                    variant={''}
                    bg={'slate.50'}
                    ref={btnRef} onClick={onOpen}
                >
                    <AiOutlineShoppingCart size={40} color={''} />
                </Button>

            )}

            <Drawer
                isOpen={isOpen}
                placement={'right'}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <h1>éveiller</h1>
                        <div className='border-t m-5' />
                    </DrawerHeader>
                    <DrawerBody>
                        <ul>
                            {data.menu?.map(item => {
                                const thisItem = products.find(product => product.id === item.id)
                                if (products.find(product => item.id === product.id)) {
                                    return (
                                        <>
                                            <li key={item.id} className='flex py-4'>
                                                <div className=''>
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        style={{ objectFit: 'cover' }}
                                                        src={item.imgUrl}
                                                        alt='shopping cart image'
                                                        className='w-16 h-24'
                                                    />
                                                </div>
                                                <div className='flex flex-1 flex-col ml-4 mt-4'>

                                                    <div className='flex flex-1 justify-between'>
                                                        <h3 className='font-semibold'>{item?.title}</h3>
                                                        <p className='font-medium'>${item?.price}.00</p>
                                                    </div>
                                                    <div className='flex flex-1 justify-between items-center'>
                                                        <p className='font-medium'>{thisItem?.quantity}</p>
                                                        <Button
                                                            variant={'unstyled'}
                                                            onClick={() => removeFromCart(item?.id)}
                                                        >
                                                            <p className='text-xs text-zinc-500'>Delete</p>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </li>
                                        </>)
                                }
                            })}
                        </ul>
                    </DrawerBody>
                    <DrawerFooter className='border-t border-slate-100 flex flex-col'>
                        <div className='flex space-x-36 mb-10'>
                            <h1 className='font-bold'>TOTAL</h1>
                            <p className='font-bold'>${subtotal}</p>
                            {/* <p className='font-bold'>
                                {
                                    cartItems.reduce((total, cartItem) => {
                                        const item = data.menu.find(i => i.id === cartItem.id)
                                        return total + (item?.price || 0) * cartItem.quantity
                                    }, 0)
                                }
                            </p> */}
                        </div>
                        <Button
                            variant={'buttonOutline'}
                            fontWeight={{ base: 'normal', md: 'medium' }}
                            onClick={() => checkout({ products })}
                        >
                            <h1 className='font-bebas px-5 text-xl'>MAKE PAYMENT</h1>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}