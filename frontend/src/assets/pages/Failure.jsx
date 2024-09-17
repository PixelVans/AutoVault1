import React from 'react';

const Failure = () => {
    return (
      <main className='h-screen'>
    <div className="relative lg:h-[600px] h-[400px]  flex items-center justify-center bg-red-50 overflow-hidden rounded-b-[300px]">
      <div className="relative text-center p-8 bg-white shadow-lg rounded-lg z-10">
        <div className="mb-4 text-red-600 text-6xl">
          😞 {/* Sad emoji */}
        </div>
        <h1 className=" text-xl lg:text-3xl font-bold text-red-600 mb-4">Transaction Failed</h1>
        <p className="text-gray-700 mb-6">
          Something went wrong with your transaction. <br />Please try again or contact support for assistance.
        </p>
        <a
          href="/home"
          className="inline-block px-3 py-2 lg:px-6 lg:py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
        >
          Go to Homepage
        </a>
      </div>
    </div></main>
  );
}

export default Failure;
