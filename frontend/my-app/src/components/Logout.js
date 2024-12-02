import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

   useEffect(() => {
    // Trigger the logout action and navigate to the login page
    dispatch(logout());
    navigate('/');
  }, [dispatch, navigate]);

  // Optionally, you can return null or some loading indicator
  return null;
};

export default LogoutButton;
