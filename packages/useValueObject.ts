import { useState, useMemo } from 'react';

export default function useValueObject<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue);

  return useMemo(
    () => ({
      value,
      setValue,
    }),
    [value],
  );
}
