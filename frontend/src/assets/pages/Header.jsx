import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



export default function Header() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userData = useSelector((state) => state.user.userData);

  return (
      <header className='bg-gray-100 p-[13px] sm:p-4'>
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

              <div className='flex gap-2 sm:gap-6 items-center'>
                  <Link to='/'>
                      <h1 className='hidden sm:inline-block'>Home</h1>
                  </Link>
                  <Link to='about'>
                    <h1 className='hidden sm:inline-block'>About</h1>
                  </Link>
                   
          
                  
          {isAuthenticated ? (<Link to='profile'>
                   <img className='rounded-full h-[30px] w-[30px] object-cover ' src={userData.avatar} />
                  </Link>) : (<Link to='sign-in'>
                   <h1 className=''>Sign In</h1>
                  </Link>) }
                  
            
               
              </div>
           

          </div> 

    </header>
  )
}
