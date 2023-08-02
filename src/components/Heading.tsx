
interface HeadingProps {
    title: string
    subheading: string
}

export const Heading = ({ title, subheading } : HeadingProps) => {
    return(
        <div>
            <h1 className='font-extrabold'>{title}</h1>
            <p>{subheading}</p>
        </div>
    )
}