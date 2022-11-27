import { Button, List, ListItem, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Register.module.scss';
import * as yup from 'yup';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { Triangle } from 'react-loader-spinner';

export default function Register() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    first_name: yup
      .string('enter your name')
      .min(3, 'must by more then 3')
      .required('name is required'),
    last_name: yup
      .string('enter your last name')
      .min(3, 'must by more then 3')
      .required('name is required'),
    email: yup
      .string('enter your mail')
      .email('email vild')
      .required('emil is required'),
    password: yup
      .string('enter your password')
      .min(8, 'password vild')
      .required('password is required'),
    age: yup
      .number('enter your age')
      .min(14, 'age vild')
      .required('age is required'),
  });
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      age: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      registerAccount(values);
    },
  });
  const registerAccount = async values => {
    setLoading(true);
    const { data } = await axios.post(
      'https://route-egypt-api.herokuapp.com/signup',
      values
    );
    if (data.message === 'success') {
      enqueueSnackbar('Your Register is done', { variant: 'success' });
      navigate('/');
      setLoading(false);
    } else {
      enqueueSnackbar(`${data.errors.email.message}`, { variant: 'error' });
      console.log(data);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <List className={style.info}>
        <ListItem className={style.inputName}>
          <TextField
            fullWidth
            inputProps={{ type: 'text' }}
            label='First Name'
            name='first_name'
            value={formik.values.first_name}
            error={
              formik.touched.first_name && Boolean(formik.errors.first_name)
            }
            onChange={formik.handleChange}
            helperText={formik.touched.first_name && formik.errors.first_name}
          />
          <TextField
            fullWidth
            inputProps={{ type: 'text' }}
            label='Last Name'
            name='last_name'
            value={formik.values.last_name}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            onChange={formik.handleChange}
            helperText={formik.touched.last_name && formik.errors.last_name}
          />
        </ListItem>
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
          <TextField
            fullWidth
            inputProps={{ type: 'text' }}
            label='Age'
            name='age'
            value={formik.values.age}
            error={formik.touched.age && Boolean(formik.errors.age)}
            onChange={formik.handleChange}
            helperText={formik.touched.age && formik.errors.age}
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
              "Create Account"
            )}

          </Button>
        </ListItem>
        <ListItem>
          <Typography >
            This site is protected by reCAPTCHA and the Google{' '}
            <Link to='/'>Privacy Policy</Link>
            and <Link to='/'>Terms of Service</Link> apply.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography align='center'>
            Already a member?<Link to='/'>Log In</Link>
          </Typography>
        </ListItem>
      </List>
    </form>
  );
}
