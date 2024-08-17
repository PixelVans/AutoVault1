

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { removeListing } from '../../../redux/userSlice';
import { useDispatch } from 'react-redux';

export default function MyListings() {
  const myListings = useSelector(state => state.user.myListings);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteMessage, setdeleteMessage] = useState(false);
  const [userListings, setUserListings] = useState(myListings);
  const dispatch = useDispatch()
 

  // Filter the listings based on the search term
  const filteredListings = userListings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );








  const handleDeletelisting = async (listingId) => {
    try {
    setdeleteMessage(false)
      const res = await fetch( `/auth/user/delete-listing/${listingId}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      
      if (data.success === false) {
        setdeleteMessage(data.message)
    return
      }
      setdeleteMessage(data)
      dispatch(removeListing(listingId));
      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId))
       
    } catch (error) {
      console.log(error)
      setdeleteMessage(false)
    }
  }




  // Handle cases where myListings might be undefined or empty
  if (!userListings || userListings.length === 0) {
    return <p>No listings available.</p>;
  }

  return (
    <div>
      {/* Search Input Field */}
      <div className='bg-gray-200 rounded-lg w-[250px] sm:w-[350px] flex mx-auto mt-4'>
        <input
          className='bg-gray-200 ml-[8px] p-[6px] sm:p-2 rounded-lg w-[140px] sm:w-64 focus:outline-none m-auto'
          type="text"
          placeholder='Search my listing..'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => {}} // The button is not necessary for filtering, as filtering occurs automatically
          className='mr-2 text-gray-500'>
          <FaSearch />
        </button>
      </div>
      {deleteMessage && (<h1 className='text-center text-xl text-green-600 p-2'>{ deleteMessage}</h1>)}

      {/* Display Filtered Listings */}
      <div className='flex max-w-[340px] sm:max-w-[1300px] mx-auto flex-wrap mt-5'>
        {filteredListings.length > 0 ? (
          filteredListings.map((listing, index) => (
            <div key={index} className='w-[150px] h-[175px] group sm:w-[290px] sm:h-[275px] bg-gray-50 m-1 shadow-lg overflow-hidden'>
              <img
                className='h-[120px] w-[150px] sm:h-[200px] sm:w-[300px] object-cover hover:scale-105 transition-scale duration-300 cursor-pointer'
                src={listing.images[0]}
                alt={`Listing ${index}`}
              />
              <p className='mt-1 sm:mt-2 font-bold ml-1 text-[11px] sm:text-[17px]'>{listing.title}</p>
              
              <div className='flex sm:hidden group-hover:flex justify-between'>
               
              <Link to={`/update-listing/${listing._id}`}>
                  <button  className='bg-slate-800 p-1 rounded-lg
                   text-white px-5 mx-1 mt-1 hover:opacity-80 text-[10px] sm:text-[16px]'>EDIT</button>
                </Link>
                
                <button
                  onClick={() => handleDeletelisting(listing._id)}
                  className='bg-red-700 p-1 rounded-lg
                   text-white px-3 mx-1 mt-1 hover:opacity-80 text-[10px] sm:text-[16px]'>DELETE</button>
              
              </div>
            </div>
          ))
        ) : (
          <p className='text-center w-full'>No listings found.</p>
        )}
      </div>
    </div>
  );
}


