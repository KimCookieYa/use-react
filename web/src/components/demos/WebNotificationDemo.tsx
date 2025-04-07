import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// 패키지 경로 수정 필요
// 실제 프로젝트에서는 import { useWebNotification } from '@kimcookieya/use-react';
// 데모에서는 훅 코드를 직접 포함시킴

// useWebNotification 훅 구현 (데모 목적으로 인라인 구현)
const useWebNotification = (autoRequest = true) => {
  const [permission, setPermission] =
    useState<NotificationPermission>('default');
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const isSupported = typeof window !== 'undefined' && 'Notification' in window;
  const permissionGranted = permission === 'granted';

  // 권한 요청 함수
  const ensurePermissions = async () => {
    if (!isSupported) return undefined;

    if (permission === 'granted') return true;

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result === 'granted';
    } catch (error) {
      console.error('Failed to request notification permission:', error);
      return false;
    }
  };

  // 알림 표시 함수
  const show = (title: string, options?: NotificationOptions) => {
    if (!isSupported) {
      console.warn('Web Notification is not supported in this browser.');
      return undefined;
    }

    if (permission !== 'granted') {
      console.warn('Notification permission is not granted.');
      return undefined;
    }

    try {
      const notification = new Notification(title, options);
      setNotifications((prev) => [...prev, notification]);

      notification.addEventListener('close', () => {
        setNotifications((prev) => prev.filter((n) => n !== notification));
      });

      return notification;
    } catch (error) {
      console.error('Failed to create notification:', error);
      return undefined;
    }
  };

  // 특정 알림 닫기
  const close = (notification?: Notification) => {
    if (notification) {
      notification.close();
      setNotifications((prev) => prev.filter((n) => n !== notification));
    }
  };

  // 모든 알림 닫기
  const closeAll = () => {
    notifications.forEach((notification) => notification.close());
    setNotifications([]);
  };

  React.useEffect(() => {
    if (isSupported) {
      setPermission(Notification.permission);

      if (autoRequest && Notification.permission === 'default') {
        ensurePermissions();
      }
    }

    return () => {
      closeAll();
    };
  }, []);

  return {
    isSupported,
    show,
    close,
    closeAll,
    ensurePermissions,
    permission,
    permissionGranted,
  };
};

// BrowserOnly로 감싸서 서버 사이드 렌더링 중 오류 방지
const WebNotificationContent = () => {
  const {
    isSupported,
    show,
    closeAll,
    ensurePermissions,
    permission,
    permissionGranted,
  } = useWebNotification(false); // 자동 권한 요청 비활성화

  const [message, setMessage] = useState('');

  const handleShowNotification = async () => {
    // 권한이 없으면 요청
    if (!permissionGranted) {
      const granted = await ensurePermissions();
      if (!granted) {
        setMessage(
          '알림 권한이 필요합니다. 브라우저 설정에서 권한을 허용해주세요.',
        );
        return;
      }
    }

    // 알림 표시
    show('새 메시지가 도착했습니다.', {
      body: '홍길동님으로부터 새 메시지가 도착했습니다.',
      icon: '/img/logo.svg',
    });

    setMessage('알림이 성공적으로 표시되었습니다!');
  };

  if (!isSupported) {
    return (
      <div className="notification-demo error">
        이 브라우저는 웹 알림을 지원하지 않습니다.
      </div>
    );
  }

  return (
    <div className="notification-demo">
      <div className="notification-status">
        현재 알림 권한 상태: <strong>{permission}</strong>
      </div>

      <div className="notification-buttons">
        <button
          className="button button--primary"
          onClick={handleShowNotification}>
          알림 표시
        </button>

        <button className="button button--secondary" onClick={closeAll}>
          모든 알림 닫기
        </button>
      </div>

      {message && <div className="notification-message">{message}</div>}

      <style>{`
        .notification-demo {
          border: 1px solid var(--ifm-color-emphasis-300);
          border-radius: var(--ifm-card-border-radius);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .notification-demo.error {
          border-color: var(--ifm-color-danger-dark);
          background-color: var(--ifm-color-danger-contrast-background);
          color: var(--ifm-color-danger-dark);
        }
        
        .notification-status {
          margin-bottom: 1rem;
        }
        
        .notification-buttons {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .notification-message {
          padding: 0.75rem;
          background: var(--ifm-color-emphasis-100);
          border-radius: var(--ifm-card-border-radius);
        }
      `}</style>
    </div>
  );
};

// 이 컴포넌트는 브라우저에서만 렌더링됩니다
export default function WebNotificationDemo() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <WebNotificationContent />}
    </BrowserOnly>
  );
}
