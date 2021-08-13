import Image from 'next/image';
import sunIcon from '../public/assets/desktop/icon-sun.svg';
import moonIcon from '../public/assets/desktop/icon-moon.svg';
import MoreButton from './MoreButton';

interface IDate {
  toggleDisplay: () => void;
  date: {
    hrs: number;
    min: string;
    timezone: string;
  };
}

const TimeBlock = ({ date, toggleDisplay }: IDate) => {
  let icon;
  let greeting;

  // end off all greetings except on mobile
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
      <div className='px-6'>
        <div className='flex text-white'>
          {icon}
          {greeting}
          {greetingAddOn}
        </div>
        <div className='flex items-end text-white align-baseline'>
          <p className='text-8xl'>
            {date ? `${date.hrs}:${date.min}` : 'Loading'}
          </p>
          <p className=''>{date && date.timezone}</p>
        </div>
        <MoreButton toggleDisplay={toggleDisplay} />
      </div>
    </div>
  );
};

export default TimeBlock;
