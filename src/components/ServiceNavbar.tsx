import { Box, Flex, HStack, IconButton, Link, Stack, textDecoration, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

export const ServiceNavbar = ({ }) => {
    //For when we need to use the hamburger icon for smaller screens
    const { isOpen, onOpen, onClose } = useDisclosure()
    const gray50 = useColorModeValue('gray.50', '') 
    const gray90 = useColorModeValue('gray.900', '')

    return (
        <div>
            <Box px={4} bg={useColorModeValue('rgba(0,0,0,0.5)', '')} color={useColorModeValue('gray.50', '')} >
                <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex><Link href='/' _hover={{textDecoration: 'none'}}><h1 className='font-serif font-bold text-3xl'>éveiller</h1></Link></Flex>
                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        <Box px={3} py={1} rounded={'lg'} _hover={{ textDecoration: 'none', bg: gray50, color: gray90 }}><Link as={NextLink} _hover={{ textDecoration: 'none' }} href='#hairstyling'><h1 className='font-bebas text-xl tracking-widest'>Hair</h1></Link></Box>
                        <Box px={3} py={1} rounded={'lg'} _hover={{ textDecoration: 'none', bg: gray50, color: gray90 }}><Link as={NextLink} _hover={{ textDecoration: 'none' }} href='#nailstyling'><h1 className='font-bebas text-xl tracking-widest'>Nail</h1></Link></Box>
                        <Box px={3} py={1} rounded={'lg'} _hover={{ textDecoration: 'none', bg: gray50, color: gray90 }}><Link as={NextLink} _hover={{ textDecoration: 'none' }} href='#massages'><h1 className='font-bebas text-xl tracking-widest'>Massage</h1></Link></Box>
                    </HStack>
                    <IconButton
                        icon={isOpen ? <GrClose /> : <GiHamburgerMenu />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        pl={3}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Stack pb={4} display={{ md: 'none' }}>
                        <Box px={3} py={1} rounded={'lg'} _hover={{ textDecoration: 'none', bg: gray50, color: gray90 }}><Link as={NextLink} _hover={{ textDecoration: 'none' }} href='#hairstyling'><h1 className='font-bebas text-xl tracking-widest'>Hair</h1></Link></Box>
                        <Box px={3} py={1} rounded={'lg'} _hover={{ textDecoration: 'none', bg: gray50, color: gray90 }}><Link as={NextLink} _hover={{ textDecoration: 'none' }} href='#nailstyling'><h1 className='font-bebas text-xl tracking-widest'>Nail</h1></Link></Box>
                        <Box px={3} py={1} rounded={'lg'} _hover={{ textDecoration: 'none', bg: gray50, color: gray90 }}><Link as={NextLink} _hover={{ textDecoration: 'none' }} href='#massages'><h1 className='font-bebas text-xl tracking-widest'>Massage</h1></Link></Box>
                    </Stack>
                ) : null}
            </Box>
        </div>
    )
}
