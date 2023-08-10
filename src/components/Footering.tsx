
interface FooteringProps {
    title: string
    subheading: string
}

export const Footering = ( { title, subheading}: FooteringProps ) => {
    return (
        <div className='flex flex-col'> 
            <h2 className='font-rondal font-bold'>{title}</h2>
            <p>{subheading}</p>
        </div>
    )
}