import React from 'react'
import {Link} from 'react-router-dom'




export default function SignUpPage() {
  return (
    
    <div
    className='w-cover sm:w-[430px] flex flex-col 
     mx-auto bg-white
    mt-12 rounded-lg shadow-md pb-12'
>
    <h1 className='text-center mt-5 font-bold text-2xl'>Sign Up</h1>
<form className='text-center mt-5'>
        <input
            className='bg-slate-50 mt-5 p-3 w-[300px] sm:w-[330px] rounded-lg focus:outline-gray-400'
            type="text"
            placeholder='Enter username' />
        <input
            className='bg-slate-50 mt-3 p-3 w-[300px] sm:w-[330px] rounded-lg focus:outline-gray-400'
            type="text"
            placeholder='Enter email' />
        <input
            className='bg-slate-50 mt-3 p-3 w-[300px] sm:w-[330px] rounded-lg focus:outline-gray-400'
            type="text"
            placeholder='Enter password' />
        
        <button
            className="bg-green-800 w-[300px] sm:w-[330px]
     text-white p-2 mt-6 text-center rounded-lg hover:opacity-90"
  >
    Sign Up
  </button>
    
</form>
<p className='mx-auto mt-4'>Already have an account?</p>

<Link className='mx-auto' to='/sign-in'>
  <p className='text-blue-700 mt-2 hover:text-green-500'>Sign In here</p> 
</Link>

</div>
)
}
