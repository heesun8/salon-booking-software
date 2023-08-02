import { Footering } from '../components/Footering'
import { Button, Stack } from '@chakra-ui/react'
import { data } from '../constants'

export const Footer = ({}) => {
    return (
        <div>
            <Stack>
            <h3>Join the newsletter</h3>
            <div>
                <label htmlFor='email'></label>
                <input type='email' placeholder='Email Address' />
                <Button>SUBSCRIBE</Button>
            </div>
            <div className='border box-border border-6 border-black' />
            <div>
                {data.footer.map((footer, index) => (
                    <Footering
                        key={footer.title + index}
                        title={footer.title}
                        subheading={footer.subheading}
                    />
                ))}
            </div>
            <div className='border border-10 border-black'/> 
            <p>Some footer note or website owner signature comment</p>
            </Stack>
        </div>
    )
}