import { Add, WebAsset, Window } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewCard({ data, showMore, gridNumber }) {
  const navgiter = useNavigate();
  const viewDetlies = id => {
    navgiter(`/home/gameDetails/${id}`);
  };
  return (
    <>
      <Grid item md={gridNumber} xs={12} py={5} mt={4}>
        <Card sx={{
          height :'320px'
        }}
          onClick={() => {
            viewDetlies(data.id);
          }}
        >
          <CardActionArea>
            <CardMedia component={'img'} src={data.thumbnail} />
          </CardActionArea>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px',
            }}
          >
            <Typography>{data.title} </Typography>
            <Button variant='contained'>free</Button>
          </Box>
          {gridNumber < 4 && (
            <Box>
              <Typography component={'p'}>
                {data.short_description.split(' ').splice(0, 7).join(' ')}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  px: '10px',
                }}
              >
                <Add />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: '10px',
                    gap: '10px',
                  }}
                >
                  <Chip label={data.genre} />
                  {data.platform === 'PC (Windows)' ? <Window /> : <WebAsset />}
                </Box>
              </Box>
            </Box>
          )}
        </Card>
      </Grid>
    </>
  );
}
