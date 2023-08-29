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
        <div className='flex flex-1 items-center justify-center w-72 h-96 lg:mx-10'>
            <Stack className='flex relative' borderWidth='' borderRadius='' overflow='hidden'>
                <Image
                    src={imgUrl}
                    // layout={'fill'}
                    width={600}
                    height={600}
                    style={{ objectFit: 'cover' }}
                    alt='homepage2 image.'
                    className='w-120 h-96'
                />
                <div className='flex flex-1 absolute justify-center items-center mt-36 mx-5'>
                    <Box className='flex flex-col flex-1 items-center justify-center md:w-48 md:h-56 bg-slate-50 bg-opacity-80'>
                        <h1 className='font-rondal font-bold text-3xl mt-7'>{title}</h1>
                        <p className='font-noto m-5 mb-4 text-center'>{subtitle}</p>
                        <div className=''>
                            <Button
                                className='font-bebas mb-4 '
                                variant='buttonOutline'
                                _hover={{ bg: 'peach.200', textColor: 'white' }}
                                fontWeight={{ base: 'normal', md: 'medium' }}
                            >
                                <Link href='/services'><h1 className='text-xl px-5'>BOOK NOW</h1></Link>
                            </Button>
                        </div>
                    </Box>
                </div>
            </Stack>
        </div>
    )
} 