import {  React,useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import GoogleSignUp from '../../components/GoogleSignUp';




export default function SignUpPage() {
  const [formData, setFormData] = useState({});
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    setloading(true)
    
    
    try {
      e.preventDefault();
   setloading(true)
   const res = await fetch('/auth/user/sign-up', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData)
   })
   const data = await res.json();
   if (data.success === false) {
     
     setloading(false);
     return;
   }
   setloading(false)
     
     navigate('/sign-in'); 
   }
   
   catch (error) {
    
     setloading(false);
     
}

  }
  


  return (
    
    <div
    className='w-cover sm:w-[430px] flex flex-col 
     mx-auto bg-white
    mt-12 rounded-lg shadow-md pb-12'
>
    <h1 className='text-center mt-5 font-bold text-2xl'>Sign Up</h1>
      <form onSubmit={handleSubmit}
        className='text-center mt-5'>
        <input
          required
          onChange={handleChange}
          id='username'
          className='bg-slate-50 mt-5 p-3 w-[300px] sm:w-[330px] 
            rounded-lg focus:outline-gray-400'
            type="text"
            placeholder='Enter username' />
        <input
               required
          onChange={handleChange}
          className='bg-slate-50 mt-3 p-3 w-[300px] sm:w-[330px]
             rounded-lg focus:outline-gray-400'
          type="text"
          id='email'
            placeholder='Enter email' />
        <input
               required
          onChange={handleChange}
          className='bg-slate-50 mt-3 p-3 w-[300px] sm:w-[330px] 
            rounded-lg focus:outline-gray-400'
          type="text"
          id='password'
            placeholder='Enter password' />
        
        <button
            className="bg-green-800 w-[300px] sm:w-[330px]
     text-white p-2 mt-6 text-center rounded-lg hover:opacity-90"
        >  {loading ? 'loading..' : 'Sign Up'}</button>
         <GoogleSignUp/>
    
 
    
</form>
<p className='mx-auto mt-4'>Already have an account?</p>

<Link className='mx-auto' to='/sign-in'>
  <p className='text-blue-700 mt-2 hover:text-green-500'>Sign In here</p> 
</Link>

</div>
)
}
