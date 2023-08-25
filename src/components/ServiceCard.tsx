import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Box, Button, Stack } from '@chakra-ui/react'

interface ServiceCardProps {
    title: string | undefined
    subtitle: string
    imgUrl: StaticImageData //Instead of 'HTMLImageElement', looks like this is the correct typescript typing for static images in assets folder
}

//Homepage screen 2 content
export const ServiceCard = ({ title, subtitle, imgUrl }: ServiceCardProps) => {
    return (
        <div className='flex w-72 h-96'>
            <Stack className='flex relative w-full h-full' borderWidth='' borderRadius='' overflow='hidden'>
                <Image
                    src={imgUrl}
                    layout={'fill'}
                    style={{ objectFit: 'cover' }}
                    alt='homepage2 image.'
                    className=''
                />
                <div className='flex mt-36 mx-5 mb-3 absolute bg-slate-50 bg-opacity-80'>
                    <Box className='flex flex-col items-center'>
                        <h1 className='font-rondal font-bold text-3xl mt-7'>{title}</h1>
                        <p className='font-noto m-5 mb-8 text-center'>{subtitle}</p>
                        <Button
                            className='font-bebas mb-4'
                            variant='buttonOutline'
                            _hover={{ bg: 'peach.200', textColor: 'white' }}
                            fontWeight={{ base: 'normal', md: 'medium' }}
                        >
                            <Link href='/services'><h1 className='text-xl px-5'>BOOK NOW</h1></Link>
                        </Button>
                    </Box>
                </div>
            </Stack>
        </div>
    )
} 