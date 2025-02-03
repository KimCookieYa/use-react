import { useEffect, useState } from 'react';

export default function Exampele() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <div>Example1</div>;
}
