import { useEffect, useState } from 'react';

const useFetch = (endpoint: string) => {
  const [fetchedData, setFetchedData] = useState({});
  const getData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setFetchedData(data);
    console.log(data.content);
  };

  useEffect(() => {
    getData();
  }, []);

  return { getData, fetchedData };
};

export default useFetch;
