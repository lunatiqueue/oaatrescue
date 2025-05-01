import React from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Not logged in → send to login page
    return <Navigate to="/login" replace />;
  }
  return children;
};
