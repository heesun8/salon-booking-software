import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { useShoppingCart } from '~/context/ShoppingCartContext'
import { data } from '../constants'


//THIS FILE IS CURRENTLY DEPRECIATED
interface MenuCartItemProps {
    id: number
    quantity: number
}

export const MenuCartItem = ({ id, quantity }: MenuCartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = data.menu.find(i => i.id === id)
    if (item === null) return null
    return (
        <>
            <li key={item.id}>
                <div>
                    {/* <Image /> */}
                </div>
                <div>
                    <h3>{item?.title}</h3>
                    <p>{item?.price}</p>
                </div>
                <div>
                    <p>{thisItem?.quantity}</p>
                    <Button
                        onClick={() => removeFromCart(item?.id)}
                    >Remove</Button>
                </div>
            </li>
        </>)
}