import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { MenuItem } from '../components/MenuItem'
import { data } from '../constants'
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export const MenuCart = ({ }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { cartItems } = useShoppingCart()
    const btnRef = React.useRef(null)
    return (
        <div>
            <Button ref={btnRef} onClick={onOpen}>
                <AiOutlineShoppingCart size={40} color={''} />
            </Button>
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
                        {cartItems?.map(item => (
                            <MenuItem key={item.id} {...item} />
                        ))}
                    </DrawerBody>
                    <DrawerFooter className='border-t border-slate-100 flex flex-col'>
                        <div className='flex space-x-36 mb-10'>
                            <h1 className='font-bold'>TOTAL</h1>
                            <p className='font-bold'>
                                {
                                    cartItems.reduce((total, cartItem) => {
                                        const item = data.menu.find(i => i.id === cartItem.id)
                                        return total + (item?.price || 0) * cartItem.quantity
                                    }, 0)
                                }                                </p>
                        </div>
                        <Button
                            variant={'buttonOutline'}
                            fontWeight={{ base: 'normal', md: 'medium' }}
                        >
                            <h1 className='font-bebas px-5 text-xl'>MAKE PAYMENT</h1>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}