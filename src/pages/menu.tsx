import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { MenuCart } from '../components/MenuCart'
import { MenuList } from '../components/MenuList'
import { data } from '../constants'

export const Menu = ({ }) => {
    return (
        <div className='bg-peach-100'>
            <div className='flex justify-between p-5'>
                <h1 className='font-serif font-bold text-2xl'>éveiller</h1>
                <MenuCart />
            </div>
            <div className='mx-10 py-10'>
                <Tabs isFitted defaultIndex={0} align='center' size='lg' variant='enclosed unstyled' bg='peach.80' className=''>
                    <TabList>
                        <Tab bg={'peach.200'} color={'white'} _selected={{ color: 'black', bg: 'peach.80' }}><p className='font-rondal font-bold text-2xl'>Hair</p></Tab>
                        <Tab bg={'peach.200'} color={'white'} _selected={{ color: 'black', bg: 'peach.80' }}><p className='font-rondal font-bold text-2xl'>Nails</p></Tab>
                        <Tab bg={'peach.200'} color={'white'} _selected={{ color: 'black', bg: 'peach.80' }}><p className='font-rondal font-bold text-2xl'>Massages</p></Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {data.hairMenu.map((tab, index) => (
                                <MenuList
                                    key={tab.title + index}
                                    id={tab.id}
                                    title={tab.title}
                                    subtitle={tab.subtitle}
                                    price={tab.price}
                                    imgUrl={tab.imgUrl}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {data.nailMenu.map((tab, index) => (
                                <MenuList
                                    key={tab.title + index}
                                    id={tab.id}
                                    title={tab.title}
                                    subtitle={tab.subtitle}
                                    price={tab.price}
                                    imgUrl={tab.imgUrl}
                                />
                            ))}
                        </TabPanel>
                        <TabPanel>
                            {data.massageMenu.map((tab, index) => (
                                <MenuList
                                    key={tab.title + index}
                                    id={tab.id}
                                    title={tab.title}
                                    subtitle={tab.subtitle}
                                    price={tab.price}
                                    imgUrl={tab.imgUrl}
                                />
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default Menu