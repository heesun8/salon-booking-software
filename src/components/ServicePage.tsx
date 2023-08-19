import Image, { StaticImageData } from "next/image"
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
        <div>
            <div>
                <Image
                    width={700}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    src={imgHeader}
                    alt='Service Menu Image Header.'
                />
                <ServiceHeader title={title} />
            </div>
            <div>
                <Image
                    width={500}
                    height={500}
                    style={{ objectFit: 'cover' }}
                    src={imgUrl}
                    alt='Service Menu Image 2.'
                />
                <ServiceMenu serviceMenu={serviceMenu}/>
            </div>
        </div>
    )
}

