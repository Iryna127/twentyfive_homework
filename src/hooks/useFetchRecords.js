import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { RecordsDataContext } from '../providers/recordDataProvider';

const useFetchRecords = (isManual = false) => {
  /* const [data, setData] = useState(null); */
  const recordsCtx = useContext(RecordsDataContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!isManual) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
       const data = await axios.get('records/')
      recordsCtx.setRecords(data);
      console.log(data)
      setLoading(false);
    } catch (err) {
      console.log(err)
    };
  };
  return { data: recordsCtx.records, loading, error, fetchData };
};

export default useFetchRecords;
