interface CompProps {
  title: string;
  content: string | number;
  order: string;
}

const ExpandedViewItem = ({ title, content, order }: CompProps) => {
  return (
    <li className={`grid grid-flow-col sm:grid-flow-row items-center ${order}`}>
      <span className='text-xs'>{title} </span>
      <span className='justify-self-end sm:justify-self-start font-bold text-xl sm:text-4xl'>
        {content}
      </span>
    </li>
  );
};

export default ExpandedViewItem;
