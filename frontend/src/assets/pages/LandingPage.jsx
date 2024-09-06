import React from 'react'
import { Link } from 'react-router-dom'
import MobileLanding from './MobileLanding'
export default function LandingPage() {
    return (
        <>
            <MobileLanding/>
      <div className='h-screen sm:block hidden bg-slate-900 relative'>
          
             
          <div className='hidden sm:flex  justify-end'>
              <img className=' h-screen ' src="/images/shake.png" alt="" />
          </div>

          <div className='flex ml-4'>
          
   

                {/* Animated Image */}
      <div className='absolute sm:hidden inset-0 flex justify-center items-center top-[-470px]'>
        <img 
          className='bg-wheel h-[80px] w-[80px] sm:h-[33px] sm:w-[33px] mx-2  animate-rotate'
          src='/images/wheel.png' 
          alt='Rotating wheel' 
                  />
                 
                  
      </div>
               <div className='absolute sm:hidden inset-0 flex justify-center items-center top-[-290px]'>
                  <img className='w-[100px]' src="/images/biz.png" alt="" />   
                  

              </div>


              
              <div className='flex  text-center absolute top-1 items-center gap-6'>
                      <img className='w-[30px] sm:w-[50px] ml-2 animate-rot' src="/images/spedom.png" alt="" /> 
                      <div className='mx-auto flex gap-9 '>
                          <Link className='hover:text-orange-300  text-slate-400' to={'/home'}> Home </Link>
                          <Link className='hover:text-orange-300 text-slate-400' to={'/about'}>About </Link>
                          <Link className='hover:text-orange-300 text-slate-400' to={'/sign-in'}> Login  </Link>
                                
                                
                               
                      </div>
      
              </div>
              



              <div className='absolute top-[290px] text-white sm:ml-5 mt-[0px] sm:mt-0'>
                  
                                 {/* car logos */}
                                 <div className='flex mt-[20px] md:mt-[10px] gap-[10px] flex-wrap'>
  <img data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/1.png" alt="" />
  <img data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className='w-[40px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/2.png" alt="" />
  <img data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/3.png" alt="" />
  <img data-aos="fade-up" data-aos-delay="700" data-aos-once="true" className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/4.png" alt="" />
  <img data-aos="fade-up" data-aos-delay="900" data-aos-once="true" className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/5.png" alt="" />
  <img data-aos="fade-up" data-aos-delay="1000" data-aos-once="true" className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/6.png" alt="" />
  <img data-aos="fade-up" data-aos-delay="1200" data-aos-once="true" className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/7.png" alt="" />
</div>
                 
                  <h1 data-aos='fade-up ' data-aos-delay='700' className='text-[23px] md:text-[50px]  text-slate-100 sm:mt-[70px] mt-[40px] '>
                      Welcome <span data-aos='zoom-in ' data-aos-delay='1300'>to</span > <span data-aos='zoom-in ' data-aos-delay='1600'>AutoVault</span></h1> <br />
                  <p className='font-extralight text-slate-300 mr-5 text-[13px] sm:text-[17px]'>
                      At AutoVault, our mission is to simplify the process of buying and
                      selling vehicles. <br/> Whether you're searching for your next dream car
                      or looking to sell your current ride, we've got you covered. <br/> 
                      Explore our extensive range of vehicles and enjoy a seamless,
                      stress-free experience from start to finish.</p>
                  <button className='bg-orange-700 text-white rounded-lg p-1 sm:p-2 mt-9
                   hover:bg-orange-800 '>
                      <Link to={'/home'} className='mx-3 '>
                          Continue
                      </Link>
                  </button>

                  
   


              </div>
              

              
          </div>
         
      </div>
      </>

      
  )
}
