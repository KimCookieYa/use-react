import { DependencyList, useEffect } from 'react';

export default function useAsyncEffect(
  effect: () => Promise<void | (() => void)>,
  deps?: DependencyList,
) {
  useEffect(() => {
    let cleanup: (() => void) | void;

    effect().then(result => {
      cleanup = result;
    });

    return () => {
      cleanup?.();
    };
  }, deps);
}