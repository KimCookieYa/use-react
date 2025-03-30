import { useState } from "react";
import useLockScroll from "../packages/useLockScroll";

export default function Example5_useLockScroll() {
  const [isLocked, setIsLocked] = useState(false);
  useLockScroll(isLocked);
  return (
    <div>
      <button onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? 'Unlock' : 'Lock'}
      </button>
    </div>
  );
}
