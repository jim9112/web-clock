import useFetch from '../hooks/useFetch';
import Image from 'next/image';
import refreshIcon from '../public/assets/desktop/icon-refresh.svg';

interface IData {
  getData: () => void;
  fetchedData: {
    content?: string;
    author?: string;
  };
}

const QuoteComp = () => {
  // i suck at this
  const { getData, fetchedData }: IData = useFetch(
    'https://api.quotable.io/random'
  );
  return (
    <div className="grid grid-flow-col gap-4 text-white">
      <div>
        {' '}
        <h1 className="mb-2">{`"${fetchedData?.content}"`}</h1>
        <p>{fetchedData.author}</p>
      </div>
      <div>
        <Image
          className="cursor-pointer"
          height="18px"
          width="18px"
          src={refreshIcon}
          alt="refresh icon"
          onClick={getData}
        />
      </div>
    </div>
  );
};

export default QuoteComp;
