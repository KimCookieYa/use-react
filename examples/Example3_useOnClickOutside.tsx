import { useRef } from 'react';
import useOnClickOutside from '../packages/useOnClickOutside';

export default function Example3_useOnClickOutside() {
  const ref = useRef<HTMLButtonElement>(null);
  useOnClickOutside(ref, () => {
    console.log('clicked outside');
  });
  return (
    <div>
      <button ref={ref}>Example3_useOnClickOutside</button>
      <div>Example3_useOnClickOutside</div>
    </div>
  );
}
