import { Button } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import { BiSolidBookmarkPlus, BiBookmarkMinus } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { data } from '../constants'

interface MenuListProps {
    id: number
    title: string
    subtitle: string
    price: number
    imgUrl: StaticImageData
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    getItemQuantity: (id: number) => number
}

export const MenuList = ({
    id,
    title,
    subtitle,
    price,
    imgUrl,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity
}: MenuListProps) => {
    
    // const {
    //     getItemQuantity,
    //     increaseCartQuantity,
    //     decreaseCartQuantity,
    //     removeFromCart,
    // } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <div className='flex flex-col sm:flex-row bg-peach-70 mb-7'>
            <div className='p-5'>
                <Image
                    width={600}
                    height={600}
                    style={{ objectFit: 'cover' }}
                    // layout={'fill'}
                    src={imgUrl}
                    alt='menu list.'
                    className='w-96 h-48 sm:w-120 sm:h-48 2xl:w-96 2xl:h-60'
                />
            </div>
            <div className='p-5'>
                <div className='text-left sm:py-2'>
                    <h1 className='font-bold tracking-widest p-2'>{title}</h1>
                    <p className='p-2'>{subtitle}</p>
                </div>
                <div className='flex justify-end'>
                    <div className='flex pr-3'>
                        <IconContext.Provider value={{ size: '30' }}>
                            <button
                                className='px-2'
                                onClick={() =>
                                    decreaseCartQuantity(id)}
                            >
                                <BiBookmarkMinus />
                            </button>
                            <p>{quantity}</p>
                            <button
                                className='px-2'
                                onClick={() => increaseCartQuantity(id)}
                            >
                                <BiSolidBookmarkPlus />
                            </button>
                        </IconContext.Provider>
                    </div>
                    <p>${price}.00</p>
                </div>
            </div>
        </div>
    )
}