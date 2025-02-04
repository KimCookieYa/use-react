import useFetchUrl from '../packages/useFetchUrl';

export default function Exampele() {
  const { data, isLoading, isSuccess, isError, error, refetch } = useFetchUrl({
    fetchUrl: 'https://jsonplaceholder.typicode.com/posts/1',
  });

  return <div>Example1</div>;
}
