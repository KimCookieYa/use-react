import { useState } from 'react';
import useInterval from '../packages/useInterval';

export default function Example12_useInterval() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>{count}</div>;
}
