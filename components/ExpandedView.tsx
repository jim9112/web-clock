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
    <div className='w-full bg-gray-300'>
      <ul>
        <li>
          CURRENT TIMEZONE <span>{date.fullTimezone}</span>
        </li>
        <li>
          DAY OF THE YEAR <span>{date.dayOfYear}</span>
        </li>
        <li>
          DAY OF THE WEEK <span>{date.dayOfWeek}</span>
        </li>
        <li>
          WEEK NUMBER <span>{date.weekNumber}</span>
        </li>
      </ul>
    </div>
  );
};

export default ExpandedView;
