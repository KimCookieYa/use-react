import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'use-react',
  tagline: '리액트 커스텀 훅 모음',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kimcookieya.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/use-react/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KimCookieYa', // Usually your GitHub org/user name.
  projectName: 'use-react', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/KimCookieYa/use-react/edit/main/web/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'use-react',
      logo: {
        alt: 'use-react 로고',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hooksSidebar',
          position: 'left',
          label: '커스텀 훅',
        },
        {
          href: 'https://github.com/KimCookieYa/use-react',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '소개',
              to: '/docs/intro',
            },
            {
              label: 'useWebNotification',
              to: '/docs/hooks/useWebNotification',
            },
          ],
        },
        {
          title: '링크',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KimCookieYa/use-react',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KimCookieYa. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
