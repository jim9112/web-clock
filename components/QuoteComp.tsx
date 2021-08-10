import useFetch from '../hooks/useFetch';

interface IData {
  getData: () => void;
  fetchedData: {
    content?: string | null;
    author?: string | null;
  };
}

const QuoteComp = () => {
  const { getData, fetchedData }: IData = useFetch(
    'https://api.quotable.io/random'
  );
  return (
    <div>
      {' '}
      <h1>{fetchedData?.content}</h1>
      <p>{fetchedData.author}</p>
    </div>
  );
};

export default QuoteComp;
