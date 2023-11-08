import { Footering } from '../components/Footering'
import { Button, Stack } from '@chakra-ui/react'
import { data } from '../constants'

export const Footer = ({ }) => {
    return (
        <div className='bg-peach-100 p-10'>
            <Stack className='items-center'>
                <h3 className='font-noto'>Join the newsletter</h3>
                <div className='flex flex-col sm:items-baseline mb-10 sm:flex-row'>
                    <label htmlFor='email'></label>
                    <input
                        type='email'
                        placeholder='Email Address'
                        className='w-72 p-2 mr-3 mb-5 sm:w-96'
                    />
                    <Button
                        background='#DDA47C'
                        borderRadius='3'
                        _hover={{bg: 'peach.50'}}
                    >
                        <h1 className='font-bebas px-5 text-xl'>SUBSCRIBE</h1>
                    </Button>
                </div>
                <div className='sm:border w-96 border-1 border-peach-50 mb-10' />
                <div className='flex flex-col items-center space-y-10 sm:mx-10 sm:space-y-2 sm:flex-row sm:space-x-10'>
                    {
                    /* eslint-disable @typescript-eslint/restrict-plus-operands */
                    data.footer.map((footer, index) => (
                        <Footering
                            key={footer.title + index} 
                            title={footer.title}
                            subheading={footer.subheading}
                        />
                    ))
                    /* eslint-disable @typescript-eslint/restrict-plus-operands */
                    }
                    {/* <div className='font-rondal font-bold'>Opening Hour</div> */}
                </div>
                <div className='sm:border w-96 border-1 border-peach-50 my-10' />
                <p className='font-bebas font-bold'>Heesun. A 🐈</p>
            </Stack>
        </div>
    )
}