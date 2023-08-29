import Image from 'next/image'
import { Stack } from '@chakra-ui/react'
import { images } from '~/constants'

export const Header = ({}) => {
    return (
        <div className='flex z-index relative justify-center items-end sm:items-center'>
            <div className='h-screen'>
                <Image
                    src={images.home}
                    layout={'fill'}
                    objectFit={'cover'}
                    alt='headerImage.'
                    className='brightness-50'
                />
            </div>
            <Stack className='flex flex-1 absolute'>
                <div className='flex flex-1 flex-col items-center'>
                    <h1 className='font-serif flex-1 sm:mt-32 text-slate-100 text-7xl sm:text-[200px] xl:text-[250px]'>éveiller</h1>

                    <div className='w-50 h-50 mt-60 sm:mt-32 xl:mt-48 mb-20 animate-bounce'>
                        <Image
                            src={images.homeDownArrow}
                            style={{objectFit:'contain'}}
                            alt='downArrow.'
                        />
                    </div>
                </div>
            </Stack>
        </div>
    )
}