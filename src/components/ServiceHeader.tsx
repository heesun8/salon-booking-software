import Link from 'next/link'
interface ServiceHeaderProps {
    title: string
}

export const ServiceHeader = ({ title }: ServiceHeaderProps ) => {
    return(
        <div className='flex justify-center items-center'> 
            <h1 className='font-country text-4xl text-slate-50 z-10'>{title}</h1>
            <div className='absolute z-0 bg-zinc-700 w-56 h-14'/> 
        </div>
    )
}