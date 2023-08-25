import { createContext, ReactNode, useContext, useState } from 'react'
import { MenuCart } from '../components/MenuCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ShoppingCartProviderProps {
    children: ReactNode
}

interface CartItem {
    id: number
    quantity: number 
}

interface ShoppingCartContext {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void 
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

//create context
const ShoppingCartContext = createContext({} as ShoppingCartContext)

//give it an overarching name = 'use'+'ShoppingCart'
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "salon-booking-software", 
        []
    )

    const cartQuantity = cartItems.reduce(
        (quantity, item ) => item.quantity + quantity, 0
    )

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id: number) {
        console.log('increase has been clicked')
        console.log(id)
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) === null) {
                return [...currItems, { id, quantity: 1}]
            } else {
                console.log(cartItems)
                return currItems.map(item => {
                    console.log(item.id)
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id: number) {
        console.log('decrease has been clicked')
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1){
               return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider
        value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity
        }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}