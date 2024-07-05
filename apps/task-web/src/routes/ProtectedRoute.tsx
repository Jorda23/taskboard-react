import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const ProtectedRoute: React.FC = () => {

  const token = localStorage.getItem('auth-token');


  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
