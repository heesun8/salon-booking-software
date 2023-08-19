import { data } from '../constants'
import { ServicePage } from '../components/ServicePage'
import { StaticImageData } from 'next/image'

export const Services = ({ }) => {
    return (
        <div>
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
    )
}

export default Services