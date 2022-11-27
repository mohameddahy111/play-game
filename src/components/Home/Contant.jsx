import { SmartToy } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ViewCard from './ViewCard';

export default function Contant({ data , showMore ,showNumber }) {
  const [gridNumber, setGridNumber] = useState(4);
  useEffect(() => {
    if (showNumber > 3) {
      setGridNumber(3);
    }
  }, [showNumber]);
  return (
    <Box pt={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <SmartToy />
        <Typography component={'h3'} variant={'h5'}>
          Personalized Recommendations
        </Typography>
      </Box>
      <Box>
        <Container>
          <Grid container spacing={1}>
            {data
              ?.slice(0, showNumber > data.length ? data.length : showNumber)
              .map(x => (
                <ViewCard
                  key={x.id}
                  data={x}
                  showMore={showMore}
                  gridNumber={gridNumber}
                />
              ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
