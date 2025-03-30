import useValueObject from '../packages/useValueObject';

export default function Example8_useValueObject() {
  const valueObject = useValueObject('asdf');
  return (
    <div>
      <div>{valueObject.value}</div>
      <button onClick={() => valueObject.setValue('qwer')}>Set Value</button>
    </div>
  );
}
