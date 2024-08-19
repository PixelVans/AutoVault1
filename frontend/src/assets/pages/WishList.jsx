import {React,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaHeart } from 'react-icons/fa';
import { removeFromWishlist,viewListing } from '../../../redux/userSlice';
import { useNavigate} from 'react-router-dom'

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
    <div className='flex max-w-[1200px] mx-auto mt-5 flex-wrap'>
       {wishlist&& wishlist.map((listing, index) => (
            
           
              
            <div key={index} className='w-[240px] h-[250px] m-1 bg-slate-100 rounded-sm shadow-black shadow-md ml-1 overflow-hidden '>
             
              <img onClick={() =>handlegetListing(listing._id)} className='h-[160px] w-[240px] object-cover hover:scale-105 transition-scale duration-300 ' src={listing.images[0]}></img>
              <div className='relative'>
              <p className='font-bold text-gray-900 ml-2'>{ listing.title}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Year:</span> { listing.year}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Location:</span> { listing.location}</p>
              <p className='text-[12px] ml-2'><span className='font-bold'>Price:</span> <span className='text-red-600 font-bold'>${ listing.price}</span> </p>
                <button
                onClick={() => handleRemoveFromWishlist(listing._id)} 
               className='absolute right-0 top-1/2 transform -translate-y-1/2 p-1 px-2 
                 mr-2 rounded-lg text-[16px] text-white hover:text-red-700 bg-slate-900'>Remove
                  </button>
              </div>
            </div>


          ))}
    </div>
  )
}
