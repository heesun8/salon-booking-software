import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'

interface MenuNavbarProps {
    btnRef: React.MutableRefObject<null>
    onOpen: () => void
}

export const MenuNavbar = ({ btnRef, onOpen}: MenuNavbarProps) => {

    return (
        <div className='flex justify-between p-5'>
            <h1 className='font-serif font-bold text-2xl'>éveiller</h1>
            <Button ref={btnRef} onClick={onOpen}>
                <AiOutlineShoppingCart size={40} color={''} />
            </Button>
        </div>
    )
}