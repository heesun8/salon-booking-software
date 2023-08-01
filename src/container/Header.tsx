import Image from 'next/image'
import { images } from '~/constants'

export const Header = ({}) => {
    return (
        <div className='z-index h-screen brightness-70'>
            <Image 
            src={images.home}
            layout={'fill'}
            objectFit={'contain'}
            alt='headerImage'
            />
            {/* <Image src={images.homeDownArrow}
            width={500}
            height={500}
            alt='downArrow'
            /> */}
        </div>
    )
}