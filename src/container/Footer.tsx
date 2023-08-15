import { Footering } from '../components/Footering'
import { Button, Stack } from '@chakra-ui/react'
import { data } from '../constants'

export const Footer = ({ }) => {
    return (
        <div className='bg-peach-100 p-10'>
            <Stack className='items-center'>
                <h3 className='font-noto'>Join the newsletter</h3>
                <div className='flex items-center flex-col mb-10 sm:flex-row'>
                    <label htmlFor='email'></label>
                    <input
                        type='email'
                        placeholder='Email Address'
                        className='w-64 p-2 m-3 mb-5'
                    />
                    <Button
                        background='#DDA47C'
                        borderRadius='3'
                    >
                        <h1 className='font-bebas px-5 text-xl'>SUBSCRIBE</h1>
                    </Button>
                </div>
                <div className='border w-24 border-1 border-peach-200 mb-10' />
                <div className='flex flex-col space-y-12 sm:space-y-2 sm:flex-row sm:space-x-12'>
                    {data.footer.map((footer, index) => (
                        <Footering
                            key={footer.title + index}
                            title={footer.title}
                            subheading={footer.subheading}
                        />
                    ))}
                    {/* <div className='font-rondal font-bold'>Opening Hour</div> */}
                </div>
                <div className='border w-24 border-2 border-peach-200 my-10' />
                <p>Some footer note or website owner signature comment</p>
            </Stack>
        </div>
    )
}