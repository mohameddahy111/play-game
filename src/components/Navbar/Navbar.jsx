import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import style from '../Navbar/Navbar.module.scss';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{ backgroundColor: '#272b30' }}>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt='' width={100} />
              <Typography component={'h1'}>Game Over</Typography>
            </Box>
            <Box className={style.linkes}>
              <List>
                <ListItem>
                  <Link to=''>Login</Link>
                </ListItem>
                <ListItem>
                  <Link to='/register'>Login Free</Link>
                </ListItem>
              </List>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
