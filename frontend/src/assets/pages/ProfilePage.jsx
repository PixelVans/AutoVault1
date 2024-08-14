
import { useSelector, useDispatch } from 'react-redux'
import {  React,useState ,useRef,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { app } from '../../fireBase'; 
import { loggedIn,loggedOut } from '../../../redux/userSlice';

import {getStorage, ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'



export default function ProfilePage() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false);
  const [file, setFile] = useState(undefined)
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);
  const [uploadProgress, setUploadProgress] = useState(0); 
  const [fileUploadError, setFileUploadError] = useState(false)
  const [signOutError, setSignOutError] = useState(false)
  const [updateError, setUpdateError] = useState(false)
  const fileRef = useRef(null)









  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })

  }
















  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file])


  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, `uploads/${userData._id}/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Progress function
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress));
      }, 
      (error) => {
        // Error function
        
        setFileUploadError(true)
      }, 
      () => {
        // Complete function
        getDownloadURL(uploadTask.snapshot.ref).then((fileURL) => {
     
          setFormData(prevFormData => ({ ...prevFormData, avatar: fileURL }));
          // Optionally, you can update the user's profile with the new avatar URL
        });
      }
    );
  };





 















  const handleSubmit = async (e) => {
    e.preventDefault()
    setloading(true)
    
    
    try {
      e.preventDefault();
   setloading(true)
   const res = await fetch(`/auth/user/update/${userData._id}`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData)
   })
   const data = await res.json();
      if (data.success === false) {
       
     setUpdateError(data.message)
     setloading(false);
     
     return;
      }
      dispatch(loggedIn(data))
   setloading(false)
     
     navigate('/'); 
   }
   
   catch (error) {
    
     setloading(false);
     const errorMessage = 'An unexpected error occurred. Please try again.';
    setUpdateError(errorMessage);
}

  }
  








  const handleSignoutUser = async () => {
    try {
      setSignOutError(false)
      const res = await fetch(`/auth/user/sign-out/`)
      const data = await res.json();
      if (data.success === false) {
        setSignOutError(data.message)
        return;
      }
      dispatch(loggedOut())
      setSignOutError(false)
    

    } catch (error) {
      setSignOutError('Network error! please try again later')
    }
  }









 //HandleDelete User
 const handleDeleteUser = async () => {
  try { 
   setSignOutError(false)
    const res = await fetch(`/auth/user/delete/${userData._id}`, {
      method: 'DELETE',
      
    });
    const data = await res.json();
    if (data.success === false) {
        setSignOutError(data.message)
        return;
      }
    
    dispatch(loggedOut())
    setSignOutError(false)
    

  } catch (error) {
   setSignOutError('Cannot delete user! Please try again later')
}
}









  return (
   
    <div
    className='w-cover sm:w-[430px] flex flex-col 
     mx-auto bg-white
    mt-12 rounded-lg shadow-md pb-12'
>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        hidden
        ref={fileRef}
        type="file"
        accept='image/*' />


      {/* <img
        onClick={()=>fileRef.current.click()}
        className='h-[80px] w-[80px] rounded-full mx-auto mt-6'
        src={formData.avatar || userData.avatar} alt="avatar" /> */}
      

      

      <div className=' h-[80px] w-[80px] mx-auto mt-6'>
  <img
    onClick={() => fileRef.current.click()}
    className='h-[80px] w-[80px] rounded-full object-cover'
    src={formData.avatar ?formData.avatar: userData.avatar}
    alt="avatar"
  />
  
</div>




      <p className='text-center text-green-900 mt-2'>Edit profile</p>
      {uploadProgress > 0 && uploadProgress < 100 ? (
    
    <span className='text-green-700 text-sm text-center'>Verifying image {uploadProgress}%</span>
  
      ) : null}
      
      {uploadProgress === 100 ? ( <p className='text-green-500 text-center mt-2'> Image Uploaded </p>) : ''}

      {updateError && <p className='text-red-500 text-center mt-2'>{updateError}</p>}

      {signOutError && (<p className='text-red-500 text-center mt-2'>{signOutError}</p>)}


      <form onSubmit={handleSubmit}
        className='text-center mt-5'>
        <input
         
          onChange={handleChange}
          defaultValue={userData.username}
          id='username'
          className='bg-slate-50 mt-5 p-3 w-[300px] sm:w-[330px] 
            rounded-lg focus:outline-gray-400'
            type="text"
            placeholder='Enter username' />
        <input
          
          defaultValue={userData.email}
          onChange={handleChange}
          className='bg-slate-50 mt-3 p-3 w-[300px] sm:w-[330px]
             rounded-lg focus:outline-gray-400'
          type="text"
          id='email'
            placeholder='Enter email' />
        <input
               
          onChange={handleChange}
          className='bg-slate-50 mt-3 p-3 w-[300px] sm:w-[330px] 
            rounded-lg focus:outline-gray-400'
          type="text"
          id='password'
          placeholder='Enter password' />
        
     
       

        <button
          
            className="bg-green-800 w-[300px] sm:w-[330px]
     text-white p-2 mt-6 text-center rounded-lg hover:opacity-90"
        >  { loading ? 'Updating...': 'Update'}</button>
    
    
    
</form>
      <button
        type='buttob'
        onClick={handleSignoutUser}
        className='bg-red-400 w-[300px] 
   sm:w-[330px] text-center mx-auto mt-3 p-1
    rounded-md hover:opacity-90'>Signout</button>
      
      <button
        type='button'
        onClick={handleDeleteUser}
        className='bg-red-900 w-[300px] 
   sm:w-[330px] text-center mx-auto mt-3 p-1
    rounded-md text-white hover:opacity-90'>Delete Account</button>

</div>
)
}
