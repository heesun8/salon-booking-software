interface ServiceHeaderProps {
    title: string
}

export const ServiceHeader = ({ title }: ServiceHeaderProps ) => {
    return(
        <div className='flex justify-center items-center'> 
            <h1 className='font-country z-10'>{title}</h1>
            <div className='absolute z-0 bg-zinc-500 w-12 h-12'/> 
        </div>
    )
}