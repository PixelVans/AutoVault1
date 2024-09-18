import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt, 
 } from 'react-icons/fa'
 import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Map from '../assets/pages/Map';
import '../index.css';
 const FooterLinks = [
    {
        title: 'Home',
        links: '/home'
      },
    {
        title: 'About',
        links: '/about'
      },
    
    {
        title: 'Help',
        links: '/help'
      },
    
   
    {
        title: 'FAQ',
        links: '/faq'
      },
    
    
   
  ]






export default function Footer() {






  
   
    return (
    
    <div 
      className='text-black   bg-slate-100 mt-[100px]  shadow-top'>
            <div className=''>  
                
                
              {/* company details */}
              <div
                  data-aos='zoom-in'
                  className='grid md:grid-cols-3 pb-[35px] pt-4'>
                  
             
              <div className='ml-5  py-1 sm:py- text-center w-full mx-auto'>
                      <h1 className='sm:text-2xl text-xl font-bold sm:text-left 
                      text-justify  flex items-center gap-3 '>
                         
                          Location</h1>
                      
                        <Map/>
              </div>
                  {/* footer links */}
                  <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                      <div>
                          <div className='py-2 sm:py-8 px-4'>
                              <h1 className='sm:text-xl text-xl font-bold sm:text-left 
                              text-justify mb-3 '>
                                  Important Links
                              </h1>
                              <ul className='flex flex-col gap-3 '>
                                  {FooterLinks.map((link) => (
                                      <li className='cursor-pointer hover:text-primary 
                                      hover:translate-x-1 duration-300 text-gray-900'
                                          key={link.title}>
                                          <Link to={link.links}><span>{ link.title}</span></Link>
                                          
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                {/* social links */}
                      <div className='mt-3'>
                          <di v className='flex items-center gap-3 mt-2 sm:mt-6'>
                              <a href="#">
                                  <FaInstagram className='text-2xl sm:text-3xl'/>
                              </a>
                              <a href="#">
                                  <FaFacebook className='text-2xl sm:text-3xl'/>
                              </a>
                              <a href="#">
                                  <FaLinkedin className='text-2xl sm:text-3xl'/>
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
                              <div className='flex items-center gap-3 mt-3 '>
                                  < FaMobileAlt className=''/>
                                  <p>+254 794952257</p>
                              </div>
                          </div>
                      </div>
                      

                      <div className='mt-6 px-4 sm:px-0'>
                          <h1 className='font-bold'>Website Powered by</h1>
                          <p className='italic font-light'>PixelVans</p>
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
