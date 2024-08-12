
import { useSelector, useDispatch } from 'react-redux'
import {  React,useState ,useRef} from 'react'
import {Link,useNavigate} from 'react-router-dom'




export default function ProfilePage() {
  const [formData, setFormData] = useState({});
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState(undefined)
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);
  const fileRef = useRef(null)

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
      <input hidden ref={fileRef} type="file" />


      <img
        onClick={()=>fileRef.current.click()}
        className='h-[80px] w-[80px] rounded-full mx-auto mt-6'
        src={userData.avatar} alt="avatar" />
      <p className='text-center text-green-900 mt-2'>Edit profile</p>

      <form onSubmit={handleSubmit}
        className='text-center mt-5'>
        <input
          required
          onChange={handleChange}
          defaultValue={userData.username}
          id='username'
          className='bg-slate-50 mt-5 p-3 w-[300px] sm:w-[330px] 
            rounded-lg focus:outline-gray-400'
            type="text"
            placeholder='Enter username' />
        <input
          required
          defaultValue={userData.email}
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
        >  { loading ? 'loading..': 'Update'}</button>
    
 
    
</form>
<p className='mx-auto mt-4'>Already have an account?</p>

<Link className='mx-auto' to='/sign-in'>
  <p className='text-blue-700 mt-2 hover:text-green-500'>Sign In here</p> 
</Link>

</div>
)
}
