import Image from 'next/image';
import sunIcon from '../public/assets/desktop/icon-sun.svg';
import moonIcon from '../public/assets/desktop/icon-moon.svg';
import MoreButton from './MoreButton';
import ExpandedView from './ExpandedView';
import useFetch from '../hooks/useFetch';

interface IDate {
  toggleDisplay: () => void;
  setDarkMode: any;
  displayMore: boolean;
  date: {
    hrs: number;
    min: string;
    timezone: string;
    dayOfWeek: number;
    dayOfYear: number;
    weekNumber: number;
    fullTimezone: string;
  };
}

interface ILocation {
  getData: () => void;
  fetchedData: {
    region_name?: string;
    country_code?: string;
  };
}

const TimeBlock = ({
  date,
  toggleDisplay,
  setDarkMode,
  displayMore,
}: IDate) => {
  // get location based on IP address from API
  const { fetchedData }: ILocation = useFetch('https://freegeoip.app/json/');

  let icon;
  let greeting;

  // end of all greetings except on mobile
  const greetingAddOn = (
    <span className='hidden md:inline'>, IT&apos;S CURRENTLY</span>
  );

  // determine which icon to use based on time of day
  if (date.hrs < 16 && date.hrs > 5) {
    icon = <Image src={sunIcon} alt='sun icon' />;
  } else {
    icon = <Image src={moonIcon} alt='moon icon' />;
  }

  // determine which greeting to use based on time of day
  if (date.hrs >= 5 && date.hrs < 12) {
    greeting = <p>GOOD MORNING</p>;
  } else if (date.hrs >= 12 && date.hrs < 16) {
    greeting = <p>GOOD AFTERNOON</p>;
  } else {
    greeting = <p>GOOD EVENING</p>;
  }

  return (
    <div className='self-end'>
      <div className='px-6 pb-10'>
        <div className='flex text-white mb-4'>
          <span className='mr-4'>{icon}</span>
          <span>
            {greeting}
            {greetingAddOn}
          </span>
        </div>
        <div className='flex items-end text-white align-baseline mb-4'>
          <p className='text-8xl font-bold'>
            {date ? `${date.hrs}:${date.min}` : 'Loading'}
          </p>
          <p className=''>{date && date.timezone}</p>
        </div>
        <div className='mb-4'>
          <p className='font-bold, text-white text-base'>{`IN ${fetchedData.region_name?.toUpperCase()}, ${
            fetchedData.country_code
          }`}</p>
        </div>
        <MoreButton toggleDisplay={toggleDisplay} />
      </div>
      {displayMore && <ExpandedView date={date} />}
    </div>
  );
};

export default TimeBlock;
