import { useState } from 'react';
import useAsyncEffect from '../packages/useAsyncEffect';

export default function Example4_useAsyncEffect() {
  const [count, setCount] = useState(0);

  useAsyncEffect(async () => {
    console.log('effect');
    await sleep(1000);
    console.log('effect done');
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Example4_useAsyncEffect
      </button>
      <div>{count}</div>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
