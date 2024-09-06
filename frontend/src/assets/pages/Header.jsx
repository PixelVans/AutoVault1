
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MobileSort from '../../components/MobileSort';

export default function Header() {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const userData = useSelector((state) => state.user.userData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new URLSearchParams object to handle searchTerm only
        const urlParams = new URLSearchParams();
        if (searchTerm) {
            urlParams.set('searchTerm', searchTerm);
        }
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    // Update searchTerm from URL
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        } else {
            setSearchTerm(''); // Clear searchTerm if not present in URL
        }
    }, [location.search]);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };



         





    return (
        <header className='bg-gray-800 p-[13px] sm:p-4 shadow-md'>
            <div className='flex justify-between sm:max-w-[1300px] mx-auto'>
                  
                {/* <div className='mt-1 '>
                    <div className='bg-slate-700 w-6 h-[2px]'></div>
                    <div className='bg-slate-700 w-6 h-[2px] mt-[4px]'></div>
                    <div className='bg-slate-700 w-6 h-[2px] mt-[4px]'></div>
                    
                </div> */}

                


<div className='relative mx-2 z-0 block sm:hidden'>
          {!isMenuOpen && (
            <div onClick={toggleMenu} className='block sm:hidden cursor-pointer'>
              <div className='h-[2px] w-[23px] bg-slate-500 my-1'></div>
              <div className='h-[2px] w-[23px] bg-slate-500 my-1'></div>
              <div className='h-[2px] w-[23px] bg-slate-500 my-1'></div>
            </div>
          )}
        </div>
           
        {isMenuOpen && <MobileSort toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}



                <Link to='/home'>
                    <div className='flex text-white'>
                        <h1 className='font-bold text-[17px] sm:text-[22px] text-center'>AutoVault  </h1>
                        <img className='bg-wheel h-[23px] w-[23px] sm:h-[33px] sm:w-[33px] mx-2 my-auto animate-rotate' src='../../images/wheel.png' alt='Rotating wheel'/>
                   </div>
                </Link>
                <form onSubmit={handleSubmit} className=' bg-gray-700 rounded-lg hidden md:flex sm:w-[350px]'>
                    <input
                        className='p-[7px] sm:p-2 rounded-lg w-[140px] sm:w-[300px]
                        bg-gray-700 focus:outline-none m-auto ml-3 text-white'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search...'
                    />
                    <button className='mr-2 text-gray-500'>
                        <FaSearch />
                    </button>
                </form>
                <div className='flex gap-2 sm:gap-6 items-center text-white font-extralight'>
                    <Link to='/'>
                        <h1 className='hidden sm:inline-block'>Home</h1>
                    </Link>
                    <Link to='about'>
                        <h1 className='hidden sm:inline-block'>About</h1>
                    </Link>
                    {isAuthenticated ? (
                        <Link to='profile'>
                            <img className='rounded-full h-[30px] w-[30px] object-cover shadow-md shadow-white' src={userData.avatar} alt='User Avatar' />
                        </Link>
                    ) : (
                        <Link to='sign-in'>
                            <h1 className=''>Sign In</h1>
                        </Link>
                    )}
                </div>
            </div>

            <div>
                <form onSubmit={handleSubmit} className='bg-gray-800 rounded-lg flex md:hidden 
            focus-border-gray-100 mt-3 border border-slate-700'>
                    <input
                        className='p-[7px] sm:p-2 rounded-lg w-[140px] sm:w-[300px] 
                        text-white focus:outline-none m-auto ml-3 bg-gray-800'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search vehicles ...'
                    />
                    <button className='mr-3 text-gray-400'>
                        <FaSearch />
                    </button>
                </form>
            </div>
        </header>
    );
}
