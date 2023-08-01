import { ServiceCard } from '../components/ServiceCard'
import { data } from '../constants'

export const Services = ({ }) => {
    return (
        <div className='flex justify-center space-x-3'>
            {data.homepage2.map((homepage, index) => (
                <ServiceCard 
                key={homepage.title + index} 
                title={homepage.title} 
                subtitle={homepage.subtitle}
                imgUrl={homepage.imgUrl}
                />
            ))}
        </div>
    )
}