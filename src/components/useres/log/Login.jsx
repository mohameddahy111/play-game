import React, { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { Triangle } from 'react-loader-spinner';
import { Google } from '@mui/icons-material';
import { UserAuth } from '../../../contexts/AuthContext';
import GoogleSigin from '../Google/GoogleSigin';

export default function Login() {
  const [state, setState] = useState('');
  const { googleSignIn } = UserAuth();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string('enter your mail')
      .email('email vild')
      .required('emil is required'),
    password: yup
      .string('enter your password')
      .min(8, 'password vild')
      .required('password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      logInfun(values);
    },
  });
  const logInfun = async values => {
    setLoading(true);
    const { data } = await axios.post(
      'https://route-egypt-api.herokuapp.com/signin',
      values
    );
    if (data.message === 'success') {
      enqueueSnackbar('You are Login , wellcome', { variant: 'success' });
      localStorage.setItem('userInfo', data.token);
      navigate('/home');
      setLoading(false);
    } else {
      enqueueSnackbar(`${data.message}`, { variant: 'error' });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <List>
        <ListItem>
          <TextField
            fullWidth
            inputProps={{ type: 'text' }}
            name='email'
            label='E-mail'
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            onChange={formik.handleChange}
            helperText={formik.touched.email && formik.errors.email}
          />
        </ListItem>
        <ListItem>
          <TextField
            fullWidth
            inputProps={{ type: 'password' }}
            label='password'
            name='password'
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
          />
        </ListItem>
        <ListItem>
          <Button fullWidth variant='contained' type='submit'>
            {loading ? (
              <Triangle
                width='30'
                height='30'
                color='#f0c000'
                ariaLabel='triangle-loading'
                wrapperStyle={{}}
                wrapperClassName=''
                visible={true}
              />
            ) : (
              ' Log in'
            )}
          </Button>
        </ListItem>
        <ListItem>
          <Typography align='center'>
            I'm Not member?<Link to='/register'>Register</Link>
          </Typography>
        </ListItem>
        <Divider textAlign='center'>Sigin with Google</Divider>
        <ListItem>
        <GoogleSigin/>
        </ListItem>
      </List>
    </form>
  );
}
