


import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Categories() {
    const navigate = useNavigate();
















    const handleSortCars = (url) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('category', url);
        const searchQuery = urlParams.toString();
        navigate(`/search/?${searchQuery}`)
      }
    
      const handleSportsCars = (url) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('sports', url);
        const searchQuery = urlParams.toString();
        navigate(`/search/?${searchQuery}`)
      }
      const handleCarBrand = (url) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('brand', url);
        const searchQuery = urlParams.toString();
        navigate(`/search/?${searchQuery}`)
      }
      const handleFuelType = (url) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('fueltype', url);
        const searchQuery = urlParams.toString();
        navigate(`/search/?${searchQuery}`)
      }
    


  return (
    <div
    className="  bg-gray-800 text-white transition-transform duration-300"
      
    
  >
    {/* X Button Inside the Panel */}

          <div className='p-5 mt-0'>
              


      {/* Add sidebar content here */}
     
              
       
      <div className='bg-gray-800 min-h-screen mt-1 max-w-[470px] flex lg:hidden flex-col shadow-lg mx-auto'>
        <div className='border border-gray-700 text-center p-2 bg-slate-900 mb-[20px]'>
          <h1 className='text-gray-400  text-center  font-bold text-[20px] mt-7 mb-[20px]'>Categories</h1>
        </div>
   
        
        {/* Card */}
          <div
            data-aos='zoom-in'
          onClick={()=>handleSportsCars('true')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out  cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-supercar h-[35px] shadow-lg'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400 text-center  text-[18px]'>Need For Speed</h1>
        </div>
        </div>


        
        
        {/* Card */}
          <div
            data-aos='zoom-in'
           onClick={()=>handleSortCars('bus')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-bus h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Buses</h1>
        </div>
        </div>


        
        
        {/* Card */}
          <div
            data-aos='zoom-in'
           onClick={()=>handleSortCars('truck')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-truck h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Trucks</h1>
        </div>
        </div>


        
        
        {/* Card */}
          <div
            data-aos='zoom-in'
           onClick={()=>handleSortCars('suv')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-suv h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>SUVs</h1>
        </div>
        </div>


        
        
        {/* Card */}
          <div
            data-aos='zoom-in'
           onClick={()=>handleFuelType('electric')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-ell h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px] '>Electric Cars</h1>
        </div>
        </div>

        <div className='border border-gray-700 bg-gray-900 text-center p-6 border-t-0'>
          <h1 className='text-gray-400  text-center  font-bold text-[18px]'>Popular Brands</h1>
        </div>

          <div
            data-aos='zoom-in'
          onClick={()=>handleCarBrand('toyota')}
          className='border border-gray-700 border-t-0 text-center 
          p-1 cursor-default hover:scale-x-110 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Toyota</h1>
        </div>


          <div
            data-aos='zoom-in'
        onClick={()=>handleCarBrand('mercedez')}
          className='border border-gray-700 border-t-0 text-center mt-2  
           p-1 cursor-default hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mercedez Benz</h1>
        </div>


          <div
            data-aos='zoom-in'
          onClick={()=>handleCarBrand('nissan')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Nissan</h1>
        </div>
        
          <div
            data-aos='zoom-in'
         onClick={()=>handleCarBrand('audi')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Audi</h1>
        </div>
      
          <div
            data-aos='zoom-in'
          onClick={()=>handleCarBrand('bmw')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>BMW</h1>
        </div>
        
          <div
            data-aos='zoom-in'
        onClick={()=>handleCarBrand('land rover')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Land Rover</h1>
        </div>
        
          <div
            data-aos='zoom-in'
          onClick={()=>handleCarBrand('ford')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Ford</h1>
        </div>
        
          <div
            data-aos='zoom-in'
        onClick={()=>handleCarBrand('volks wagen')}
          className='border border-gray-700 border-t-0 text-center
            p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Volks Wagen</h1>
        </div>

          <div
            data-aos='zoom-in'
          onClick={()=>handleCarBrand('subaru')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Subaru</h1>
        </div>
        
        
          <div
            data-aos='zoom-in'
        onClick={()=>handleCarBrand('mazda')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mazda</h1>
        </div>
        







        </div>
        



      {/* Add more links or content as needed */}
    </div>
  </div>
      
  )
}
