import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchData = (url, params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function getData() {
    return await axios.get(url, {
      params: params
        ? {
            id: params.id,
            platform: params.platform,
            category: params.category,
            'sort-by': params.sort,
          }
        : null,
      headers: {
        'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    });
  }
  useEffect(() => {
    getData()
      .then(res => {
        setData(res.data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [params]);
  return { data, error, loading };
};
export default useFetchData;
