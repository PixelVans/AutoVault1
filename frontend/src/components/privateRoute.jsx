import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PrivateRoute () {
    
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
  };
  