import { useEffect } from 'react';

export default function useAsyncEffect(
  effect: () => Promise<void>,
  deps: React.DependencyList,
) {
  useEffect(() => {
    const asyncEffect = async () => {
      await effect();
    };
    asyncEffect();
  }, deps);
}
