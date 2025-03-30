import { RefObject, useEffect } from 'react';

export default function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // ref.current가 없거나, 클릭한 대상이 ref 내부에 있다면 아무 작업도 수행하지 않음
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    // mousedown, touchstart 이벤트를 감지
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // 컴포넌트 unmount 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
