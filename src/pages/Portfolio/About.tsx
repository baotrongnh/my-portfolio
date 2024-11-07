import { Button, Image, Text, useMantineTheme } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import avatar2 from './../../assets/photo/avatar-2.jpg'

export default function About() {
     const theme = useMantineTheme()

     return (
          <div className="py-20">
               <div className='container' data-aos="fade-up">
                    <div className='grid grid-cols-12'>
                         <div className='col-span-12 lg:col-span-6 px-7'>
                              <Image
                                   radius="md"
                                   src={avatar2}
                              />
                         </div>

                         <div className='col-span-12 lg:col-span-6'>
                              <div className='px-7'>
                                   <Text
                                        c={theme.colors.purpleTheme[5]}
                                        fw={700}
                                        size='20px'
                                        className='pt-8 lg:pt-0'
                                   >
                                        Who am i?
                                   </Text>
                                   <Text
                                        fw={700}
                                        size='35px'
                                        p='20px 0'
                                   >
                                        I'm Bao Trong, a Front-end developer
                                   </Text>
                                   <Text size='18px' className='leading-8 text-justify opacity-85'>
                                        " I'm a frontend developer who loves working with fonts, colors, and making sure websites feel welcoming. I enjoy creating simple, clean designs that are easy to use and help people have a smooth experience. It's all about making things look nice without overcomplicating them! "
                                   </Text>

                                   <div className='mt-5'>
                                        <Button leftSection={<IconDownload stroke={2} size={14} />}>
                                             Download CV
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
