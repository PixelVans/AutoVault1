import React from 'react'
import { useNavigate,Link } from 'react-router-dom'



export default function MobileSort({ toggleMenu, isMenuOpen }) {
    const navigate = useNavigate();


















  return (
    <div
    className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300
       ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
    style={{ width: '70vw', zIndex: 50 }}
  >
    {/* X Button Inside the Panel */}
    <div
      onClick={toggleMenu}
      className='absolute top-4 left-4 cursor-pointer text-white text-3xl mt-3'
    >
      <div className='h-[3px] w-[23px] bg-slate-400 transform rotate-45'></div>
      <div className='h-[3px] w-[23px] bg-slate-400 transform -rotate-45'></div>
    </div>
          <div className='p-4 mt-12'>
              


      {/* Add sidebar content here */}
     
       
      <div className=' min-h-screen mt-1 max-w-[470px] flex md:hidden flex-col shadow-lg '>
        
        
      <Link to={'/settings'}>
            <div   onClick={toggleMenu} data-aos='zoom-in ' data-aos-delay='100'
                  className=' mt-3  h-[30px] sm:h-[43px] w-full sm:w-[125px] text-[14px]  border
                  border-gray-700 sm:border-gray-450 border-x-0 
                  items-center justify-center text-white  hover:bg-slate-950  rounded-sm'>
              <h1 className='ml-3 '>Settings</h1>
          </div>
          </Link>


      <Link to={'/notifications'}>
            <div   onClick={toggleMenu} data-aos='zoom-in ' data-aos-delay='300'
                  className='   h-[30px] sm:h-[43px] w-full sm:w-[125px] text-[14px]  border
                  border-gray-700 sm:border-gray-450 border-x-0 mt-3
                  items-center justify-center text-white  hover:bg-slate-950  rounded-sm'>
              <h1 className='ml-3 '>Notifications</h1>
          </div>
          </Link>


          
      <Link to={'/news'}>
            <div   onClick={toggleMenu} data-aos='zoom-in ' data-aos-delay='500'
                  className='   h-[30px] sm:h-[43px] w-full sm:w-[125px] text-[14px]  border
                  border-gray-700 sm:border-gray-450 border-x-0 mt-3
                  items-center justify-center text-white  hover:bg-slate-950  rounded-sm'>
              <h1 className='ml-3 '>News</h1>
          </div>
          </Link>


      <Link to={'/faq'}>
            <div   onClick={toggleMenu} data-aos='zoom-in ' data-aos-delay='700'
                  className='   h-[30px] sm:h-[43px] w-full sm:w-[125px] text-[14px]  border
                  border-gray-700 sm:border-gray-450 border-x-0 mt-3
                  items-center justify-center text-white  hover:bg-slate-950  rounded-sm'>
              <h1 className='ml-3 '>FAQ</h1>
          </div>
          </Link>



      <Link to={'/help'}>
            <div   onClick={toggleMenu} data-aos='zoom-in ' data-aos-delay='900'
                  className='   h-[30px] sm:h-[43px] w-full sm:w-[125px] text-[14px]  border
                  border-gray-700 sm:border-gray-450 border-x-0 mt-3
                  items-center justify-center text-white  hover:bg-slate-950  rounded-sm'>
              <h1 className='ml-3 '>Support</h1>
          </div>
          </Link>

      <Link to={'/about'}>
            <div   onClick={toggleMenu} data-aos='zoom-in ' data-aos-delay='900'
                  className='   h-[30px] sm:h-[43px] w-full sm:w-[125px] text-[14px]  border
                  border-gray-700 sm:border-gray-450 border-x-0 mt-3
                  items-center justify-center text-white  hover:bg-slate-950  rounded-sm'>
              <h1 className='ml-3 '>About</h1>
          </div>
          </Link>






          

        
        </div>
        



      {/* Add more links or content as needed */}
    </div>
  </div>
      
  )
}
