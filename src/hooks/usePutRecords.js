import { useState } from 'react';
import axios from 'axios';
import useFetchRecords from './useFetchRecords';

const usePutRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { fetchData } = useFetchRecords(true);

  const changeRecord = (id, ...data) => {
    
    console.log(data)
    console.log(id)
    setLoading(true);
    axios.put(`records/${id}`, ...data).then((resp) => {
      setData(resp);
      fetchData();
      setLoading(false);
    });
  };

  return { changeRecord, data, loading, error };
};

export default usePutRecords;