import useFetch from '../packages/useFetch';

export default function Exampele({ orderId }: { orderId: number | null }) {
  const { data, isLoading, isSuccess, isError, error, refetch } = useFetch({
    fetchFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      const data = await response.json();
      return data;
    },
    enabled: orderId !== null,
  });

  return <div>Order ID: {orderId}</div>;
}
