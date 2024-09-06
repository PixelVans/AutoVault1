import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt, 
 } from 'react-icons/fa'
 import { AiOutlineMail } from 'react-icons/ai';

 const FooterLinks = [
    {
        title: 'Home',
        link: '/home'
      },
    {
        title: 'About',
        link: '/about'
      },
    {
        title: 'Contact',
        link: '#/contact'
      },
    {
        title: 'Blog',
        link: '#/blog'
      },
   
  ]






export default function Footer() {






  
   
    return (
    
    <div 
      className='text-black  mb-2 bg-slate-100 mt-[100px]  shadow-top'>
          <div className='container'>  
              {/* company details */}
              <div
                  data-aos='zoom-in'
                  className='grid md:grid-cols-3 pb-[35px] pt-5'>
                  
             
              <div className='py-8 px-4'>
                      <h1 className='sm:text-2xl text-xl font-bold sm:text-left 
                      text-justify mb-3 flex items-center gap-3'>
                         
                          AutoVault</h1>
                      <p className='font-extralight'>
                          AutoVault simplifies buying and selling cars.
                          Our platform offers an easy and efficient way to find your next vehicle or list your own.
                          Experience a seamless transaction process and discover a diverse range of cars with AutoVault.
                  </p>
              </div>
                  {/* footer links */}
                  <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                      <div>
                          <div className='py-8 px-4'>
                              <h1 className='sm:text-xl text-xl font-bold sm:text-left 
                              text-justify mb-3 '>
                                  Important Links
                              </h1>
                              <ul className='flex flex-col gap-3 '>
                                  {FooterLinks.map((link) => (
                                      <li className='cursor-pointer hover:text-primary 
                                      hover:translate-x-1 duration-300 text-gray-900'
                                      key={link.title}>
                                          <span>{ link.title}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                {/* social links */}
                      <div className='mt-3'>
                          <di v className='flex items-center gap-3 mt-6'>
                              <a href="#">
                                  <FaInstagram className='text-3xl '/>
                              </a>
                              <a href="#">
                                  <FaFacebook className='text-3xl '/>
                              </a>
                              <a href="#">
                                  <FaLinkedin className='text-3xl'/>
                              </a>
                              
                          </di>

                          <div className='mt-6'>
                              <div className='flex items-center gap-3'>
                                  <FaLocationArrow />
                                  <p>Nairobi KE</p>
                              </div>
                              <div className='flex items-center gap-3 mt-3 '>
                                  < FaMobileAlt className=''/>
                                  <p>+254 101897909</p>
                              </div>
                          </div>
                      </div>
                      

                      <div className='mt-6 px-4 sm:px-0'>
                          <h1 className='font-bold'>Website Powered by</h1>
                          <p>PixelVans</p>
                          <div className='flex items-center gap-3 mt-3'>
                                  < FaMobileAlt />
                                  <p>+254 101897909</p>
                            </div>
                            
                            <div className='flex items-center gap-3 mt-3'>
                                  < AiOutlineMail />
                                  <p>vanscrew39@gmail.com</p>
                              </div>
                      </div>

                  </div>
              </div>
          </div>
    </div>
  )
}
