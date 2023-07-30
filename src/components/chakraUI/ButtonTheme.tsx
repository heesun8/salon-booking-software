import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

//customize Chakra Button CSS
const buttonOutline = defineStyle({
    color: 'black',
    background: 'peach.100'
})

export const ButtonTheme = defineStyleConfig({
    variants: { buttonOutline },
})