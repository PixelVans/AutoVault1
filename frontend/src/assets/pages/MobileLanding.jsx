import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileLanding() {
  return (
      <div className='sm:hidden bg-slate-800 h-screen'>
          
          {/* navbar */}
          <nav className=' flex gap-9 justify-between mx-5'>
          <img className='w-[30px] sm:w-[50px] mt-2 animate-rot' src="/images/spedom.png" alt="" /> 
            <Link className='hover:text-orange-300 mt-2 text-slate-400' to={'/home'}> Home </Link>
            <Link className='hover:text-orange-300 mt-2 text-slate-400' to={'/about'}>About </Link>
            <Link className='hover:text-orange-300 mt-2 mr-3 text-slate-400' to={'/sign-in'}> Login  </Link>
                                
            </nav>
          
         {/* rotating wheel */}
         <div className='   flex justify-center items-center mt-9 '>
           <img 
           className='bg-wheel h-[80px] w-[80px] sm:h-[33px] sm:w-[33px] mx-2  animate-rotate'
           src='/images/wheel.png' 
           alt='Rotating wheel' 
                  />
          </div>
          
        {/* handshake */}

          <div className='  flex justify-center items-center mt-4'>
                  <img className='w-[100px]' src="/images/biz.png" alt="" />   
          </div>
          
        {/* logos */}
          <div className='flex mt-[20px]  gap-[10px] flex-wrap justify-center'>
            <img data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/1.png" alt="" />
            <img data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className='w-[40px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/2.png" alt="" />
            <img data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/3.png" alt="" />
            <img data-aos="fade-up" data-aos-delay="700" data-aos-once="true" className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/4.png" alt="" />
            <img data-aos="fade-up" data-aos-delay="900" data-aos-once="true" className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/5.png" alt="" />
            <img data-aos="fade-up" data-aos-delay="1000" data-aos-once="true" className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/6.png" alt="" />
            <img data-aos="fade-up" data-aos-delay="1200" data-aos-once="true" className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/7.png" alt="" />
          </div>
          

        {/* welcome text */}
          <div className='flex flex-col mx-5 justify-center text-center'>
              <h1 data-aos='fade-up '
                  data-aos-delay='700'
                  className='text-[24px]  text-slate-100  mt-[20px] '>
                  Welcome <span data-aos='zoom-in ' data-aos-delay='1300'> to </span >
                  <span data-aos='zoom-in ' data-aos-delay='1600'>AutoVault</span></h1> <br />
                  
              <p className='font-extralight text-slate-300  text-[13px] '>
                      At AutoVault, our mission is to simplify the process of buying and
                      selling vehicles. <br/> Whether you're searching for your next dream car
                      or looking to sell your current ride, we've got you covered. <br/> 
                      Explore our extensive range of vehicles and enjoy a seamless,
                      stress-free experience from start to finish.</p>
                  
              <button className='bg-orange-700 text-white rounded-lg p-2  mt-8 mx-8
                   hover:bg-orange-800 '>
                      <Link to={'/home'} className='mx-3 '>
                          Continue
                      </Link>
                  </button>
         </div>


    </div>
  )
}
