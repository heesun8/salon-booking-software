
interface FooteringProps {
    title: string
    subheading: string
}

export const Footering = ( { title, subheading}: FooteringProps ) => {
    return (
        <div> 
            <h2>{title}</h2>
            <p>{subheading}</p>
        </div>
    )
}