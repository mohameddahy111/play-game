import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginNavbar from '../Navbar/LoginNavbar';

export default function LoginLayout() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#4183c6',
      },
      secondary: {
        main: '#f0c000',
      },
    },
  });
  return (
    <ThemeProvider theme={theme} >
    <CssBaseline/>
      <LoginNavbar />
      <Outlet></Outlet>
    </ThemeProvider>
  );
}
