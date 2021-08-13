import { useEffect, useState } from 'react';

const useGetTime = () => {
  const [date, setDate] = useState<{
    timezone: any;
    min: string;
    hrs: number;
  }>({ timezone: '', min: '', hrs: 0 });
  useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.datetime);
        const newDate = new Date(data.datetime);
        const newDateGroup = {
          timezone: data.abbreviation,
          min: ('0' + newDate.getMinutes()).slice(-2),
          hrs: newDate.getHours(),
        };
        setDate({ ...newDateGroup });
        console.log(date);
      })
      .catch((err) => console.error(err));
  }, []);
  return { date };
};

export default useGetTime;
