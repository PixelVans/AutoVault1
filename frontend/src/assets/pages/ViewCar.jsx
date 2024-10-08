

import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js'
import { Swiper, SwiperSlide } from 'swiper/react';
import  SwiperCore from 'swiper'; // Ensure Navigation is imported from SwiperCore
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Contact from '../../components/Owner';
import { toast } from 'react-toastify'; 
// Add custom styles for Swiper arrows
import '/src/index.css';



SwiperCore.use([Navigation]); // Initialize the Navigation module

export default function ViewCar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Cleanup function that runs when component unmounts
    return () => {
      setIsProcessing(false);
    };
  }, []);
  

  const listing = useSelector((state) => state.user.listing);
  const currentUser = useSelector((state) => state.user.userData);
  const [isProcessing, setIsProcessing] = useState(false); // Loading state
  const [contact, setContact] = useState(false);
  const reservationPrice = (listing.price * 0.20).toFixed(2);
  // 20% of the price
 
  
  const makePayment = async () => {
    setIsProcessing(true); // Set processing to true when payment starts
    if (currentUser && listing.owner == currentUser._id) {
      toast.info('You are the Owner of this vehicle');
      setIsProcessing(false);
      return
     }
    const stripe = await loadStripe('pk_test_51Pz6WERoTuW6EzfZMfdekxghKcp4HeLFpylRthgBdNLRu7HOOFasCgsWxBHtBxz5VLgkJNYVqIqYSMPQ0nPUVMU500iSvuZ0et');
    
    const cart = [{ name: listing.title, price: reservationPrice, image: listing.images[0] }];

    console.log(cart)
    const body = { products: cart };
    const headers = { "Content-Type": "application/json" };

    try {
      const response = await fetch(`/auth/user/reserve`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        console.log(result.error);
        setIsProcessing(false);
      }
    } catch (error) {
      setIsProcessing(false);
      console.log('Payment error: ', error);
    } finally {
      setIsProcessing(false); // Set processing to false after payment process ends
    }
  };



  return (
    <main className='max-w-[1200px] mx-auto p-2 h-full shadow-md shadow-gray-900 mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='mt-5 relative'> 
          <Swiper
           navigation
            className='mySwiper'
          >
            {listing.images && listing.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className='object-cover w-full sm:mt-12'
                  src={image}
                  alt={`Vehicle image ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        

          {/* Contact button outside Swiper */}
          {currentUser && listing.owner !== currentUser._id && !contact && (
            <div className='flex  lg:gap-1'>
            <button
              onClick={() => setContact(true)}
              className='bg-slate-800 text-white rounded-lg rounded-r-none uppercase hover:opacity-85 p-2 sm:p-3 
             w-full mx-auto text-center mt-3 text-[13px] sm:text-[16px]  bottom-4 '
            >
              Contact Owner
              </button>
              <button
                onClick={makePayment}
                className='bg-green-700 text-white rounded-lg rounded-l-none  uppercase hover:opacity-85 p-2 sm:p-3 
              w-full mx-auto text-center mt-3 text-[13px] sm:text-[16px]  bottom-4  border border-slate-900'>
                {isProcessing ? 'Processing...' : `Reserve for $${reservationPrice }`}
              </button>
            </div>
          )}
          {contact && <Contact listing={listing} />}
        </div>

        <div className='bg-white mt-5'>
          <h1 className='text-center sm:mt-3 sm:mb-1 text-xl sm:text-2xl text-gray-900 font-semibold'>
            Vehicle Details
          </h1>
          <hr />
          <div className='bg-slate-50 px-5 sm:px-9 m-5 p-2 shadow-black shadow-sm'>
  <div className='grid grid-cols-2 gap-2'>
   
    <div className='grid grid-cols-1 gap-y-1'>
      <h4 className='p-1 font-bold'>Title</h4>
      <h4 className='p-1 font-bold'>Brand</h4>
      <h4 className='p-1 font-bold'>Model</h4>
      <h4 className='p-1 font-bold'>Year</h4>
      <h4 className='p-1 font-bold'>Location</h4>
      <h4 className='p-1 font-bold'>Mileage</h4>
      <h4 className='p-1 font-bold'>Fuel Type</h4>
      <h4 className='p-1 font-bold'>Condition</h4>
      <h4 className='p-1 font-bold'>Transmission</h4>
      <h4 className='p-1 pl-4 bg-slate-800 rounded-lg rounded-r-none mt-2 font-bold text-white'>
        Price
      </h4>
    </div>

    
    <div className='grid grid-cols-1 gap-y-1'>
      <h4 className='ml-2 p-1'>{listing.title}</h4>
      <h4 className='ml-2 p-1'>{listing.brand}</h4>
      <h4 className='ml-2 p-1'>{listing.model}</h4>
      <h4 className='ml-2 p-1'>{listing.year}</h4>
      <h4 className='ml-2 p-1'>{listing.location}</h4>
      <h4 className='ml-2 p-1'>{listing.mileage} miles</h4>
      <h4 className='ml-2 p-1'>{listing.fueltype}</h4>
      <h4 className='ml-2 p-1'>{listing.condition}</h4>
      <h4 className='ml-2 p-1'>{listing.transmission}</h4>
      <h4 className='p-1 mt-2 pl-4 text-white font-bold bg-red-600 rounded-lg rounded-l-none'>
        ${listing.price}
      </h4>
    </div>
  </div>
</div>


          <div className='bg-slate-100 mb-4 pb-5 mx-2'>
            <h4 className='p-1 font-bold text-center'>Description</h4>
            <hr className='bg-slate-400 mb-2 p-[1px] mx-5' />
            <h4 className='mx-9'>{listing.description}</h4>
          </div>
        </div>
      </div>
    </main>
  );
}
