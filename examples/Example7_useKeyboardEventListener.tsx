import useKeyboardEventListener from '../packages/useKeyboardEventListener';

export default function Example7_useKeyboardEventListener() {
  useKeyboardEventListener('a', () => {
    console.log('a');
  });
  return <div>Example7_useKeyboardEventListener</div>;
}
