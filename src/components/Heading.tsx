
interface HeadingProps {
    title: string
    subheading: string
}

export const Heading = ({ title, subheading } : HeadingProps) => {
    return(
        <div className='flex flex-col m-10 text-center mt-32 sm:m-36 items-center'>
            <h1 className='font-rondal font-bold text-5xl pb-7'>{title}</h1>
            <p className='font-noto text-lg text-center mx-2 sm:mx-64'>{subheading}</p>
        </div>
    )
}