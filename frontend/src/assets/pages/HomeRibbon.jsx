

import React from 'react'
import { FaCar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MyListingsComponent, } from '../../components/ribbonRoutes';

export default function HomeRibbon() {
    const navigate = useNavigate()
  return (
      <div className='bg-gray-800 h-[75px] sm:h-[100px] md:h-[43px] mt-1 flex'>
          <div className='flex mx-auto flex-wrap mt-1 sm:mt-0'>
              
         <Link to={'/sell-car'}>
              <div
                 
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600  sm:border-gray-450  gap-1
                   flex items-center justify-center text-white hover:h-[47px] hover:bg-slate-800
                   transition duration-300 rounded-sm cursor-pointer'>
              <h1 className='flex items-center gap-2'>Sell My Car <FaCar /></h1>
              </div>
              </Link>

              
         


              
               <MyListingsComponent/>
              
              

              <Link to={'/wish-list'}>
              <div
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                   flex items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm'>
              <h1 className='flex items-center gap-2'>My WishList <FaHeart className='text-red-400'/></h1>
          </div>
           </Link>
              

          <Link to={'/notifications'}>
              <div
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                   flex items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm'>
              <h1>Notifications</h1>
              </div>
              </Link>


              <Link to={'/faq'}>
              <div
                  className='hidden sm:flex h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                    items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm'>
              <h1>FAQ</h1>
          </div>
             </Link>

              <Link to={'/categories'}>
              <div
                  className='flex sm:hidden h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                    items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm'>
              <h1>Categories</h1>
          </div>
             </Link>
              

          <Link to={'/news'}>
                <div
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                   flex items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm'>
              <h1>News</h1>
          </div>
              </Link>


          <Link to={'/help'}>
          <div
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                   flex items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm'>
              <h1>Help</h1>
                  </div>
              </Link>

              

          <Link to={'/settings'}>
              <div
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450  gap-1
                   flex items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm'>
           <h1 className='flex items-center gap-2'>Settings <FaCog /></h1>
          </div>
             </Link>
             
             
           
          
          
          
              </div>
        
    </div>
  )
}
