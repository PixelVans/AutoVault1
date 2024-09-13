import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


import { useDispatch ,useSelector} from 'react-redux';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { addToWishlist, viewListing ,removeFromWishlist} from '../../../redux/userSlice';

export default function Search() {



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const wishlist = useSelector((state) => state.user.wishlist);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 

    const [searchListings, setSearchListings] = useState([]);
    const [listings, setListings] = useState([]);
    const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loadingCars, setLoading] = useState(false)
  
    
    




    const handleCategoryClick = (category) => {
        
        const urlParams = new URLSearchParams();
        urlParams.set('category', category);  
        const searchQuery = urlParams.toString();
        navigate(`?${searchQuery}`, { replace: true });
    };
    
    const handleFuelTpyeClick = (fueltype) => {
       
        const urlParams = new URLSearchParams();
        urlParams.set('fueltype', fueltype);  
        const searchQuery = urlParams.toString();
        navigate(`?${searchQuery}`, { replace: true });
    };
    
    const handleBrandClick = (brand) => {
      
        const urlParams = new URLSearchParams();
        urlParams.set('brand', brand);  
        const searchQuery = urlParams.toString();
        navigate(`?${searchQuery}`, { replace: true });
    };
    
    const handleSportClick = (sports) => {
        
        const urlParams = new URLSearchParams();
        urlParams.set('sports', sports);  
        const searchQuery = urlParams.toString();
        navigate(`?${searchQuery}`, { replace: true });
    };





    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
    
        if (searchTermFromUrl) {
            
            urlParams.set('searchTerm', searchTermFromUrl);
            const searchQuery = urlParams.toString();
            navigate(`?${searchQuery}`, { replace: true });
        }
    
        const fetchListings = async () => {
            setLoading(true);
            setShowMore(false);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/auth/get/listings/?${searchQuery}`);
            const data = await res.json();
            setSearchListings(data);
            if (data.length > 19) {
                setShowMore(true);
            } else {
                setShowMore(false);
            }
            setListings(data);
            setLoading(false);
        };
    
        fetchListings();
    }, [location.search, navigate]); 
    
    const onShowMoreClick = async () => {
        const numberOfListings = searchListings.length;
        const startIndex = numberOfListings;
        const res = await fetch(`/auth/get/listings?startIndex=${startIndex}`);
        const data = await res.json();
        if (data.length < 20) {
          setShowMore(false);
        }
        setSearchListings([...searchListings, ...data]);
        };
      

    


    



    


    const handlegetListing = async (id) => {
      try {
        const res = await fetch(`/auth/user/get-listing/${id}`);
      const data = await res.json()
      dispatch(viewListing(data))
        navigate(`/view/listing/${data._id}`)
      } catch (error) {
        console.log(error)
      }
      
  }
  


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
  





  return (
    <div className='flex min-h-screen'>

        
        
              <div className='bg-gray-800 min-h-screen mt-1 min-w-[190px] hidden lg:flex flex-col shadow-lg shadow-black'>
        <div className='border border-gray-700 text-center p-2 bg-slate-900 mb-[20px]'>
          <h1 className='text-gray-400  text-center  font-bold text-[20px] mt-7 mb-[20px]'>Sort Type</h1>
        </div>
   
        
        {/* Card */}
              <div  onClick={() => handleSportClick('true')} 
                  className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out  cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-supercar h-[35px] shadow-lg'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400 text-center  text-[18px]'>Sports Cars</h1>
        </div>
        </div>


        
        
        {/* Card */}
              <div 
                  onClick={() => handleCategoryClick('bus')} 
                  className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-bus h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Buses</h1>
        </div>
        </div>


        
        
        {/* Card */}
              <div  
                  onClick={() => handleCategoryClick('truck')} 
                  className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-truck h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>Trucks</h1>
        </div>
        </div>


        
        
        {/* Card */}
              <div
                  onClick={() => handleCategoryClick('suv')} 
                  className='hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-pointer'>
        <div className='border border-gray-700 text-center p-2 mt-5 border-t-0 bg-suv h-[35px]'></div>
        <div className='border border-gray-700 border-t-0 text-center p-1'>
          <h1 className='text-gray-400  text-center  text-[18px]'>SUVs</h1>
        </div>
        </div>


        
        
        {/* Card */}
              <div
                  onClick={() => handleFuelTpyeClick('electric')} 
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
                  
                  onClick={() => handleBrandClick('toyota')}
                  className='border border-gray-700 border-t-0 text-center 
                   hover:scale-x-110 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Toyota</h1>
              </div>
              

              <div
                  onClick={() => handleBrandClick('mercedez')}
                  className='border border-gray-700 border-t-0 text-center 
                  mt-2  hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mercedez Benz</h1>
              </div>
              

              <div
                  onClick={() => handleBrandClick('nissan')}
                  className='border border-gray-700 border-t-0 text-center  
                  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Nissan</h1>
        </div>
        
              <div
                  onClick={() => handleBrandClick('audi')}
                  className='border border-gray-700 border-t-0 text-center  
                  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Audi</h1>
        </div>
      
              <div
                  onClick={() => handleBrandClick('bmw')}
                  className='border border-gray-700 border-t-0 text-center 
                   mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>BMW</h1>
        </div>
        
              <div
        onClick={() => handleBrandClick('land rover')}
                  className='border border-gray-700 border-t-0 text-center 
                   mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Land Rover</h1>
        </div>
        
              <div
        onClick={() => handleBrandClick('ford')}
                  className='border border-gray-700 border-t-0 text-center 
                   mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Ford</h1>
        </div>
        
              <div
                  onClick={() => handleBrandClick('volkswagen')}
                  className='border border-gray-700 border-t-0 text-center 
                  mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Volks Wagen</h1>
              </div>
              

              <div
                  onClick={() => handleBrandClick('subaru')}
                  className='border border-gray-700 border-t-0 text-center 
                   mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Subaru</h1>
        </div>
        
        
              <div
                  onClick={() => handleBrandClick('mazda')}
                  className='border border-gray-700 border-t-0 text-center 
                   mt-2 hover:scale-x-105 hover:bg-slate-900 hover:rounded-lg duration-300 ease-in-out cursor-default'>
          <h1 className='text-white text-center  text-[16px] mb-1'>Mazda</h1>
        </div>
        

        </div>
        
      <div className=' mx-auto'>
       
          <div className='flex flex-wrap  w-full justify-center'>
            
           
        {loadingCars ? (
  <h1 className='text-center text-[19px] lg:mx-5 w-full justify-center '>Waiting For Results..</h1>
) : searchListings.length > 0 ? (
  <h1 className='text-center text-[17px] lg:mt-1  lg:mx-5 w-full justify-center bg-slate-300 font-light mb-1'>Results</h1>
) : (
  <h1 className='text-center text-[19px] justify-center  w-full text-red-500'>No results Found</h1>
)}

        
            {loadingCars && <p className='text-center text-[22px] mx-auto w-full'>Loading..</p>}
            



       
                  <div className='grid grid-cols-2 sm:flex flex-wrap w-full gap-2 justify-center ml-2 mr-2'>
          {searchListings && searchListings.map((listing, index) => (
            
           
              
         
            <div key={index} data-aos='zoom-in' className='col-span-1 h-[210px] md:w-[240px] md:h-[250px] mt-1  sm:mx-0 sm:ml-0  sm:mr-0 
            bg-slate-100 rounded-sm shadow-slate-600 shadow-md  overflow-hidden'>
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
            <button
              onClick={onShowMoreClick}
              className='text-green-700 hover:underline p-7 text-center w-full text-[18px]'
            >
              Show more
            </button>
          )}

      </div>
      




    </div>
   
  
  )
}
