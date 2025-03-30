import usePlatform from '../packages/usePlatform';

export default function Example9_usePlatform() {
  const { platform, isIOS, isAndroid, isUnknown } = usePlatform();
  return (
    <div>
      <div>{platform}</div>
      <div>{isIOS ? 'IOS' : 'Android'}</div>
      <div>{isUnknown ? 'Unknown' : 'Known'}</div>
    </div>
  );
}
