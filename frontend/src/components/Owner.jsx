import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [owner, setOwner] = useState(null);
  const [message, setMessage] = useState('');
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const res = await fetch(`/auth/user/get-owner/${listing.owner}`);
        const data = await res.json();
        setOwner(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOwner();
  }, [listing.owner]);
  return (
    <>
      {owner && (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{owner.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.title}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <Link
          to={`mailto:${owner.email}?subject=Regarding ${listing.title}&body=${message}`}
          className='bg-slate-700 text-white text-center p-2 sm:p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message          
          </Link>
        </div>
      )}
    </>
  );
}