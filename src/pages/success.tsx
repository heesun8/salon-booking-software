import Image from 'next/image'
import images from '../constants/images'
export const Success = ({ }) => {
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
            <div className='flex flex-1 flex-col w-1/3 h-2/3 m-10 absolute items-center bg-slate-10'>
                <div className='flex items-center flex-col'>
                    <h1>Ticket #:</h1>
                    <p>random number</p>
                </div>
                <div className='border-t flex justify-between'>
                    <h1>Item Title</h1>
                    <p>Item Price</p>
                </div>
                <div className='flex justify-between items-end border-t'>
                    <h1>TOTAL</h1>
                    <p>AMOUNT</p>
                </div>
            </div>
        </div>
    )
}

export default Success