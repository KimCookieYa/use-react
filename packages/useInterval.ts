import { useEffect } from 'react';

export default function useInterval(
  callback: () => void | Promise<void>,
  delay: number,
) {
  useEffect(() => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
}
