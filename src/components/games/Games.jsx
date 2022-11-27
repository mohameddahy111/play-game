import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../Hooks/useFetchData';
import Contant from '../Home/Contant';
import Loading from '../Loading/Loading';

export default function Games() {
  const params = useParams();
  const allGames =
    'https://free-to-play-games-database.p.rapidapi.com/api/games';

  const { data, loading } = useFetchData(allGames, params);
  return (
    <>
      {loading ? <Loading /> : <Contant data={data} showNumber={data.length} />}
    </>
  );
}
