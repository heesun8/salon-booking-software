import Image from 'next/image'
import { Stack } from '@chakra-ui/react'
import { images } from '~/constants'

export const Header = ({ }) => {
    return (
        <div className='flex z-index relative justify-center items-end'>
            <div className='h-screen'>
                <Image
                    src={images.home}
                    layout={'fill'}
                    objectFit={'cover'}
                    alt='headerImage'
                    className='brightness-50'
                />
            </div>
            <Stack className='flex absolute border border-black border-2'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-slate-100 text-7xl sm:text-[250px]'>éveiller</h1>

                    <div className='w-50 h-50 mt-60 mb-20'>
                        <Image src={images.homeDownArrow}
                            layout={'contain'}
                            objectFit={'contain'}
                            alt='downArrow'
                        />
                    </div>
                </div>
            </Stack>
        </div>
    )
}