import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userListings } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

export const MyListingsComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const [listingsError, setListingsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMyListings = async () => {

    try {
        setListingsError(false);
        setLoading(true)
      const res = await fetch(`/auth/user/mylistings/${userData._id}`);
      const data = await res.json();

      if (data.success === false) {
          setListingsError(data.message);
          setLoading(false)
        return;
      }

        dispatch(userListings(data));
        setLoading(false)
      navigate('/my-listings');
    } catch (error) {
        setListingsError('An error occurred while fetching listings.');
        setLoading(false)
    }
  };

  return (
    <div onClick={handleMyListings}
                  className='h-[30px] sm:h-[43px] w-[90px] sm:w-[125px] text-[10px] sm:text-[15px] border
                   border-gray-600 sm:border-gray-450   gap-1
                   flex items-center justify-center text-white hover:h-[47px] hover:bg-slate-800 transition duration-300 rounded-sm cursor-pointer'>
               
          {loading? (<h1>My Listings..</h1>) : (<h1>My Listings</h1>)}
          
          
              </div>
  );
};
