import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'




export default function HomePage() {
 const [recentListings, setRecentListings] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/auth/listings');
        const data = await res.json();
        setRecentListings(data);
        
      } catch (error) {
        console.log(error);
      }
    };
  
  
    fetchOfferListings();
  }, []);
  


  const handlegetListing = async (id) => {

    try {
      const res = await fetch(`auth/user/get-listing/${id}`);
     
      const data = await res.json()
      if (data.success === false) {
        console.log(data.message)
      }

      console.log(data)
      navigate(`/view/listing/${data._id}`)
    } catch (error) {
      console.log(error)
    }
    
}










  return (
    <div className='flex'>

      
        
              <div className='bg-gray-800 h-full mt-1 w-64 flex flex-col shadow-lg shadow-black'>
        <div className='border border-gray-700 text-center p-2 bg-slate-900 mb-[20px]'>
          <h1 className='text-gray-400  text-center  font-bold text-[20px] mt-7 mb-[20px]'>Sort Type</h1>
        </div>
   
        
        {/* Card */}
        <div className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out  cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-supercar h-[35px] shadow-lg'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400 text-center  text-[18px]'>Super Cars</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-bus h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Buses</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-truck h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Trucks</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-suv h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>SUVs</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-ell h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px] '>Electric Cars</h1>
        </div>
        </div>

        <div className='border border-gray-700 bg-gray-900 text-center p-6 border-t-0'>
          <h1 className='text-gray-400  text-center  font-bold text-[18px]'>Popular Brands</h1>
        </div>

        <div className='border border-gray-700 border-t-0 text-center p-1 hover:scale-x-110 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Toyota</h1>
        </div>
        <div className='border border-gray-700 border-t-0 text-center mt-2 p-1 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Mercedez Benz</h1>
        </div>
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Nissan</h1>
        </div>
        
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Audi</h1>
        </div>
        
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>BMW</h1>
        </div>
        
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Land Rover</h1>
        </div>
        
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Ford</h1>
        </div>
        
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Volks Wagen</h1>
        </div>
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Subaru</h1>
        </div>
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Kia</h1>
        </div>
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Honda</h1>
        </div>
        <div className='border border-gray-700 border-t-0 text-center p-1 mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[18px] mb-1'>Mazda</h1>
        </div>
        







        </div>
        

        
        
      {/* <div className=' w-full h-[520px] mt-1 mx-[10px] bg-theme shadow-lg grid grid-cols-2'> 
        <h1 className='text-gray-300 text-[40px] ml-[20px] mt-5'>Unlock the best deals on cars, vehicles, and buses at AutoVault</h1>
        <p className='text-gray-500 text-[20px] mx-auto mt-5'>Unlock the best deals on cars, vehicles, and buses at AutoVault, <br />
          your ultimate destination for finding top-quality transportation options.<br />
          Whether you're buying or selling, AutoVault connects you with trusted sellers and buyers, ensuring a seamless and secure experience.<br />
          Explore a vast selection of vehicles and discover unbeatable prices, all in one place.</p>
      </div> */}
      

      <div className=''>
        <div>
         
        <h1 className='text-center text-[35px] mx-auto'>Featured Listings</h1> 
        </div>

        
        <div className='flex flex-wrap ml-3'>
          {recentListings.length > 0 ? recentListings.map((listing, index) => (
            
            <div className='w-[240px] h-[250px] m-1 bg-slate-100 rounded-sm shadow-black shadow-md ml-1 overflow-hidden'>
             
              <img onClick={() =>handlegetListing(listing._id)} className='h-[160px] w-[240px] object-cover hover:scale-105 transition-scale duration-300 ' src={listing.images[0]}></img>
              
              <p className='font-bold text-gray-900 ml-2'>{ listing.title}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Year:</span> { listing.year}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Location:</span> { listing.location}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Price:</span> <span className='text-red-600 font-bold'>${ listing.price}</span> </p>
          </div>


          )):''}
       </div>


      </div>
















      
    </div>
   
  
    
   
    
  )
}
