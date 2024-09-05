
import { app } from "../../fireBase"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { React, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { sellcar } from "../../../redux/userSlice"
import { useDispatch } from "react-redux"









export default function SellCar() {
  const [imageUploadError, setImageUploadError] = useState(false)
  const [uploading, setUploading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(state => state.user.userData);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState([])
  const [formData, setFormData] = useState({
    images: [],
    title: '',
    description: '',
    location: '',
    price: '',
    mileage: '',
    year: '',
    brand: '',
    fueltype: '',
    transmission: '',
    condition: '',
    category: '',
    sports: false
  });

console.log(formData)

  const handleChange = (e) => {

    const { name, type, checked, value } = e.target;
    
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));


    if (e.target.name === 'fueltype' || e.target.name === 'transmission' || e.target.name === 'condition') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    } else if (e.target.type === 'number' || e.target.type === 'text' || e.target.type === 'textarea') {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
    }
  }




  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.images.length < 6) {
        setUploading('Uploading...')
        setImageUploadError(false)
        const promises = [];
        
        for (let i = 0; i < files.length; i++){
            promises.push(storeImage(files[i]))
        }
        Promise.all(promises).then((urls) => {
            setFormData({ ...formData, images: formData.images.concat(urls) })
            setImageUploadError(false)
            setUploading('Upload')
        }).catch((err) => {
            setImageUploadError('Image upload failed (5mb max per image)')
              setUploading(false)
        })

    } else if(files.length == 0) {
        setImageUploadError('No images selected')
    }
    
    else {
       setImageUploadError('You can only upload am max of  5 images per listing')
       setUploading(false)
    }
}


  
const handleRemoveImage = (index) => {
  setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
  });
  if (files.length === 0) {
      setUploading(null);
  }
};

  
  
  
      //STORE IMAGE
      const storeImage = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const filename = new Date().getTime() + file.name;
            const storageRef = ref(storage, filename);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                
                },
                (error) => {
                    reject(error);
                },
            
                () => {
                    // Handle successful uploads on complete
                    getDownloadURL (uploadTask.snapshot.ref).then((downloadURL) => {
                       
                        resolve(downloadURL);
                    });
                }
            
            )
    })
}




  
  




  
  
  
  
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      if(formData.images.length < 1)return setError('You must upload atleast one image')
      
      setLoading(true);
      setError(false);
      const res = await fetch(`/auth/user/createlisting/`, {
          method: 'POST',
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify({
              ...formData,
              owner : userData._id
          }),
      });
    const data = await res.json();
    
      setLoading(false)
      if (data.success === false) {
        setError(data.message);
        return
    }
    
    dispatch(sellcar(data))
   console.log(data)
     navigate(`/listing/${data._id}`)


  } catch (error) {
      setError(error.message);
      setLoading(false);
  }
  
  
}




  return (
    <main className='w-[350px] sm:w-[1000px] mx-auto p-3 sm:pl-[50px] mt-3 sm:pr-[30px]
     bg-gray-200 rounded-lg shadow-sm border border-gray-400'>
      <h1 className='text-2xl sm:text-3xl font-semibold text-center my-1'>Create a Listing</h1>
      <form onSubmit={handleSubmit}
        className='flex flex-col sm:grid grid-cols-2'>
        <div>
          <div className='mt-5'>
            <input className='h-[40px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300'
              onChange={handleChange}
              value={formData.title}
              type="text"
              id='title'
              required
              placeholder='Enter car title' />
          </div>
          <div>
            <input
              className='h-[40px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300 mt-4'
              type="text"
              id='brand'
              required
              onChange={handleChange}
              value={formData.brand}
              placeholder='Enter car brand' />
          </div>
          <div>
            <input
              className='h-[40px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300 mt-4'
              type="text"
              id='model'
              required
              onChange={handleChange}
              value={formData.model}
              placeholder='Enter car model' />
          </div>
          <div>
            <textarea
              className='min-h-[70px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300 mt-4'
              type="text"
              id='description'
              required
              onChange={handleChange}
              value={formData.description}
              placeholder='Enter car description' />
          </div>
          <div>
            <input
              className='h-[40px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300 mt-4'
              type="number"
              id='year'
              required
              onChange={handleChange}
              value={formData.year}
              placeholder='Enter year of manufacture' />
          </div>
          <div>
            <input
              className='h-[40px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300 mt-4'
              type="number"
              id='mileage'
              required
              onChange={handleChange}
              value={formData.mileage}
              placeholder='Enter mileage' />
          </div>
          <div>
            <input
              className='h-[40px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300 mt-4'
              type="number"
              id='price'
              required
              onChange={handleChange}
              value={formData.price}
              placeholder='Enter price' />
          </div>
          <div>
            <input
              className='h-[40px] w-[325px] sm:w-[360px] rounded-lg pl-3 focus:outline-gray-300 mt-4'
              type="text"
              id='location'
              required
              onChange={handleChange}
              value={formData.location}
              placeholder='Enter location' />
          </div>
        </div>

        <div className='mt-5 '>
          <div className='flex gap-2 flex-wrap mx-1'>
            <p className='font-bold pr-6'>Fuel Type:</p>
            Petrol <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='petrol'
              required
              name='fueltype'
              onChange={handleChange}
              type="radio"
              value='petrol' />
            Electric <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='electric'
              name='fueltype'
              required
              onChange={handleChange}
              type="radio"
              value='electric' />
            Diesel <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='diesel'
              name='fueltype'
              onChange={handleChange}
              type="radio"
              required
              value='diesel' />
            Hybrid <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='hybrid'
              name='fueltype'
              required
              onChange={handleChange}
              type="radio"
              value='hybrid' />
          </div> <hr className="h-[1px] mt-1 bg-slate-400" />
          

          <div className='flex gap-2 mt-4'>
            <p className='font-bold'>Transmission:</p>
            Manual <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='manual'
              required
              name='transmission'
              onChange={handleChange}
              type="radio"
              value='manual' />
            Automatic <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='automatic'
              required
              name='transmission'
              onChange={handleChange}
              type="radio"
              value='automatic' />
          </div> <hr className="h-[2px] mt-1 bg-slate-400" />
          
          <div className='flex gap-2 mt-4'>
            <p className='font-bold pr-6'>Condition:</p>
            New <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='new'
              required
              name='condition'
              onChange={handleChange}
              type="radio"
              value='new' />
            Used <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='used'
              required
              name='condition'
              onChange={handleChange}
              type="radio"
              value='used' />
          </div>  <hr className="h-[2px] mt-1 bg-slate-300" />



          <div className='flex gap-2 mt-4 mx-1 flex-wrap'>
            <p className='font-bold pr-6'>Category:</p>
            Bus <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='bus'
              required
              name='category'
              onChange={handleChange}
              type="radio"
              value='bus' />
            Truck <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='truck'
              required
              name='category'
              onChange={handleChange}
              type="radio"
              value='truck' />
            Nm-Car <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='car'
              required
              name='category'
              onChange={handleChange}
              type="radio"
              value='car' />
            SUV <input
              className='w-[15px] mt-1 sm:mt-0 sm:w-[20px]'
              id='suv'
              required
              name='category'
              onChange={handleChange}
              type="radio"
              value='suv' />
            
          
          </div>  <hr className="h-[2px] mt-1 bg-slate-300" />


          <div className='flex gap-2 mt-4'>
            <p className='font-bold pr-6'>Sports:</p>
            <p className="text-gray-800">optional</p> <input
              className='w-[16px] mt-1 sm:mt-0 sm:w-[20px]'
              id='sports'
              name='sports'
              onChange={handleChange}
              type="checkbox"
              value='sports' />
            
            
           
            
          </div>  <hr className="h-[2px] mt-1 bg-slate-300" />

          

          <p className='text-center mt-6 text-gray-900 font-bold'>Upload Your Car images (5 max)</p>
          <div className='mt-2 flex'>
           
            <input
              onChange={(e)=> setFiles(e.target.files)}
              className='p-1 sm:p-3 border border-gray-400 rounded w-full'
              type="file"
              id='images'
              accept='image/*'
              multiple />
            
            <button
                disabled={uploading}
              onClick={handleImageSubmit}
              type='button'
              className='p-1 sm:p-3 text-gray-900 border border-gray-700
                 rounded uppercase hover:shadow-lg disabled:opacity-80'>
               {uploading && files.length > 0 ? uploading : 'Upload'}
            </button>
          </div>

          

          

          <p className='text-red-700 text-sm'>{imageUploadError && imageUploadError}</p>
                  
                  {formData.images.length > 0 && formData.images.map((url, index) => (
                      <div key={index}  className='flex justify-between p-3 border items-center'>
                          <img src={url} alt="listing image" className='w-20 h-20 object-contain rounded-lg' />

                          <button onClick={()=>handleRemoveImage(index)}
                              type='button'
                              className='p-3
                           text-red-700 rounded-lg uppercase
                      hover:opacity-60 disabled:opacity-75'>Cancel</button>
                      </div>
                            
                        ))}




<button disabled={loading } className='p-2 mt-3 bg-slate-800 text-white rounded-lg
             uppercase hover:opacity-85 disabled:opacity-75 w-full'>{loading ? 'Creating...' : 'Create Listing'}</button>
                  {error && <p className='text-red-700 text-sm'>{ error}</p>}
        </div>
      </form>
    </main>
  )
}







































