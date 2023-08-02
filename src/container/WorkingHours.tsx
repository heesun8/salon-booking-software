import { Heading } from '../components/Heading'
import { Stack, Button } from '@chakra-ui/react'
import Image from 'next/image'
import images from '../constants/images'

export const WorkingHours = ({ }) => {
    return (
        <div>
            <Image
                src={images.workinghours}
                width={500}
                height={500}
                alt='working hours.'
            />
            <Stack>
                <Heading
                    title='Working Hours'
                    subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum. Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis.'
                />
            </Stack>
            <Button variant='buttonOutline'>Book Now</Button>

        </div>
    )
}