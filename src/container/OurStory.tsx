import Image from 'next/image'
import { Heading } from '../components/Heading'
import { Stack, Box } from '@chakra-ui/react'
import images from '../constants/images'

export const OurStory = ({}) => {
    return (
        <div className=''>
            <Heading
                title='Professional Hair & Nail Stylists'
                subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum. Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis. Aliquam ut magna leo. Donec feugiat, leo lobortis laoreet, magna velit sodales magna'
            />
            <div className='flex'>
                <Box background='#FFDBC0'>
                    <Stack>
                        <h1 className='font-semibold'>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum.Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis. Aliquam ut magna leo. Donec feugiat, leo non vestibulum molestie, sapien nunc porttitor lorem, id aliquet ipsum velit in turpis. Phasellus blandit, elit ac lobortis laoreet, magna velit sodales magna</p>
                    </Stack>
                </Box>
                <Image
                    src={images.home}
                    width={500}
                    height={500}
                    alt='about us image.'
                    className='absolute'
                />
            </div>
        </div>
    )
}