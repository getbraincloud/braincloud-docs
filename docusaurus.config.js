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
    'data.example.email %>': 'email@bitheads.com',
    'data.example.password %>': 'password',
    'data.example.userId %>': 'userName',
  },
  prefix: '<%= ',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
  //title: 'brainCloud docs',
  title: '__DOCSNAME__',
  tagline: 'BaaS',
  // url: 'https://getbraincloud.github.io',
  // baseUrl: '/braincloud-apiref/', // for github page must attach a repository name after url
  // url: 'https://brainclouddocs.netlify.app',
  // baseUrl: '/', // for netlify
  //url: 'http://bcapidocs-dev.s3-website-us-east-1.amazonaws.com/',
  url: 'http://__DOCSURL__.braincloudservers.com/',
  baseUrl: '/', // for s3 bucket
  onBrokenLinks: 'ignore',
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
    // [
    //   '@docusaurus/plugin-content-blog',
    //   {
    //     id: 'release',
    //     // editUrl: 'https://github.com/getbraincloud/braincloud-apiref/tree/develop/',
    //     routeBasePath: 'release',
    //     path: './release',
    //     blogSidebarTitle: 'All posts',
    //     blogSidebarCount: 'ALL',
    //   },
    // ],
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
              label: '5.4.0',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [
            [findreplace, options],
          ],
        },
        // blog: {
        //   showReadingTime: true,
        //   // editUrl: 'https://github.com/getbraincloud/braincloud-apiref/tree/develop/',
        //   feedOptions: {
        //     type: 'all',
        //     copyright: `Copyright © ${new Date().getFullYear()} bitHeads, Inc.`,
        //   },
        //   blogSidebarTitle: 'All posts',
        //   blogSidebarCount: 'ALL',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: '__GTAGID__',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  // themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // typesense: {
      //   // typesenseCollectionName: 'braincloud_1673113845', // typesense cloud
      //   // typesenseCollectionName: 'braincloud_1673465514', // typesense local
      //   // typesenseCollectionName: 'braincloud_1673456235', // typesense local docker
      //   typesenseCollectionName: 'braincloud_1675803005', // typesense linode docker
      //   typesenseServerConfig: {
      //     nodes: [
      //       // {
      //       //   host: '8zu5ies4pvo0jgyxp-1.a1.typesense.net',
      //       //   port: 443,
      //       //   protocol: 'https',
      //       // },
      //       // {
      //       //   host: '192.168.0.16',
      //       //   port: 8108,
      //       //   protocol: 'http',
      //       // },
      //       // {
      //       //   // local host by brew services or docker both are the same, can use host '192.168.0.16', '127.0.0.1' or 'localhost'
      //       //   host: 'localhost',
      //       //   port: 8108,
      //       //   protocol: 'http',
      //       // },
      //       {
      //         host: '170.187.183.18', //hosted docker on linode
      //         port: 8108,
      //         protocol: 'http',
      //       },
      //     ],
      //     // apiKey: 'S49eI5xsoyfcxrVIW35LocFYE5LrxZtP',
      //     apiKey: 'xyz',
      //   },
      //   // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/search.md#search-parameters
      //   typesenseSearchParameters: {},
      //   // Optional
      //   contextualSearch: true,
      // },
      // algolia: {
      //   appId: 'XXX',
      //   apiKey: 'YYY',
      //   indexName: 'braincloud_tmp',
      //   contextualSearch: true,
      // },
      algolia: {
        appId: '__APPID__',
        apiKey: '__APIKEY__',
        indexName: 'bcdocs',
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
        content: `⭐️ Create a <a target="_blank" rel="noopener noreferrer" href="https://portalx.braincloudservers.com/?signup=true">free account</a> or log into your <a target="_blank" rel="noopener noreferrer" href="https://portalx.braincloudservers.com/">existing account</a>. ⭐️`,
      },
      navbar: {
        // title: 'brainCloud Docs',
        logo: {
          alt: 'brainCloud Logo',
          src: 'img/apidocs_light_horizontal@1x.svg',
          srcDark: 'img/apidocs_dark_horizontal@1x.svg',
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
          // { to: '/blog', label: 'Blog', position: 'left' },
          // { to: '/release', label: 'Release', position: 'left' },
          {
            href: 'https://bootcamp.braincloudservers.com',
            position: 'left',
            label: 'Bootcamp',
          },
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
              {
                label: 'Bootcamp',
                href: 'https://bootcamp.braincloudservers.com/',
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
                label: 'Forums',
                href: 'https://forums.getbraincloud.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/getbraincloud/',
              },
              // {
              //   html: `<a href="https://brainclouddocs.netlify.app/blog/rss.xml"><img src="img/Generic_Feed-icon.png" width="30" height="30" /></a>`,
              // },
              {
                label: 'Knowledge Base',
                href: 'https://help.getbraincloud.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} bitHeads, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'cfscript', 'java', 'r', 'dart'],
      },
    }),
};

module.exports = config;
