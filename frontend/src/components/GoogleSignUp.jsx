import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../fireBase.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loggedIn } from '../../redux/userSlice.js';
import { FcGoogle } from 'react-icons/fc';



export default function GoogleSignUp() {

  


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleGoogleSignUp = async ()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app)
            
            
            const result = await signInWithPopup(auth, provider) 
            
            const res = await fetch('/auth/user/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            
            const data = await res.json()
            
            dispatch(loggedIn(data));
            navigate('/')
         } catch (error) {
            console.log('could not sign in with google', error)
        }
}










  return (
      <button
          onClick={ handleGoogleSignUp}
       type='button'
            className="bg-slate-300 w-[300px] sm:w-[330px]
     text-black p-1 mt-2 text-center rounded-lg hover:opacity-90 shadow-sm shadow-black"
  >  
          <h4 className='flex justify-center text-center text-[17px] sm:text-xl '>continue with <span className='ml-3'>
              <FcGoogle className=" text-[17px] sm:text-xl mt-[5px]" /></span>oogle</h4>
  </button>
  )
}
