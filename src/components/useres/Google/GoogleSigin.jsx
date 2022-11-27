import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../contexts/AuthContext';

export default function GoogleSigin() {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const signinGoogle = () => {
    googleSignIn();
    navigate('/home');
  };
  return (
    <>
      <Button
        startIcon={<Google />}
        fullWidth
        variant='contained'
        color='error'
        onClick={signinGoogle}
      >
        Google
      </Button>
    </>
  );
}
