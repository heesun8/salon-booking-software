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
        <div className='flex flex-col sm:h-screen'>
            <div className='flex relative justify-center items-center'>
                <div className='w-full h-96'>
                    <Image
                        // width={700}
                        // height={200}
                        id={title.toLowerCase().replace(/\s/g, '')}
                        style={{ objectFit: 'cover' }}
                        layout={'fill'}
                        src={imgHeader}
                        alt='Service Menu Image Header.'
                    />
                </div>
                <div className='flex absolute'>
                    <ServiceHeader title={title} />
                </div>
            </div>
            <div className='flex relative justify-center sm:space-x-24 mt-10 flex-col sm:flex-row'>
                <div className='flex w-96 h-96 hidden sm:inline'>
                    <Image
                        width={500}
                        height={500}
                        style={{ objectFit: 'cover' }}
                        src={imgUrl}
                        alt='Service Menu Image 2.'
                        className='w-full h-5/6'
                    />
                </div>
                <div className='flex flex-col pb-10 items-center'>
                    <ServiceMenu serviceMenu={serviceMenu} />
                    <Button
                        className='font-bebas mt-3'
                        variant='outline'
                        border='2px'
                        borderColor='zinc.300'
                        _hover={{ bg: 'peach.100', borderColor: 'peach.100' }}
                        fontWeight={{ base: 'normal', md: 'medium' }}
                    >
                        <h1 className='text-zinc-600 px-8 text-xl'>BOOK APPOINTMENT</h1>
                    </Button>
                </div>
            </div>
        </div>
    )
}

