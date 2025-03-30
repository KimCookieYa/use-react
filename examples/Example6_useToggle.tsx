import useToggle from '../packages/useToggle';

export default function Example6_useToggle() {
  const [value, toggle] = useToggle(false);
  return (
    <div>
      <div>{value ? 'true' : 'false'}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
