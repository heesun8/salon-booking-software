import { Footering } from '../components/Footering'
import { Button, Stack } from '@chakra-ui/react'
import { data } from '../constants'

export const Footer = ({ }) => {
    return (
        <div className='bg-peach-100 p-10'>
            <Stack className='items-center'>
                <h3 className='font-noto'>Join the newsletter</h3>
                <div>
                    <label htmlFor='email'></label>
                    <input
                        type='email'
                        placeholder='Email Address'
                        className='w-64 p-2 m-3'
                    />
                    <Button
                        background='#DDA47C'
                        borderRadius='3'
                    >
                        <h1 className='font-bebas px-5 text-xl'>SUBSCRIBE</h1>
                    </Button>
                </div>
                <div className='border w-24 border-1 border-peach-200' />
                <div className='flex flex-row'>
                    {data.footer.map((footer, index) => (
                        <Footering
                            key={footer.title + index}
                            title={footer.title}
                            subheading={footer.subheading}
                        />
                    ))}
                    <div>Opening Hours</div>
                </div>
                <div className='border w-24 border-2 border-peach-200' />
                <p>Some footer note or website owner signature comment</p>
            </Stack>
        </div>
    )
}