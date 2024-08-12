import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



export default function Header() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
      <header className='bg-gray-100 p-[15px] sm:p-5'>
          <div className='flex justify-between sm:max-w-[1300px] mx-auto'>
          <Link to='/'>
              <h1 className='font-bold text-[17px] sm:text-[22px] text-center '>AutoVault</h1>
            </Link>
              <form className='bg-white rounded-lg '>
                  <input
                      className='p-[7px] sm:p-2 rounded-lg w-[140px] sm:w-64 focus:outline-none m-auto'
                      type="text"
                      placeholder='Search...' />  
                  <button className='mr-2 text-gray-500'>    <FaSearch /></button>
              </form>

              <div className='flex gap-2 sm:gap-6'>
                  <Link to='/'>
                      <h1 className='hidden sm:inline-block'>Home</h1>
                  </Link>
                  <Link to='about'>
                    <h1 className='hidden sm:inline-block'>About</h1>
                  </Link>
                   
          
                  
          {isAuthenticated ? (<Link to='profile'>
                   <h1 className=''>Profile</h1>
                  </Link>) : (<Link to='sign-in'>
                   <h1 className=''>Sign In</h1>
                  </Link>) }
                  
            
               
              </div>
           

          </div> 

    </header>
  )
}
