import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import SignInPage from './assets/pages/SignInPage';
import SignUpPage from './assets/pages/SignUpPage';
import AboutPage from './assets/pages/AboutPage';
import Header from './assets/pages/Header';
import ProfilePage from './assets/pages/ProfilePage';
import PrivateRoute from './components/privateRoute';
import HomeRibbon from './assets/pages/HomeRibbon';
import SellCar from './assets/pages/SellCar';
import WishList from './assets/pages/WishList';
import News from './assets/pages/News';

import Settings from './assets/pages/Settings';
import FaQ from './assets/pages/FaQ';
import Help from './assets/pages/Help';
import Notifications from './assets/pages/Notifications';
import Categories from './assets/pages/Categories';
import Listing from './assets/pages/Listing';
import MyListings from './assets/pages/MyListings';
import UpdateCarListing from './assets/pages/UpdateCarListing';

export default function App() {
  return (
   
    <BrowserRouter>
      <Header />
      <HomeRibbon/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
       
        <Route path="/news" element={<News />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FaQ />} />
       
        <Route path="/settings" element={<Settings />} />
       
        <Route path="/categories" element={<Categories />} />
        <Route path="/listing/:listingId" element={<Listing />} />
       
        <Route path="/about" element={<AboutPage />} />
      
         {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/my-listings" element={<MyListings />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sell-car" element={<SellCar />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/update-listing/:id" element={<UpdateCarListing />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}
