import React from 'react'
import { Helmet } from 'react-helmet-async';

import ContactForm from '../components/ContactForm'

import contact from '../images/contact.png'




const Contact = () => {
  return (
    <>

      <div className=''>

        <Helmet>
          <title>Top Courses in Direction, Cinematography, Editing, & VFX</title>
          <meta
            name="description"
            content="Master direction, cinematography, editing, VFX, acting, photography, and virtual production with expert-led courses at Cinema Factory Academy. Join now!"
          />
          <meta
            name="keywords"
            content="Filmmaking, Virtual Production, VFX Courses, Direction, Cinematography, Editing, Media Career, Cinema Factory Academy"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
          {/* Add other meta tags here if needed */}
        </Helmet>


        {/* contact form */}

        <section>
          <div className='pt-10 md:pt-20 pb-10 md:pb-20 '>

            <div className='mb-6 md:mb-16'>
              <h1 className='text-center font-bold text-[18px] md:text-[28px] uppercase '>Learn, Explore & Grow with Us!</h1>
            </div>

            <div className='w-full px-4 md:w-[80%] mx-auto flex flex-col gap-y-10 md:flex-row items-center'>

              <div className='w-full md:w-[50%]'>

                <div>
                  <img src={contact} alt='contact' title="cinema factory academy" loading="lazy" fetchpriority="auto" />
                </div>

              </div>

              <div className='w-full md:w-[50%]'>
                <div className=' md:px-16'>
                  <ContactForm />
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* <section className='pt-10 pb-10 md:pt-20 md:pb-20 bg-gray-950 font-[poppins]'>
          <div className='w-[80%] mx-auto'>

            <div className='flex justify-center items-center'>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-8'>

                
                <div>
                  <div className='flex flex-col  justify-center items-start'>

                    <div className='mb-4'>
                      <h3 className='font-bold text-[16px] md:text-[20px] uppercase text-white'>Addresss</h3>
                    </div>

                    <div className='flex flex-col gap-y-2 font-[poppins]'>
                      <p className=' text-start text-[14px] text-gray-100'>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India</p>
                      <p className=' text-start text-[14px] text-gray-100'>contact@cinemafactory.co.in</p>
                    </div>

                  </div>
                </div>

                <div>
                  <div className='flex flex-col  justify-center items-start'>

                    <div className='mb-4'>
                      <h3 className='font-bold text-[16px] md:text-[20px] uppercase text-white'>Contact</h3>
                    </div>

                    <div className='flex flex-col gap-y-2 font-[poppins]'>
                      <p className=' flex items-center gap-x-2 text-start text-[14px] text-gray-100'> <span> <FaMobileScreen className='text-white text-[18px]' /></span> +91 9884683888</p>
                      <p className=' flex items-center gap-x-2 text-start text-[14px] text-gray-100'> <span> <FaMobileScreen className='text-white text-[18px]' /></span> +91 9884428688</p>
                      <p className=' flex items-center gap-x-2 text-start text-[14px] text-gray-100'> <span> <TbDeviceLandlinePhone className='text-white text-[18px]' /></span> +91 44 24815365</p>

                    </div>


                  </div>
                </div>


              </div>
            </div>
          </div>
        </section> */}



        {/* <section className='bg-gray-950 pt-20 pb-20'>
          <div className='w-[80%] mx-auto'>

            <div className='flex flex-col justify-center items-center gap-y-8'>

              <h1 className='font-bold text-white text-[30px] uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
              <p className='text-center text-gray-100 font-[roboto] text-[14px] leading-7'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore commodi, architecto fugit tempora hic labore similique iusto veniam aliquam distinctio illo.
                Veritatis velit voluptatibus vero error consectetur dolores atque modi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore commodi, architecto fugit tempora hic labore similique iusto veniam aliquam distinctio illo.
                Veritatis velit voluptatibus vero error consectetur dolores atque modi.
              </p>
            </div>

          </div>
        </section> */}

      </div>

    </>
  )
}

export default Contact
