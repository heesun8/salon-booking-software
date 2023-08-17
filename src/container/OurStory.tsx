import Image from 'next/image'
import { Heading } from '../components/Heading'
import { Stack, Box } from '@chakra-ui/react'
import images from '../constants/images'

export const OurStory = ({ }) => {
    return (
        <div className=''>
            <div className=''>
                <Heading
                    title='Professional Hair & Nail Stylists'
                    subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum. Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis. Aliquam ut magna leo. Donec feugiat, leo lobortis laoreet, magna velit sodales magna'
                />
            </div>
            <div className='flex flex-row relative mx-16'>
                <Box background=''>
                    <Stack
                        background='#FFDBC0'
                        className='p-10 sm:mr-72 sm:py-24'
                    >
                        <h1 className='font-rondal text-3xl text-center sm:text-left font-semibold'>Our Story</h1>
                        <p className='text-center sm:text-left sm:mr-40 sm:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum.Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis. Aliquam ut magna leo. Donec feugiat, leo non vestibulum molestie, sapien nunc porttitor lorem, id aliquet ipsum velit in turpis. Phasellus blandit, elit ac lobortis laoreet, magna velit sodales magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet quam a ligula volutpat blandit maximus vel ipsum.Nulla vitae nisl imperdiet, pharetra nisi interdum, varius turpis. Aliquam ut magna leo. Donec feugiat, leo non vestibulum molestie, sapien nunc porttitor lorem, id aliquet ipsum velit in turpis. Phasellus blandit, elit ac lobortis laoreet, magna velit sodales magna</p>
                    </Stack>
                    <div className='h-12 sm:w-96 sm:h-32'>
                        <div className='hidden sm:absolute sm:top-8 sm:right-0'>
                            <Image
                                src={images.home}
                                width={400}
                                height={400}
                                alt='about us image.'
                                className=''
                            />
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}