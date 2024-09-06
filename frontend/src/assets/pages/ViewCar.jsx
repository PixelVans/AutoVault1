import {React,useState} from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import Contact from '../../components/Owner';




export default function ViewCar() {
    const listing = useSelector(state => state.user.listing)
    const currentUser = useSelector(state => state.user.userData)
    const [contact, setContact] = useState(false);

  return (
      <main className='max-w-[1200px] mx-auto p-2 shadow-md shadow-gray-900 mt-4'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className=' mt-5'>
                  <Swiper>
                      <SwiperSlide>
                          <div >
                              <img className='object-cover w-full sm:h-[428px]' src={listing.images} alt="" />
                              {currentUser && listing.owner !== currentUser._id && !contact &&(
                                  <button onClick={() => setContact(true)}
                                      className='bg-slate-800 text-white
                                       rounded-lg uppercase hover:opacity-85 p-2 sm:p-3 w-full mx-auto text-center mt-3 text-[13px] sm:text-[16px]'>
                Contact Owner
              </button>
                              )}
                              
                              {contact && <Contact listing={listing} />}
                          </div>
                      </SwiperSlide>
                      
                  </Swiper>  
          </div>
              <div className='bg-white mt-5'>
                  <h1 className='text-center sm:mt-3 sm:mb-1 text-xl sm:text-2xl text-gray-900 font-semibold'> Vehicle Details</h1><hr></hr>
                  <div className='bg-slate-50 px-5 sm:px-9 m-5 grid grid-cols-2 p-2 shadow-black shadow-sm'>
                      <div>
                       <h4 className='p-1 font-bold'>Title </h4>   
                       <h4 className='p-1 font-bold'>  Brand </h4>   
                       <h4 className='p-1  font-bold'> Model </h4>   
                       <h4 className='p-1  font-bold'> Year </h4>   
                       <h4 className='p-1  font-bold'>  Location</h4>   
                       <h4 className='p-1 font-bold '> Mileage </h4>   
                       <h4 className='p-1  font-bold'> Fuel Type </h4>   
                       <h4 className='p-1  font-bold'> Condition </h4>   
                       <h4 className='p-1  font-bold'>  Transmission </h4>   
                       <h4 className='p-1 pl-4 bg-slate-800 rounded-lg rounded-r-none mt-2 font-bold text-white'>  Price</h4>   
                       
                      </div>
                      
                      <div>
                          <h4 className='ml-2 p-1'>{listing.title}</h4> 
                          <h4 className='ml-2 p-1'> { listing.brand}   </h4>
                          <h4 className='ml-2 p-1'>  { listing.model} </h4>
                          <h4 className='ml-2 p-1'> { listing.year}  </h4>
                          <h4 className='ml-2 p-1'> { listing.location}  </h4>
                          <h4 className='ml-2 p-1'> { listing.mileage}  </h4>
                          <h4 className='ml-2 p-1'>  { listing.fueltype} </h4>
                          <h4 className='ml-2 p-1'>  { listing.condition} </h4>
                          <h4 className='ml-2 p-1'>  {listing.transmission} </h4>
                          <h4 className=' p-1 mt-2  pl-4 text-white font-bold bg-red-600 rounded-lg rounded-l-none'> ${ listing.price} </h4>
                         
                          
                      </div>
                   
                 
                      

                  </div>
                       <div className='bg-slate-100 mb-4 mx-2'>
                      <h4 className='p-1 font-bold text-center'>  Description</h4>
                      <hr className=' bg-slate-400 mb-2 p-[1px] mx-5' />
                       <h4 className='mx-9'>  { listing.description} </h4>    
                       </div>
              </div>
          </div>

          
    </main>
  )
}
