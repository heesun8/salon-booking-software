import Image from 'next/image'
import { useEffect, useState } from 'react'
import images from '../constants/images'
import { data } from '../constants'

export const Success = ({ }) => {
    const [products, setProducts] = useState<{ id: number; quantity: number }[] | null | false>(null)

    useEffect(() => {
        const products = localStorage.getItem('products')
        if (!products) setProducts(false)
        else setProducts(JSON.parse(products))
    }, [])

    if (products === null)
        return (
            <div>Spinning~</div>
        )

    if (products === false) return <div>What are you doing on this page</div>

    return (
        <div className='flex flex-1'>
            <Image
                width={500}
                height={500}
                style={{ objectFit: 'cover' }}
                src={images.thankyou}
                alt='success page photo.'
                className='w-full h-screen'
                unoptimized
            />
            {data.menu.map(item => (
            <div className='flex flex-1 flex-col w-1/3 h-2/3 m-10 absolute items-center bg-slate-10'>
                <div className='flex items-center flex-col'>
                    <h1>Ticket #:</h1>
                    <p>random number</p>
                </div>
                <div className='border-t flex justify-between'>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                </div>
                <div className='flex justify-between items-end border-t'>
                    <h1>TOTAL</h1>
                    <p>AMOUNT</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Success