import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
      <div className='h-screen bg-slate-900 relative'>
          
             
          <div className='hidden sm:flex  justify-end'>
              <img className='h-screen ' src="/images/shake.png" alt="" />
          </div>

          <div className='flex ml-4'>
          <div className='absolute top-0 text-white mt-1 w-full'>
    <div className='flex text-center  items-center'>
                      <img className='w-[30px] sm:w-[50px] ml-2 animate-rot' src="/images/spedom.png" alt="" /> 
                      <div className='mx-auto flex gap-6'>
                          <Link to={'/home'}> <h1 className='hover:text-orange-300  text-slate-400'>Home</h1> </Link>
                          <Link to={'/about'}><h1 className='hover:text-orange-300 text-slate-400' >About</h1>  </Link>
                          <Link to={'/login'}>  <h1 className='hover:text-orange-300 text-slate-400'>Login</h1>   </Link>
                                
                                
                               
                      </div>
      
    </div>
</div> 
                {/* Animated Image */}
      <div className='absolute sm:hidden inset-0 flex justify-center items-center top-[-410px]'>
        <img 
          className='bg-wheel h-[100px] w-[100px] sm:h-[33px] sm:w-[33px] mx-2 my-auto animate-rotate'
          src='/images/wheel.png' 
          alt='Rotating wheel' 
                  />
                 
                  
      </div>
               <div className='absolute sm:hidden inset-0 flex justify-center items-center top-[-250px]'>
                  <img className='w-[100px]' src="/images/biz.png" alt="" />   
                  
                  </div>
              <div className='absolute top-[290px] text-white sm:ml-5'>
                 
              <h1 className='text-[25px] md:text-[50px] text-slate-100  '>Welcome to AutoVault</h1> <br />
                  <p className='font-extralight text-slate-400 mr-5 text-[13px] sm:text-[17px]'>
                      At AutoVault, our mission is to simplify the process of buying and
                      selling vehicles. <br/> Whether you're searching for your next dream car
                      or looking to sell your current ride, we've got you covered. <br/> 
                      Explore our extensive range of vehicles and enjoy a seamless,
                      stress-free experience from start to finish.</p>
                  <button className='bg-orange-700 text-white rounded-lg p-1 sm:p-2 mt-9 hover:bg-orange-800'>
                      <Link to={'/home'} className='mx-3 '>
                          Continue
                      </Link>
                  </button>

                  {/* car logos */}
              <div className='flex mt-[80px] md:mt-[100px] gap-[10px]   flex-wrap'>
                 <img className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/1.png" alt="" />
                 <img className='w-[40px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/2.png" alt="" />
                 <img className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/3.png" alt="" />
                 <img className='w-[30px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/4.png" alt="" />
                 <img className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/5.png" alt="" />
                 <img className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/6.png" alt="" />
                 <img className='w-[25px] sm:w-[60px] h-[40px] sm:h-[45px] object-contain' src="/carlogos/7.png" alt="" />
                 
               
              </div>
              </div>
              

              
</div>
      </div>
      
  )
}
