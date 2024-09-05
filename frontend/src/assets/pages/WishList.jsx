import {React,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaHeart } from 'react-icons/fa';
import { removeFromWishlist,viewListing } from '../../../redux/userSlice';
import { useNavigate} from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

export default function WishList() {
  const wishlist = useSelector(state => state.user.wishlist)
  const dispatch = useDispatch();
  const navigate = useNavigate()



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

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };
  return (
    <div className='flex sm:max-w-[1300px] mx-auto mt-5 flex-wrap justify-center'>
       {wishlist&& wishlist.map((listing, index) => (
            
           
              
            <div key={index} className='w-[160px] h-[210px] sm:w-[240px] sm:h-[250px] m-1 bg-slate-100 rounded-sm shadow-black shadow-md sm:ml-1 overflow-hidden '>
             
              <img onClick={() =>handlegetListing(listing._id)} className='h-[120px] w-[160px] sm:h-[160px] sm:w-[240px] object-cover hover:scale-105 transition-scale duration-300 ' src={listing.images[0]}></img>
              <div className='relative'>
              <p className='font-bold text-gray-900 ml-2'>{ listing.title}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Year:</span> { listing.year}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Location:</span> { listing.location}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Price:</span> <span className='text-red-600 font-bold'>${ listing.price}</span> </p>
                <button
                onClick={() => handleRemoveFromWishlist(listing._id)} 
               className='hidden sm:block sm:absolute right-0 top-0 transform -translate-y-1/2 p-1 px-2 
                 rounded-lg text-[19px] text-black hover:text-red-700 mt-3'><AiOutlineClose/>
             </button>
                <button
                onClick={() => handleRemoveFromWishlist(listing._id)} 
               className='absolute sm:hidden right-0 top-0 transform -translate-y-1/2 p-1 px-2 
                  rounded-lg text-[16px] text-black hover:text-red-700 mt-3'><AiOutlineClose/>
             </button>
             
                
              </div>
            </div>


          ))}
    </div>
  )
}
