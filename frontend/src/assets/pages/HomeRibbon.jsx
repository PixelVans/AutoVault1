

import React from 'react'
import { FaCar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MyListingsComponent, } from '../../components/ribbonRoutes';
import { useSelector } from 'react-redux';

export default function HomeRibbon() {

    const notificationsCount = useSelector((state) => state.user.notifications);
    const hasNotifications = notificationsCount > 0;
    
   
  return (
      <div className='md:bg-gray-800 h-[45px] sm:h-[100px] md:h-[43px] md:mt-1 flex w-full'>
          <div className='flex md:mx-auto flex-wrap mt-[2px] sm:mt-0 justify-center'>
              
         <Link to={'/sell-car'}>
              <div
                 
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] bg-slate-800 md:bg-none text-[10px] sm:text-[15px] border
                   border-gray-600  sm:border-gray-450  gap-1
                   flex items-center justify-center text-white hover:bg-slate-950
                   transition duration-300 rounded-sm cursor-pointer'>
              <h1 className='flex items-center gap-2 '>Sell My Car <FaCar /></h1>
              </div>
              </Link>

              
         


              
               <MyListingsComponent/>
              
              

              <Link to={'/wish-list'}>
              <div
                  className=' bg-slate-800 md:bg-none h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                   flex items-center justify-center text-white hover:bg-slate-950 transition duration-300 rounded-sm'>
              <h1 className='flex items-center gap-2 '> WishList <FaHeart className='text-red-400'/></h1>
          </div>
           </Link>
              

          <Link to={'/notifications'}>
              <div
                  className='hidden  md:flex bg-slate-800 md:bg-none h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                    items-center justify-center text-white hover:bg-slate-950 transition duration-300 rounded-sm'>
              <h1 className='text-sm'>Notifications <span className=''>  {hasNotifications && (
            <span className='ml-1 text-green-400 w-3 h-3'>●</span> // Optional: Add a visual indicator
          )} </span></h1>
              </div>
              </Link>


              <Link to={'/faq'}>
              <div
                  className=' bg-slate-800 md:bg-none hidden sm:flex h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                    items-center justify-center text-white hover:bg-slate-950 transition duration-300 rounded-sm'>
              <h1 className='text-sm'>FAQ</h1>
          </div>
             </Link>

              <Link to={'/categories'}>
              <div
                  className=' bg-slate-800 md:bg-none flex sm:hidden h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                    items-center justify-center text-white  hover:bg-slate-950 transition duration-300 rounded-sm'>
              <h1 className=''>Categories</h1>
          </div>
             </Link>
              

          <Link to={'/news'}>
                <div
                  className=' hidden  md:flex bg-slate-800 md:bg-none h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                    items-center justify-center text-white hover:bg-slate-950 transition duration-300 rounded-sm'>
              <h1 className='text-sm'>News</h1>
          </div>
              </Link>


          <Link to={'/help'}>
          <div
                  className='hidden  md:flex bg-slate-800 md:bg-none h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                    items-center justify-center text-white  hover:bg-slate-950 transition duration-300 rounded-sm '>
              <h1 className='text-sm'>Help</h1>
                  </div>
              </Link>

              

          <Link to={'/settings'}>
              <div
                  className=' hidden bg-slate-800 md:bg-none h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450  gap-1
                   md:flex items-center justify-center text-white hover:bg-slate-950 transition duration-300 rounded-sm'>
           <h1 className='flex items-center gap-2 text-sm'>Settings <FaCog /></h1>
          </div>
             </Link>
             
             
           
          
          
          
              </div>
        
    </div>
  )
}
