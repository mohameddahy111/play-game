import { Container, Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import heroImage from '../../img/gaming.ebaf2ffc84f4451d.jpg';

export default function EnterFace() {
  return (
    <>
      <Container>
        <Grid container spacing={1} mt={2}>
          <Grid item md={7} xs={12}>
            <img src={heroImage} alt='' width={'100%'} />
          </Grid>
          <Grid item md={5} xs={12}>
            <Outlet></Outlet>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
