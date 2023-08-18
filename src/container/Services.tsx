import { StaticImageData } from 'next/image'
import { ServiceCard } from '../components/ServiceCard'
import { Heading } from '../components/Heading'
import { data } from '../constants'

interface ServiceProps {
}
//test to see if it's possible to retreive a specific data from the 'header' array in data.ts
//currently haven't figured it out yet, together with the commented code below
// console.log(data.filter(x => x.title === 'Beauty'))

export const Services = ({ }) => {
    return (
        <div>
            {/* {data.header.map((header: { title: string; subheading: string }, index: any) => (
                <Heading title={header.title} subheading={header.subheading} />
            ))}
             */}
            <Heading
                title='Beauty and Spa Center'
                subheading='Vivamus sed ipsum porttitor, mattis est auctor, ultricies dolor. Proin maximus  feugiat lacus, ut sodales lorem laoreet at. In interdum urna odio, quis ornare est auctor eget. Etiam ornare ipsum sed ex rutrum gravida.'
            />
            <div className='flex items-center sm:justify-center gap-y-10 sm:gap-x-48 flex-col sm:flex-row'>
                {data.homepage2.map((homepage: { title: string; subtitle: string; imgUrl: StaticImageData }, index: any) => (

                    <ServiceCard
                        key={homepage.title + index}
                        title={homepage.title}
                        subtitle={homepage.subtitle}
                        imgUrl={homepage.imgUrl}
                    />
                ))}
            </div>
        </div>
    )
}