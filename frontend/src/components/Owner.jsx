import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify'; // Import toast for notifications
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';

export default function Contact({ listing }) {
  const [owner, setOwner] = useState(null);
  const userData = useSelector(state => state.user.userData);
  const [message, setMessage] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const form = useRef();

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const res = await fetch(`/auth/user/get-owner/${listing.owner}`);
        const data = await res.json();
        if (data && data.email) {
          setOwner(data);
          setOwnerEmail(data.email); // Set the owner email
        } else {
          console.error('Owner data is missing or email is not found');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchOwner();
  }, [listing.owner]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when sending starts

    // Send email using emailjs
    emailjs
      .send(
        'service_ny2amna', // Service ID
        'template_33m0hbo', // Template ID
        {
          from_name: 'Autovalt', // Static value for from_name
          to_email: ownerEmail, // Dynamic recipient email
          email: userData.email, // User's email address
          message: message // User's message
        },
        'oiK72QBsDA5cTM45w' // User ID
      )
      .then(
        () => {
          setLoading(false); // Set loading to false when sending completes
          toast.success(`Your message has been sent to ${owner.username}`);
          setMessage('');
        },
        (error) => {
          setLoading(false); // Set loading to false if there is an error
          toast.error('Failed to send your message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      {owner ? (
        <div className='flex flex-col gap-2'>
          <p>
            Contact <span className='font-semibold'>{owner.username}</span>{' '}
            for{' '}
            <span className='font-semibold'>{listing.title}</span>
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}>
            <textarea
              id='message'
              rows='2'
              value={message}
              onChange={onChange}
              placeholder='Enter your message here...'
              className='w-full border p-3 rounded-lg'
            ></textarea>
            <button
              type='submit'
              disabled={loading} // Disable button when loading
              className={`bg-slate-700 text-white text-center p-2 sm:p-3 uppercase rounded-lg hover:opacity-95 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message'} {/* Show loading text */}
            </button>
          </form>
        </div>
      ) : (
        <p>Loading...</p> // Optionally, display a loading message while fetching owner data
      )}
    </>
  );
}
