import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import useFetchData from '../../Hooks/useFetchData';
import Loading from '../Loading/Loading';
import Contant from './Contant';
import HeroSection from './HeroSection';

export default function Home() {
  const [showNumber, setShowNumber] = useState(3);
  const allGames =
    'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const { data,  loading } = useFetchData(allGames);
  const showMore = e => {
    if (e === 'SHOW MORE') {
      setShowNumber(showNumber + 20);
    } else {
      setShowNumber(20);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection showMore={showMore} />
          <Contant data={data} showNumber={showNumber} showMore={showMore} />
          <Box sx={{ display: 'flex', justifyContent: 'center', py: '20px' }}>
            <Button
              onClick={e => {
                showMore(e.target.innerText);
              }}
              variant='outlined'
            >
              Show more
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
