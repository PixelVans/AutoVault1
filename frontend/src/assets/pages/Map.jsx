import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../index.css';

const libraries = ['places'];
const mapContainerStyle = {
  height: '190px',
  width: '300px',
};

const defaultCenter = {
  lat: -1.286389, // Latitude for Nairobi, Kenya
  lng: 36.817223, // Longitude for Nairobi, Kenya
};

const companyLocation = {
  lat: -1.286389, // Latitude for your company location
  lng: 36.817223, // Longitude for your company location
};

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);

  // Get user location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleNavigate = () => {
    if (userLocation) {
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${companyLocation.lat},${companyLocation.lng}`;
      window.open(directionsUrl, '_blank');
    } else {
      alert('User location is not available.');
    }
  };

  return (
    <div>
      <div>
        <button className='text-white hidden bg-green-600 rounded-lg p-2' onClick={handleNavigate}>Navigate</button>
      </div>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_AUTOVAULT1_GOOGLE_MAPS_API_KEY} // Use your API key
        libraries={libraries}
      > 
      
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={15}
          onLoad={map => setMap(map)}
        >
          {/* Marker for company location */}
          <Marker position={companyLocation} />

          {/* Marker for user location */}
          {userLocation && <Marker position={userLocation} />}
          </GoogleMap>
         
      </LoadScript>
    </div>
  );
};

export default Map;
