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
  // url: 'https://brainclouddocs.netlify.app',
  // baseUrl: '/', // for netlify
  url: 'http://bcapidocs-dev.s3-website-us-east-1.amazonaws.com/',
  baseUrl: '/', // for s3 bucket
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
    "./src/plugins/intercom.js",
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'release',
        // editUrl: 'https://github.com/getbraincloud/braincloud-apiref/tree/develop/',
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
          // editUrl: 'https://github.com/getbraincloud/braincloud-apiref/tree/develop/',
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
          // editUrl: 'https://github.com/getbraincloud/braincloud-apiref/tree/develop/',
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

  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      typesense: {
        typesenseCollectionName: 'braincloud_1673113845', // typesense cloud
        // typesenseCollectionName: 'braincloud_1673465514', // typesense local
        // typesenseCollectionName: 'braincloud_1673456235', // typesense local docker
        typesenseServerConfig: {
          nodes: [
            {
              host: '8zu5ies4pvo0jgyxp-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
            // {
            //   host: '192.168.0.16',
            //   port: 8108,
            //   protocol: 'http',
            // },
            // {
            //   // local host by brew services or docker both are the same, can use host '192.168.0.16', '127.0.0.1' or 'localhost'
            //   host: 'localhost',
            //   port: 8108,
            //   protocol: 'http',
            // },
          ],
          apiKey: 'S49eI5xsoyfcxrVIW35LocFYE5LrxZtP',
          // apiKey: 'xyz',
        },
        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/search.md#search-parameters
        typesenseSearchParameters: {},
        // Optional
        contextualSearch: true,
      },
      // algolia: {
      //   appId: 'ZPF1VHGGT0',
      //   apiKey: 'e2b081523fe2ceb57ab46545aca7b530',
      //   indexName: 'braincloud_tmp',
      //   contextualSearch: true,
      // },
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
                href: 'https://github.com/getbraincloud/',
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
