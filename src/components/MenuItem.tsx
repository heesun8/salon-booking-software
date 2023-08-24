import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { useShoppingCart } from '~/context/ShoppingCartContext'
import { data } from '../constants'

interface MenuItemProps {
    id: number
    quantity: number
}

export const MenuItem = ({ id, quantity }: MenuItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = data.menu.find(i => i.id === id)
    if (item === null) return null

    return (
        <>
            <li>
                <div>
                    {/* <Image /> */}
                </div>
                <div>
                    <h3>{item?.title}</h3>
                    <p>{item?.price}</p>
                </div>
                <div>
                    {quantity > 1 && (
                        <span>
                            <p>{quantity}</p>
                        </span>
                    )}
                    <Button
                    onClick={() => removeFromCart(item?.id)}
                    >Remove</Button>
                </div>
            </li>
        </>
    )
}