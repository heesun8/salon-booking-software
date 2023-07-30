import Image from 'next/image'
import { Box, Button, Stack } from '@chakra-ui/react'

export const HomepageCard = ({ }) => {
    return (
        <div className='flex relative'>
            <Box maxW='sm' borderWidth='5px' borderRadius='' overflow='hidden'>
                <Image
                    src='/home.jpg'
                    // fill={true}
                    width={200}
                    height={700}
                    alt='homepage image.'
                />
                <div className='flex items-center bg-white-50 box-border w-60 h-60 border border-black'>
                    <Stack display='flex' alignItems='baseline'>
                        <h1>Hair Styling</h1>
                        <p>Modern cuts with a classic and natural design</p>
                        <Button variant='buttonOutline'
                        >Book Now
                        </Button>
                    </Stack>

                </div>
            </Box>

        </div>
    )
} 