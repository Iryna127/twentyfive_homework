import { useState } from "react";
import axios from 'axios';
import useFetchRecords from "./useFetchRecords";

const useAddRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { fetchData } = useFetchRecords(true);

  const addRecord = (newUser) => {
    console.log(data, newUser)
    setLoading(true);
    axios.post('records/', newUser).then((resp) => {
      setData(resp);
      fetchData();
      setLoading(false);
    });
  }

  return { addRecord, data, loading, error };
};

export default useAddRecords;
