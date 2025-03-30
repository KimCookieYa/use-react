import { useWebNotification } from '../packages/useWebNotification';

export default function Example11_useWebNotification() {
  const { show, close, closeAll, permission, permissionGranted } =
    useWebNotification();

  const handleClick = () => {
    show('Hello, world!');
  };

  const handleClose = () => {
    close();
  };

  const handleCloseAll = () => {
    closeAll();
  };

  return (
    <div>
      <button onClick={handleClick}>Show Notification</button>
      <button onClick={handleClose}>Close Notification</button>
      <button onClick={handleCloseAll}>Close All Notifications</button>
      <div>{permission}</div>
      <div>{permissionGranted ? 'Granted' : 'Not Granted'}</div>
    </div>
  );
}
