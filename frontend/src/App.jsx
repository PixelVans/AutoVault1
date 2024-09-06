// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './assets/pages/HomePage';
// import SignInPage from './assets/pages/SignInPage';
// import SignUpPage from './assets/pages/SignUpPage';
// import AboutPage from './assets/pages/AboutPage';
// import Header from './assets/pages/Header';
// import ProfilePage from './assets/pages/ProfilePage';
// import PrivateRoute from './components/privateRoute';
// import HomeRibbon from './assets/pages/HomeRibbon';
// import SellCar from './assets/pages/SellCar';
// import WishList from './assets/pages/WishList';
// import News from './assets/pages/News';

// import Settings from './assets/pages/Settings';
// import FaQ from './assets/pages/FaQ';
// import Help from './assets/pages/Help';
// import Notifications from './assets/pages/Notifications';
// import Categories from './assets/pages/Categories';
// import Listing from './assets/pages/Listing';
// import MyListings from './assets/pages/MyListings';
// import UpdateCarListing from './assets/pages/UpdateCarListing';
// import ViewCar from './assets/pages/ViewCar';
// import Search from './assets/pages/Search';
// import LandingPage from './assets/pages/LandingPage';

// export default function App() {
//   return (
   
//     <BrowserRouter>
      
//       <Header />
//       <HomeRibbon/>
//       <Routes>
//         <Route path="/" element={<LandingPage/>} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/sign-in" element={<SignInPage />} />
//         <Route path="/sign-up" element={<SignUpPage />} />
       
//         <Route path="/news" element={<News />} />
//         <Route path="/notifications" element={<Notifications />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/faq" element={<FaQ />} />
       
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/view/listing/:cid" element={<ViewCar />} />
       
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/listing/:listingId" element={<Listing />} />
//         <Route path="/search" element={<Search />} />
       
//         <Route path="/about" element={<AboutPage />} />
      
//          {/* Protected routes */}
//         <Route element={<PrivateRoute />}>
//           <Route path="/my-listings" element={<MyListings />} /> 
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/sell-car" element={<SellCar />} />
//           <Route path="/wish-list" element={<WishList />} />
//           <Route path="/update-listing/:id" element={<UpdateCarListing />} />
//         </Route>
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Home() {
//   return <h1>Home Page</h1>;
// }





import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import ViewCar from './assets/pages/ViewCar';
import Search from './assets/pages/Search';
import LandingPage from './assets/pages/LandingPage';

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWithConditionalHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FaQ />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/view/listing/:cid" element={<ViewCar />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/search" element={<Search />} />
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

// Component to handle conditional rendering of Header and HomeRibbon
function LayoutWithConditionalHeader() {
  const location = useLocation();
  const hideHeaderAndRibbonRoutes = ['/'];

  // Conditionally render the Header and HomeRibbon based on the current route
  if (!hideHeaderAndRibbonRoutes.includes(location.pathname)) {
    return (
      <>
        <Header />
        <HomeRibbon />
      </>
    );
  }
  return null;
}
