import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import SelectList from './SelectList';
import data from '../../data/data';
import jwtDecode from 'jwt-decode';
import { UserAuth } from '../../contexts/AuthContext';
import style from '../Navbar/Navbar.module.scss'

export default function LoginNavbar() {
  const { logoutGoogle, userGoogle } = UserAuth();

  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState('');
  const getUserInfo = () => {
    if (localStorage.userInfo) {
      const user = jwtDecode(localStorage.userInfo);
      setUserInfo(user);
    } else {
      setUserInfo('');
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const logout = () => {
    logoutGoogle();
    localStorage.removeItem('userInfo');
    navigate('/');
  };
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
            <Box className={style.linkList}>
              <List
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}

              >
                <ListItem>
                  <Link to='/home'>Home</Link>
                </ListItem>
                <ListItem>
                  <Link to='/home/all'>All</Link>
                </ListItem>
                <ListItem>
                  <SelectList title={'platform'} data={data.Platform} />
                </ListItem>
                <ListItem>
                  <SelectList title={'sort-by'} data={data.sort} />
                </ListItem>
                <ListItem>
                  <SelectList title={'category'} data={data.Categories} />
                </ListItem>
              </List>
            </Box>
            <Box className={''}>
              <List                 sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
>
                <ListItem>
                  {userInfo ||
                    (userGoogle && (
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar alt='' src={userGoogle.photoURL} />
                        <Typography>
                          Hi ,{' '}
                          {userInfo.first_name
                            ? userInfo.first_name
                            : userGoogle.displayName
                            ? userGoogle.displayName
                            : ''}
                        </Typography>
                      </Box>
                    ))}
                </ListItem>
                <ListItem>
                  <Button
                    variant='outlined'
                    endIcon={<Logout />}
                    onClick={() => {
                      logout();
                    }}
                  >
                    log out
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
