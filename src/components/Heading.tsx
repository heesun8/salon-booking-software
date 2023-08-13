
interface HeadingProps {
    title: string
    subheading: string
}

export const Heading = ({ title, subheading } : HeadingProps) => {
    return(
        <div className='flex flex-col m-36 items-center'>
            <h1 className='font-rondal font-bold text-5xl pb-7'>{title}</h1>
            <p className='font-noto text-lg text-center'>{subheading}</p>
        </div>
    )
}