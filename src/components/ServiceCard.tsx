import Image, { StaticImageData } from 'next/image'
import { Box, Button, Stack } from '@chakra-ui/react'

interface ServiceCardProps {
    title: string | undefined
    subtitle: string
    imgUrl: StaticImageData //Instead of 'HTMLImageElement', looks like this is the correct typescript typing for static images in assets folder
}

//Homepage screen 2 content
export const ServiceCard = ({ title, subtitle, imgUrl }: ServiceCardProps) => {
    return (
        <div className='flex w-64 h-96'>
            <Stack className='flex relative w-full h-full' borderWidth='5px' borderRadius='' overflow='hidden'>
                <Image
                    src={imgUrl}
                    layout={'fill'}
                    objectFit={'cover'}
                    alt='homepage2 image.'
                    className=''
                />
                <div className='flex mt-32 mx-2 mb-3 absolute bg-slate-50 box-border border border-black'>
                    <Box className='flex flex-col items-center'>
                        <h1 className='mt-7'>{title}</h1>
                        <p className='m-5 mb-8 text-center'>{subtitle}</p>
                        <Button className='mb-4' variant='buttonOutline'
                        >Book Now
                        </Button>
                    </Box>
                </div>
            </Stack>
        </div>
    )
} 