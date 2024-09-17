import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import checkmark icon
import Lottie from 'lottie-react'; // Import Lottie component
import successAnimation from '../../animations/confetti.json'; // Import your Lottie animation file

const Success = () => {
    return (
        <main className='h-screen'>
    <div className="relative h-[600px] flex items-center justify-center bg-green-300 rounded-b-[300px] overflow-hidden mt-5 lg:mt-0 ">
      {/* Lottie Animation */}
      <Lottie
        animationData={successAnimation}
        loop={true} // Set to false if you want it to play only once
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Success Message */}
      <div className="relative text-center p-8 bg-white shadow-lg rounded-lg z-10">
        <div className="mb-4 text-green-600">
          <FaCheckCircle className="lg:w-24 lg:h-24 w-[60px] h-[60px] mx-auto" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-green-600 mb-4">Reservation Successful!</h1>
        <p className="text-gray-700 mb-6">
          You have successfully reserved the vehicle. <br/> Our team will contact you shortly with the next steps.
        </p>
        <p className="text-gray-500 mb-8">
          If you have any questions in the meantime, feel free to reach out to us.
        </p>
        <a
          href="/"
          className="inline-block px-3 py-2 lg:px-6 lg:py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-green-700"
        >
          Go to Homepage
        </a>
      </div>
    </div> </main>
  );
}

export default Success;
