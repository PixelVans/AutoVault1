import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import SignInPage from './assets/pages/SignInPage';
import SignUpPage from './assets/pages/SignUpPage';
import AboutPage from './assets/pages/AboutPage';
import Header from './assets/pages/Header';
import ProfilePage from './assets/pages/ProfilePage';
import PrivateRoute from './components/privateRoute';

export default function App() {
  return (
   
    <BrowserRouter>
         <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
       
        <Route path="/about" element={<AboutPage />} />
      
         {/* Protected routes */}
         <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}
