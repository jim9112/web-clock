interface IDate {
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

const ExpandedView = ({ date }: IDate) => {
  return (
    <div className='w-full bg-gray-300 px-6 py-12'>
      <ul>
        <li className='grid grid-flow-col items-center'>
          <span className='text-xs'>CURRENT TIMEZONE </span>
          <span className='justify-self-end text-xl'>{date.fullTimezone}</span>
        </li>
        <li className='grid grid-flow-col items-center'>
          <span className='text-xs'>DAY OF THE YEAR</span>
          <span className='justify-self-end text-xl'>{date.dayOfYear}</span>
        </li>
        <li className='grid grid-flow-col items-center'>
          <span className='text-xs'>DAY OF THE WEEK</span>
          <span className='justify-self-end text-xl'>{date.dayOfWeek}</span>
        </li>
        <li className='grid grid-flow-col items-center'>
          <span className='text-xs'>WEEK NUMBER</span>{' '}
          <span className='justify-self-end text-xl'>{date.weekNumber}</span>
        </li>
      </ul>
    </div>
  );
};

export default ExpandedView;
