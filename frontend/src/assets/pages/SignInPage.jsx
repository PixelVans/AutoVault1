import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 import { useNavigate } from 'react-router-dom'
 import { useDispatch } from 'react-redux';
import { loggedIn } from '../../../redux/userSlice';
import GoogleSignUp from '../../components/GoogleSignUp';




export default function SignInPage() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [signInError, setSignInError] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.id] : e.target.value
  })

}

  
  const handleSubmit = async (e) => {

   try {
    
     
     
    e.preventDefault()
     setLoading(true)
    const res = await fetch('/auth/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
 
    
  if (data.success === false) {
    setLoading(false)
    setSignInError(data.message || 'Sign in failed. Please try again.');
    return
  }
     setLoading(false)
     dispatch(loggedIn(data))
   navigate('/')
     
   }  catch (error) {
     setLoading(false)
     setSignInError('Sign in failed. Please try again.');
    }
  
  }

  return (
      <div
          className='w-cover sm:w-[430px] flex flex-col 
           mx-auto bg-white
          mt-12 rounded-lg shadow-md pb-12'
      >
      <h1 className='text-center mt-5 font-bold text-2xl'>Sign In</h1>
      {signInError && (<p className='text-center text-red-500 mt-2'>{ signInError}</p>)}

      <form
        onSubmit={handleSubmit}
        className='text-center mt-5'>
        <input
          onChange={handleChange}
          id='username'
                  className='bg-slate-50 mt-5 p-3 w-[300px] sm:w-[330px] rounded-lg focus:outline-gray-400'
                  type="text"
                  placeholder='Enter username' />
        <input
          onChange={handleChange}
             id='password'
                  className='bg-slate-50 mt-3 p-3 w-[300px] sm:w-[330px] rounded-lg focus:outline-gray-400'
                  type="text"
                  placeholder='Enter password' />
              
              <button
                  className="bg-green-800 w-[300px] sm:w-[330px]
           text-white p-2 mt-6 text-center rounded-lg hover:opacity-90"
        >
          {loading ? 'Loading.. ' : 'SIGN IN'}
        </button>
       <GoogleSignUp/>
    </form>
    <p className='mx-auto mt-4'>Dont have an account?</p>

    <Link className='mx-auto' to='/sign-up'>
        <p className='text-blue-700 mt-2 hover:text-green-500'>Sign up here</p> 
    </Link>

</div>
  )
}
