import Image, { StaticImageData } from "next/image"
import { Button } from '@chakra-ui/react'
import { ServiceHeader } from '../components/ServiceHeader'
import { ServiceMenu } from '../components/ServiceMenu'

interface ServicePageProps {
    imgHeader: StaticImageData
    imgUrl: StaticImageData
    title: string
    serviceMenu: string[]
}

export const ServicePage = ({ imgHeader, imgUrl, title, serviceMenu }: ServicePageProps) => {
    return (
        <div className='h-screen'>
            <div className='flex'>
                <div className='w-screen h-5'>
                    <Image
                        // width={700}
                        // height={200}
                        style={{ objectFit: 'cover' }}
                        layout={''}
                        src={imgHeader}
                        alt='Service Menu Image Header.' 
                    />
                </div>
                <div className='flex absolute'>
                    <ServiceHeader title={title} />
                </div>
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    style={{ objectFit: 'cover' }}
                    src={imgUrl}
                    alt='Service Menu Image 2.'
                />
                <div>
                    <ServiceMenu serviceMenu={serviceMenu} />
                    <Button
                        className='font-bebas mt-3'
                        variant='outline'
                        border='2px'
                        borderColor='zinc.300'
                        _hover={{ bg: 'peach.100', border: '0px' }}
                        fontWeight={{ base: 'normal', md: 'medium' }}
                    >
                        <h1 className='text-zinc-600 px-8'>BOOK APPOINTMENT</h1>
                    </Button>
                </div>
            </div>
        </div>
    )
}

