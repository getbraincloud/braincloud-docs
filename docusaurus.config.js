// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// add the customized remark to interpolate viriables
const sectionPrefix = require('./src/remark/section-prefix');
const findreplace = require('./src/remark/findreplace');

let options = {
  replacements: {
    PRODUCT: 'brainCloud',
    COPYRIGHT: `Copyright ${new Date().getFullYear()} bitHeads, Inc`,
    'data.branding.codePrefix %>': '_bc',
    'data.branding.codeWrapper %>': 'BrainCloudWrapper',
    'data.branding.codeClient %>': 'BrainCloudClient',
    'data.branding.serverUrl %>': 'https://api.braincloudservers.com/dispatcherv2',
    'data.branding.productName %>': 'brainCloud',
    'data.branding.productNameCaptial %>': 'BrainCloud',
    'data.branding.productNameRTT %>': 'brainCloud RTT',
    'data.branding.companyName %>': 'bitHeads',
  },
  prefix: '<%= ',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'brainCloud docs',
  tagline: 'BaaS',
  // url: 'https://getbraincloud.github.io',
  // baseUrl: '/braincloud-apiref/', // for github page must attach a repository name after url
  url: 'https://brainclouddocs.netlify.app',
  baseUrl: '/', // for netlify
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'getbraincloud', // Usually your GitHub org/user name.
  projectName: 'braincloud-apiref', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'release',
        routeBasePath: 'release',
        path: './release',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/getbraincloud/braincloud-apiref/tree/main/',
          versions: {
            current: {
              label: '4.13.0',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [
            [findreplace, options],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/getbraincloud/braincloud-apiref/tree/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} bitHeads, Inc.`,
          },
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'R2IYF7ETH7',
        apiKey: '599cec31baffa4868cae4e79f180729b',
        indexName: 'docsearch',
        contextualSearch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ Subscript brainCloud service on <a target="_blank" rel="noopener noreferrer" href="https://portal.braincloudservers.com/login#/development">brainCloud portal</a>`,
      },
      navbar: {
        title: 'brainCloud Docs',
        logo: {
          alt: 'brainCloud Logo',
          src: 'img/logobc_v_forlightbg.svg',
          srcDark: 'img/logobc_v_fordarkbg1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'learn/introduction/index',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: 'api/introduction',
            position: 'left',
            label: 'API',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/release', label: 'Release', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/getbraincloud',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'Learn',
                to: '/',
              },
              {
                label: 'API',
                to: '/api/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@Getbraincloud',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/braincloudnews',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/brainCloudBaaS',
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
                href: 'https://github.com/getbraincloud/braincloud-apiref/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} bitHeads, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'cfscript', 'java', 'r'],
      },
    }),
};

module.exports = config;
