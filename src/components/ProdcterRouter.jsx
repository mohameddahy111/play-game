import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

export default function ProdcterRouter({ children }) {
  const { userGoogle } = UserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.userInfo) {
      navigate('/');
    }
    if (!userGoogle ) {
      navigate('/');
    }
    else{
      navigate('/home')
    }
  }, [localStorage.userInfo, userGoogle]);

  return <>{children}</>;
}
