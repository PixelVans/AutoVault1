import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux';
import { addToWishlist, viewListing } from '../../../redux/userSlice';
import { FaHeart } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';



export default function HomePage() {
 const [recentListings, setRecentListings] = useState([])
  const [loading, setLoading] = useState(false)
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate()
const dispatch = useDispatch()

  useEffect(() => {
    const fetchHomeListings = async () => {
      setLoading(true)
      try {
        const res = await fetch('/auth/get/home/listings/');
        const data = await res.json();
        setRecentListings(data);
        setLoading(false)
        if (data.length > 19) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
       
      } catch (error) {
      
        setLoading(false)
      }
    };
  fetchHomeListings();
  }, []);
  


  const handlegetListing = async (id) => {
    try {
      const res = await fetch(`auth/user/get-listing/${id}`);
    const data = await res.json()
    dispatch(viewListing(data))
      navigate(`/view/listing/${data._id}`)
    } catch (error) {
      console.log(error)
    }
    
}


const onShowMoreClick = async () => {
  const numberOfListings = recentListings.length;
  const startIndex = numberOfListings;
  const res = await fetch(`/auth/get/home/listings?startIndex=${startIndex}`);
  const data = await res.json();
  if (data.length < 20) {
    setShowMore(false);
  }
  setRecentListings([...recentListings, ...data]);
  };


  



  const handleAddToWishlist = (listing) => {
    dispatch(addToWishlist(listing));
  };
  
  
  
  
  
  
  
  const handleSortCars = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('category', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }

  const handleSportsCars = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('sports', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }
  const handleCarBrand = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('brand', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }
  const handleFuelType = (url) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('fueltype', url);
    const searchQuery = urlParams.toString();
    navigate(`search/?${searchQuery}`)
  }





  return (
    <>
    <div className='flex min-h-screen relative mt-[-10px] md:mt-[0px]'>
      <div className='bg-gray-900 h-[90px] w-full absolute z-[-1] md:mt-1 text-center text-slate-400 shadow-md shadow-black'>
        <h1  data-aos='zoom-in' className='sm:text-[20px] text-[17px] italic mt-3'>Discover Your Perfect Ride</h1>
        <h4 className='text-[15px] font-extralight '>Happy tour!</h4>
</div>
      
        
              <div className='bg-gray-800 min-h-screen mt-1 max-w-[470px] hidden sm:flex flex-col shadow-lg'>
        <div className='border border-gray-700 text-center p-2 bg-slate-900 mb-[20px]'>
          <h1 className='text-gray-400  text-center  font-bold text-[20px] mt-7 mb-[20px]'>Sort Type</h1>
        </div>
   
        
        {/* Card */}
        <div data-aos='zoom-in'
          onClick={()=>handleSportsCars('true')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out  cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-supercar h-[35px] shadow-lg'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400 text-center  text-[18px]'>Need For Speed</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
           onClick={()=>handleSortCars('bus')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-bus h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Buses</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
           onClick={()=>handleSortCars('truck')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-truck h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Trucks</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
           onClick={()=>handleSortCars('suv')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-suv h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>SUVs</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
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

        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('toyota')}
          className='border border-gray-700 border-t-0 text-center 
          p-1 cursor-default hover:scale-x-110 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Toyota</h1>
        </div>


        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('mercedez')}
          className='border border-gray-700 border-t-0 text-center mt-2  
           p-1 cursor-default hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mercedez Benz</h1>
        </div>


        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('nissan')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Nissan</h1>
        </div>
        
        <div data-aos='zoom-in'
         onClick={()=>handleCarBrand('audi')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Audi</h1>
        </div>
      
        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('bmw')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>BMW</h1>
        </div>
        
        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('land rover')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Land Rover</h1>
        </div>
        
        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('ford')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Ford</h1>
        </div>
        
        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('volks wagen')}
          className='border border-gray-700 border-t-0 text-center
            p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Volks Wagen</h1>
        </div>

        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('subaru')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Subaru</h1>
        </div>
        
        
        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('mazda')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mazda</h1>
        </div>
        







        </div>
        

        
    
      
  
      <div className=' w-full sm:max-w-[1300px] mx-auto mt-[50px]'>
       

        
        <div className='flex flex-wrap  w-full justify-center'>
           
         <div className='w-full mt-[40px] sm:mt-[50px] p-2'>
            <h1 className='text-center text-[17px] sm:text-[21px] mx-auto w-full bg-slate-100 font-thin'>{loading ? (
              'Loading...'
          ) : 'Featured Listings' }</h1>
            <hr className='border-0 h-[1px] bg-gray-400' />
</div>

          
<div className='grid grid-cols-2 sm:flex flex-wrap w-full gap-2 justify-center'>
  {recentListings && recentListings.map((listing, index) => (
    <div key={index} data-aos='zoom-in' className='col-span-1 h-[210px] md:w-[240px] md:h-[250px] m-1 ml-2 mr-2  bg-slate-100 rounded-sm shadow-black shadow-md  overflow-hidden'>
      <img 
        onClick={() => handlegetListing(listing._id)} 
        className='h-[120px] w-full object-cover hover:scale-105 transition-scale duration-300 md:h-[160px] md:w-[240px]' 
        src={listing.images[0]} 
        alt={listing.title}
      />
      <div className='relative'>
        <p className='font-bold text-gray-950 ml-2 text-[12px] sm:text-[16px]'>{listing.title}</p>
        <hr />
        <p className='text-[12px] ml-2 mt-1'><span className='font-bold'>Year:</span> {listing.year}</p>
        <p className='text-[12px] ml-2 hidden sm:block'><span className='font-bold'>Location:</span> {listing.location}</p>
        <p className='text-[12px] ml-2 flex sm:hidden'>
          <span className='font-bold text-green-800 my-auto mr-1'><FaMapMarkerAlt /></span> 
          {listing.location}
        </p>
        <p className='text-[12px] ml-2'><span className='font-bold'>Price:</span> {listing.price}</p>
      </div>
    </div>
  ))}
</div>



         
       </div>

       {showMore && (
            <button
              onClick={onShowMoreClick}
              className='text-green-700 hover:underline p-7 text-center w-full text-[18px]'
            >
              Show more
            </button>
        )}
   
      </div>

    

        
  


    </div>
       {/* <div className=' bottom-0 left-0 w-full bg-slate-200 p-2 z-50 h-[400px] mt-5'>
  <h1 className='text-center italic'>Footer</h1>
</div> */}
   
    
   </>
    
  )
}
