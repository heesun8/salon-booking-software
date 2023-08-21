import { data } from '../constants'
import { Box, Container, Flex } from '@chakra-ui/react'
import { ServicePage } from '../components/ServicePage'
import { ServiceNavbar } from '../components/ServiceNavbar'
import { Footer } from '../container/Footer'
import { StaticImageData } from 'next/image'

export const Services = ({ }) => {
    return (
        <div className='flex flex-col'>
            <div className='sticky top-0 z-20'>
                <ServiceNavbar />
            </div>
            <div className='z-10 w-full'>
                {data.services.map((service: { imgHeader: StaticImageData; imgUrl: StaticImageData, title: string, serviceMenu: string[] }, index: any) => (
                    <ServicePage
                        key={index + service.title}
                        imgHeader={service.imgHeader}
                        imgUrl={service.imgUrl}
                        title={service.title}
                        serviceMenu={service.serviceMenu}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Services