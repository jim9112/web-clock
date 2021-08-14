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
    <div className='w-full bg-gray-300 px-6 py-12'>
      <ul className='grid gap-4'>
        <ExpandedViewItem
          title='CURRENT TIMEZONE'
          content={date.fullTimezone}
        />
        <ExpandedViewItem title='DAY OF THE YEAR' content={date.dayOfYear} />
        <ExpandedViewItem title='DAY OF THE WEEK' content={date.dayOfWeek} />
        <ExpandedViewItem title='WEEK NUMBER' content={date.weekNumber} />
      </ul>
    </div>
  );
};

export default ExpandedView;
