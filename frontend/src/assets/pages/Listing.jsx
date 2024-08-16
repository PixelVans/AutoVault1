import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';


export default function Listing() {

  SwiperCore.use([Navigation]);
  const newCar = useSelector(state => state.user.newCar);
console.log(newCar)
  return (
    <div className='max-w-[1000px] mx-auto  mt-5 bg-slate-50 p-4 rounded-md shadow-md'>
      <h1 className='text-center text-md sm:text-2xl p-4 '>
       
        <span className='font-bold mr-4 text-md sm:text-2xl'>{newCar.title.toUpperCase()}
          {newCar.model.toUpperCase()}</span>Listed <Link to={'/'}
            className='text-blue-700 underline hover:text-blue-900'>Go to HomePage</Link> </h1>
    <main className='flex flex-col sm:grid sm:grid-cols-2 '>
      
        <div className='bg-slate-200'>
        <Swiper navigation>
        {newCar.images.map(url => 
                      <SwiperSlide key={url}>
                          <div className='' 
                              style={{}}>
                              <img className='h-[300px] w-[350px] sm:h-[400px] sm:w-[450px] object-contain rounded-lg' src={url}></img>
                          </div>
                      </SwiperSlide>
                  )}
          </Swiper>
          
        </div>
        

        <div className=' '>
    <h2 className=' mt-3 sm:mt-0 text-md sm:text-xl ml-2 bg-slate-200 p-2 rounded-lg '>
        <span className='font-bold ml-3'>Title:</span>
        <span className='ml-6'>{newCar.title}</span>
        <span className=" border-r-8 border-r-slate-200"></span>
          </h2>
          
    <h2 className='text-md sm:text-xl ml-2 mt-3 bg-slate-200 p-2 rounded-lg '>
        <span className='font-bold ml-3'>Model:</span>
        <span className='ml-6'>{newCar.model}</span>
        <span className=" border-r-8 border-r-slate-200"></span>
    </h2>
    <h2 className='text-md sm:text-xl ml-2 mt-3 bg-slate-200 p-2 rounded-lg '>
        <span className='font-bold ml-3'>Price:</span>
        <span className='ml-6'>{newCar.price}</span>
        <span className=" border-r-8 border-r-slate-200"></span>
    </h2>
    <h2 className='text-md sm:text-xl ml-2 mt-3 bg-slate-200 p-2 rounded-lg '>
        <span className='font-bold ml-3'>Mileage:</span>
        <span className='ml-6'>{newCar.mileage}</span>
        <span className=" border-r-8 border-r-slate-200"></span>
    </h2>
    <h2 className='text-md sm:text-xl ml-2 mt-3 bg-slate-200 p-2 rounded-lg '>
        <span className='font-bold ml-3'>Year:</span>
        <span className='ml-6'>{newCar.year}</span>
        <span className=" border-r-8 border-r-slate-200"></span>
    </h2>
    <h2 className='text-md sm:text-xl ml-2 mt-3 bg-slate-200 p-2 rounded-lg '>
        <span className='font-bold ml-3'>Location:</span>
        <span className='ml-6'>{newCar.location}</span>
        <span className=" border-r-8 border-r-slate-200"></span>
    </h2>
    <h2 className='text-md sm:text-xl ml-2 mt-3 bg-slate-200 p-2 rounded-lg '>
        <span className='font-bold ml-3'>Condition:</span>
        <span className='ml-6'>{newCar.condition}</span>
        <span className=" border-r-8 border-r-slate-200"></span>
    </h2>
</div>

       
   
    



      </main>
    </div>
  )
}
