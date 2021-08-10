import useFetch from '../hooks/useFetch';

interface IData {
  getData: () => void;
  fetchedData: {
    content?: string | null;
  };
}

const QuoteComp = () => {
  const { getData, fetchedData }: IData = useFetch(
    'https://api.quotable.io/random'
  );
  return <div>{fetchedData && <h1>{fetchedData?.content}</h1>}</div>;
};

export default QuoteComp;
