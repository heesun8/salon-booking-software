
interface HeadingProps {
    title: string
    subheading: string
}

export const Heading = ({ title, subheading } : HeadingProps) => {
    return(
        <div className='flex flex-col text-center my-24 mx-2 lg:m-36 sm:m-24 items-center'>
            <h1 className='font-rondal font-bold text-5xl pb-7'>{title}</h1>
            <p className='font-noto text-lg text-center mx-4 md:mx-12'>{subheading}</p>
        </div>
    )
}