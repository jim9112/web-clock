import { useEffect, useState } from 'react';

const useGetTime = () => {
  const [date, setDate] = useState<{
    timezone: any;
    min: string;
    hrs: number;
    dayOfWeek: number;
    dayOfYear: number;
    weekNumber: number;
    fullTimezone: string;
  }>({
    timezone: '',
    min: '',
    hrs: 0,
    dayOfWeek: 0,
    dayOfYear: 0,
    weekNumber: 0,
    fullTimezone: '',
  });
  useEffect(() => {
    fetch('http://worldtimeapi.org/api/ip')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        const newDate = new Date(data.datetime);
        const newDateGroup = {
          timezone: data.abbreviation,
          min: ('0' + newDate.getMinutes()).slice(-2),
          hrs: newDate.getHours(),
          dayOfWeek: data.day_of_week,
          dayOfYear: data.day_of_year,
          weekNumber: data.week_number,
          fullTimezone: data.timezone,
        };
        setDate({ ...newDateGroup });
        console.log(date);
      })
      .catch((err) => console.error(err));
  }, []);
  return { date };
};

export default useGetTime;
