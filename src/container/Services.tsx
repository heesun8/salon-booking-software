import { ServiceCard } from '../components/ServiceCard'
import { data } from '../constants'

export const Services = ({ }) => {
    return (
        <div className='flex items-center sm:justify-center gap-y-10 sm:gap-x-20 flex-col sm:flex-row'>
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