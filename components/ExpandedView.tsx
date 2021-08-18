import ExpandedViewItem from './ExpandedViewItem';

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
    <div className='w-full bg-gray-300 px-6 sm:px-16 lg:px-40 py-12'>
      <ul className='grid sm:grid-cols-2 gap-4 sm:gap-x-20'>
        <ExpandedViewItem
          title='CURRENT TIMEZONE'
          content={date.fullTimezone}
          order='sm:order-1'
        />
        <ExpandedViewItem
          title='DAY OF THE YEAR'
          content={date.dayOfYear}
          order='sm:order-3'
        />
        <ExpandedViewItem
          title='DAY OF THE WEEK'
          content={date.dayOfWeek}
          order='sm:order-2'
        />
        <ExpandedViewItem
          title='WEEK NUMBER'
          content={date.weekNumber}
          order='sm:order-4'
        />
      </ul>
    </div>
  );
};

export default ExpandedView;
