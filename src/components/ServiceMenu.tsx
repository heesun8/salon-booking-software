import { Button } from '@chakra-ui/react'

interface ServiceMenuProps {
    serviceMenu: string[]
}

export const ServiceMenu = ({ serviceMenu }: ServiceMenuProps) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='bg-zinc-300 w-64 h-12' />
            {serviceMenu.map((menu, index) => (
                <div>
                    <p
                        key={index}
                        className='text-center p-2'
                    >
                        {menu}
                    </p>
                    <div className='bg-zinc-300 w-64 h-0.5' />
                </div>
            ))}
            <div className='bg-zinc-300 w-64 h-12' />
            <div
                className='border-r-[15px] border-l-[15px] border-t-[15px] border-t-zinc-300 border-slate-10'
            />
        </div>
    )
} 