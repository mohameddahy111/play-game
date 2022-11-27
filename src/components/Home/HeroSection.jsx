import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import style from './heroSection.module.scss';

export default function HeroSection({ showMore }) {
  return (
    <Box className={style.HeroSection}>
      <Typography component={'h1'} variant={'h3'} align='center'>
        Find & track the best <span>free-to-play </span> games!
      </Typography>
      <Typography>
        Track what you've played and search for what to play next! Plus get free
        premium loot!
      </Typography>
      <Button
        onClick={e => {
          showMore(e.target.innerText);
        }}
        variant='outlined'
      >
        browse games
      </Button>
    </Box>
  );
}
