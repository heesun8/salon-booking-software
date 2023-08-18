import { extendTheme } from '@chakra-ui/react' 
import { ButtonTheme } from './ButtonTheme'

//Necessary setup to make sure Chakra component customizations work
const theme =  extendTheme({
    components: {
        Button: ButtonTheme
    },
    colors: {
        peach:{
            50: '#f6b092',
            100: '#FFDBC0',
            200: '#DDA47C'
        },
    },
})

export default theme