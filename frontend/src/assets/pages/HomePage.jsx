import React from 'react'


import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux';
import { addToWishlist, viewListing ,removeFromWishlist} from '../../../redux/userSlice';
import { FaHeart } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';




export default function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
const wishlist = useSelector((state) => state.user.wishlist);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 
  
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


  
 const isListingInWishlist = (listingId) => {
    return wishlist.some((item) => item._id === listingId);
  };


  const handleToggleWishlist = (listing) => {
    if (!isAuthenticated) {
      alert('You need to sign-in to manage your wishlist.');
      return;
    }

    if (isListingInWishlist(listing._id)) {
      dispatch(removeFromWishlist(listing._id)); // Dispatch action to remove from wishlist
    } else {
      dispatch(addToWishlist(listing)); // Dispatch action to add to wishlist
    }
  };
  
 
  
  
  
  
  
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
    <>
    <div className=' min-h-screen  '>
      <div className='bg-gray-800 h-[90px] w-full flex flex-col mt-1   text-center text-slate-300 shadow-md shadow-black'>
        <h1  data-aos='zoom-in' className='sm:text-[20px] text-[17px] italic mt-[20px] text-orange-300'>Discover Your Perfect Ride</h1>
        <h4 className='text-[15px] font-light '>Bonne découverte !</h4>
        </div>
      
          <main className='flex'>
              <div className='bg-gray-800 min-h-screen  min-w-[190px] hidden lg:flex flex-col shadow-lg'>
        <div className='border border-gray-700 text-center p-2 bg-slate-900 mb-[20px]'>
          <h1 className='text-gray-400  text-center  font-bold text-[20px] mt-7 mb-[20px]'>Sort Type</h1>
        </div>
   
        
        {/* Card */}
        <div data-aos='zoom-in'
          onClick={()=>handleSportsCars('true')}
            className=' hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out  cursor-pointer group'>
            
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-supercar h-[35px] shadow-lg '></div>
        <div className='border border-gray-700 border-t-0 text-center p-1 '>
          <h1 className='text-gray-400 text-center  text-[18px] group-hover:text-orange-300'>Need For Speed</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
           onClick={()=>handleSortCars('bus')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer group'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-bus h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px] group-hover:text-orange-300'>Buses</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
           onClick={()=>handleSortCars('truck')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer group'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-truck h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px] group-hover:text-orange-300'>Trucks</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
           onClick={()=>handleSortCars('suv')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer group'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-suv h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px] group-hover:text-orange-300'>SUVs</h1>
        </div>
        </div>


        
        
        {/* Card */}
        <div data-aos='zoom-in'
           onClick={()=>handleFuelType('electric')}
          className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer group'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-ell h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px] group-hover:text-orange-300'>Electric Cars</h1>
        </div>
        </div>

        <div className='border border-gray-700 bg-gray-900 text-center p-6 border-t-0'>
          <h1 className='text-gray-400  text-center  font-bold text-[18px]'>Popular Brands</h1>
        </div>

        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('toyota')}
          className='border border-gray-700 border-t-0 text-center 
          p-1 cursor-default hover:scale-x-100 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Toyota</h1>
        </div>


        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('mercedez')}
          className='border border-gray-700 border-t-0 text-center mt-2  
           p-1 cursor-default hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Mercedez Benz</h1>
        </div>


        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('nissan')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Nissan</h1>
        </div>
        
        <div data-aos='zoom-in'
         onClick={()=>handleCarBrand('audi')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Audi</h1>
        </div>
      
        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('bmw')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>BMW</h1>
        </div>
        
        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('land rover')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Land Rover</h1>
        </div>
        
        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('ford')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Ford</h1>
        </div>
        
        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('volks wagen')}
          className='border border-gray-700 border-t-0 text-center
            p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Volks Wagen</h1>
        </div>

        <div data-aos='zoom-in'
          onClick={()=>handleCarBrand('subaru')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Subaru</h1>
        </div>
        
        
        <div data-aos='zoom-in'
        onClick={()=>handleCarBrand('mazda')}
          className='border border-gray-700 border-t-0 text-center 
           p-1 cursor-default  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out group'>
          <h1 className='text-white text-center  text-[16px] mb-1 group-hover:text-orange-300'>Mazda</h1>
        </div>
        







        </div>
        

        
    
      
  
      <div className=' w-full sm:max-w-[1300px] mx-auto '>
       

        
        <div className='flex flex-wrap  w-full justify-center'>
           
         <div className='w-full  sm:mt-1 p-2'>
            <h1 className='text-center text-[17px] sm:text-[21px] mx-auto w-full bg-slate-100 font-thin'>{loading ? (
              'Loading...'
          ) : 'Featured Listings' }</h1>
            <hr className='border-0 h-[1px] bg-gray-400' />
</div>

          
<div className='grid grid-cols-2 sm:flex flex-wrap w-full gap-2 justify-center ml-1 mr-1'>
  {recentListings && recentListings.map((listing, index) => (
    <div key={index} data-aos='zoom-in' className='col-span-1 h-[210px] md:w-[240px] md:h-[250px] mt-1  mx-1 sm:mx-0 sm:ml-0  sm:mr-0 
     bg-slate-100 rounded-sm shadow-slate-600 shadow-md  overflow-hidden'>
      <img 
        onClick={() => handlegetListing(listing._id)} 
        className='h-[120px] w-full object-cover hover:scale-105 transition-scale duration-300 md:h-[150px]  lg:h-[160px] lg:w-[240px]' 
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
        <p className='text-[12px] ml-2'><span className='font-bold'>Price:</span> <span className='text-red-600 font-bold'>{listing.price}</span> </p>
        <p
          onClick={() => handleToggleWishlist(listing)}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-[18px] sm:text-[25px] ${isListingInWishlist(listing._id) ? 'text-red-700' : 'text-gray-500'} hover:text-red-700`}
          >
                <FaHeart />
              </p>
      </div>
    </div>
  ))}
</div>



         
       </div>

          {showMore && (
            <div className='justify-center text-center mx-auto mt-5'> <button
              onClick={onShowMoreClick}
              className='text-white hover:bg-slate-950 p-1 px-5 w-[150px] text-center m text-[18px] bg-slate-800 mt-5 rounded-xl'
            >
              show more
            </button></div>
           
        )}
   
      </div>

      </main>

        
  


    </div>
       {/* <div className=' bottom-0 left-0 w-full bg-slate-200 p-2 z-50 h-[400px] mt-5'>
  <h1 className='text-center italic'>Footer</h1>
</div> */}
   
    
   </>
    
  )
}
