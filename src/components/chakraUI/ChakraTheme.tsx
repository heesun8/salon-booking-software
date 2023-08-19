import { extendTheme } from '@chakra-ui/react'
import { ButtonTheme } from './ButtonTheme'

//Necessary setup to make sure Chakra component customizations work
const theme = extendTheme({
    components: {
        Button: ButtonTheme
    },
    colors: {
        peach: {
            50: '#f6b092',
            100: '#FFDBC0',
            200: '#DDA47C'
        },
        zinc: {
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            700: '#3f3f46'
        },
    },
})

export default theme