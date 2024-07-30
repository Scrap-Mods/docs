import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scrap Docs',
  tagline: 'Documentation for Scrap Mechanic',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://docs.scrapmods.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Scrap-Mods', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },

    // Replace with your project's social card
    image: 'img/blue-bearing.png',
    navbar: {
      title: 'Scrap Docs',
      logo: {
        alt: 'Scrap Docs Logo',
        src: 'img/blue-bearing.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'luaSidebar',
          position: 'left',
          label: 'Lua',
        },
        {
          type: 'docSidebar',
          sidebarId: 'networkingSidebar',
          position: 'left',
          label: 'Networking',
        },
        {
          type: 'docSidebar',
          sidebarId: 'structuresSidebar',
          position: 'left',
          label: 'Structures',
        },
        {
          type: 'docSidebar',
          sidebarId: 'otherSidebar',
          position: 'left',
          label: 'Other',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Scrap-Mods/docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/ahzyHPn3y2',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Lua',
              to: '/docs/lua/intro',
            },
            {
              label: 'Networking',
              to: '/docs/networking/intro',
            },
            {
              label: 'Structures',
              to: '/docs/structures/intro',
            },
            {
              label: 'Other',
              to: '/docs/other/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ahzyHPn3y2',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Scrap-Mods/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scrap Mods. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['lua', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
