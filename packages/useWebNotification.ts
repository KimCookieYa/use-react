import { useCallback, useEffect, useRef, useState } from 'react';

export type UseWebNotificationShow = (
  title: string,
  options?: NotificationOptions,
) => Notification | undefined;

export interface UseWebNotificationReturn {
  isSupported: boolean /** 브라우저가 Notification API를 지원하는지 여부 */;
  show: UseWebNotificationShow;
  close: (notification?: Notification) => void;
  closeAll: () => void;
  ensurePermissions: () => Promise<
    boolean | undefined
  > /** 권한을 요청하는 함수, true(권한 허용) 또는 false(거부) 반환 */;
  permission: NotificationPermission /** 현재 알림 권한 상태 */;
  permissionGranted: boolean /** 알림 권한이 granted인지 여부 */;
}

export function useWebNotification(
  autoRequest = true,
): UseWebNotificationReturn {
  const isSupported = typeof window !== 'undefined' && 'Notification' in window;
  const notificationsRef = useRef<Set<Notification>>(new Set());
  const [permission, setPermission] = useState<NotificationPermission>(
    isSupported ? Notification.permission : 'default',
  );
  const permissionGranted = permission === 'granted';

  // 권한 변경 감지
  useEffect(() => {
    if (!isSupported) return;

    const updatePermission = () => {
      setPermission(Notification.permission);
    };

    // 최신 브라우저에서 권한 변경을 감지
    if ('permissions' in navigator && navigator.permissions) {
      navigator.permissions
        .query({ name: 'notifications' as PermissionName })
        .then((status) => {
          status.addEventListener('change', updatePermission);
          return () => {
            status.removeEventListener('change', updatePermission);
          };
        })
        .catch((error) => {
          console.error('Failed to query notification permission:', error);
        });
    }
  }, [isSupported]);

  // 권한 요청 함수
  const ensurePermissions = useCallback((): Promise<boolean | undefined> => {
    if (!isSupported) {
      return Promise.resolve(undefined);
    }

    if (permission === 'granted') {
      return Promise.resolve(true);
    }

    return Notification.requestPermission()
      .then((newPermission) => {
        setPermission(newPermission);
        return newPermission === 'granted';
      })
      .catch((error) => {
        console.error('Failed to request notification permission:', error);
        return false;
      });
  }, [isSupported, permission]);

  // 알림을 표시하는 함수
  const show: UseWebNotificationShow = useCallback(
    (
      title: string,
      options?: NotificationOptions,
    ): Notification | undefined => {
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
        notificationsRef.current.add(notification);

        // 알림이 닫힐 때 Set에서 제거
        notification.addEventListener('close', () => {
          notificationsRef.current.delete(notification);
        });

        return notification;
      } catch (error) {
        console.error('Failed to create notification:', error);
        return undefined;
      }
    },
    [isSupported, permission],
  );

  // 특정 알림 또는 모든 알림을 닫는 함수
  const close = useCallback((notification?: Notification) => {
    if (notification) {
      notification.close();
      notificationsRef.current.delete(notification);
    }
  }, []);

  // 모든 알림을 닫는 함수
  const closeAll = useCallback(() => {
    for (const notification of notificationsRef.current) {
      notification.close();
    }
    notificationsRef.current.clear();
  }, []);

  useEffect(() => {
    if (autoRequest && isSupported && permission === 'default') {
      ensurePermissions();
    }

    // 컴포넌트가 언마운트될 때 모든 알림 정리
    return () => {
      closeAll();
    };
  }, [autoRequest, isSupported, permission, ensurePermissions, closeAll]);

  return {
    isSupported,
    show,
    close,
    closeAll,
    ensurePermissions,
    permission,
    permissionGranted,
  };
}
