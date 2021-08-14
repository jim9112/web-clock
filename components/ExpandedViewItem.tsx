interface CompProps {
  title: string;
  content: string | number;
}

const ExpandedViewItem = ({ title, content }: CompProps) => {
  return (
    <li className='grid grid-flow-col items-center'>
      <span className='text-xs'>{title} </span>
      <span className='justify-self-end text-xl'>{content}</span>
    </li>
  );
};

export default ExpandedViewItem;
