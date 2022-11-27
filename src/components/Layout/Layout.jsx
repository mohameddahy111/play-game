import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
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
      <Navbar />
      <Outlet></Outlet>
    </ThemeProvider>
  );
}
