import { Heading } from '../components/Heading'
import { Stack, Button } from '@chakra-ui/react'
import Image from 'next/image'
import images from '../constants/images'

export const WorkingHours = ({ }) => {
    return (
        <div className='flex relative'>
            <div className='w-full h4/5'>
                <Image
                    src={images.workinghours}
                    style={{ objectFit: 'cover' }}
                    layout={'fill'}
                    alt='working hours.'
                />
                <Stack className='flex relative'>
                    <div className=''>
                        <Heading
                            title='Working Hours'
                            subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum. Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis.'
                        />
                    </div>
                </Stack>
            </div>
            <Button
                variant='buttonOutline'
                className=' font-bebas'>
                Book Now
            </Button>
        </div>
    )
}