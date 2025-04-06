import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  hooksSidebar: [
    {
      type: 'category',
      label: '소개',
      items: ['intro'],
    },
    {
      type: 'category',
      label: '기본 훅',
      items: ['hooks/useToggle', 'hooks/useInterval', 'hooks/useAsyncEffect'],
    },
    {
      type: 'category',
      label: 'UI 및 이벤트 훅',
      items: [
        'hooks/useOnClickOutside',
        'hooks/useLockScroll',
        'hooks/useKeyboardEventListener',
      ],
    },
    {
      type: 'category',
      label: '데이터 훅',
      items: ['hooks/useFetch', 'hooks/useFetchUrl', 'hooks/useValueObject'],
    },
    {
      type: 'category',
      label: '플랫폼 및 기능 훅',
      items: [
        'hooks/useWebNotification',
        'hooks/usePlatform',
        'hooks/useWebview',
      ],
    },
  ],
};

export default sidebars;
