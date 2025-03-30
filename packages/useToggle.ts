import { useState } from 'react';

export default function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);
  return [value, () => setValue(!value)] as const;
}
