import { Heading } from '../components/Heading'
import { Stack, Button, Box } from '@chakra-ui/react'
import Image from 'next/image'
import images from '../constants/images'

export const WorkingHours = ({ }) => {
    return (
        <div className='bg-white flex flex-col items-center'>
            <div className='relative'>
                <div className='w-full h-auto'>
                    <Image
                        src={images.workinghours}
                        style={{ objectFit: 'cover' }}
                        layout={'fill'}
                        alt='working hours.'
                    />
                </div>
                <Stack className='relative items-center p-5 sm:items-end sm:pt-36 sm:pl-36 sm:pb-36 sm:pr-12'>
                    <div className='bg-slate-50 bg-opacity-60 text-center pt-7 sm:w-1/3 sm:h-1/2 p-5'>
                        <div className=''>
                            <h1 className='font-rondal font-bold text-2xl sm:text-5xl sm:pb-7'>Working Hours</h1>
                            <p className='font-noto font-medium text-sm p-5 sm:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum. Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis.</p>
                        </div>
                        <div className='flex justify-center font-noto font-medium sm:text-xl space-x-12 sm:m-7 sm:space-x-36'>
                            <Stack className=''>
                                <p>Weekdays</p>
                                <p>Saturdays</p>
                                <p>Sundays</p>
                            </Stack>
                            <Stack>
                                <p>10:00 ~ 20:00</p>
                                <p>10:00 ~ 20:00</p>
                                <p>10:00 ~ 20:00</p>
                            </Stack>
                        </div>
                    </div>
                </Stack>
            </div>
            <Button
                variant='buttonOutline'
                className='m-14 px-36 font-bebas text-6xl'
                size='lg' 
                height={{base:'48px', md: '70px'}}
                width={{base: '200px', md: '400px' }}
                fontSize={{base:'20px', md: '30px'}}
                fontWeight={{base: 'normal', md: 'medium'}}
                >
                Book Now
            </Button>
        </div>
    )
}