


// // @ts-check
// import { themes as prismThemes } from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Physical AI & Humanoid Robotics',
//   tagline: 'Panaversity Hackathon Textbook by Maham',
//   favicon: 'img/favicon.ico',

//   future: {
//     v4: true,
//   },

//   // Your GitHub Pages URL
//   url: 'https://MahamSaif786.github.io',

//   // Base URL for your project repo
//   baseUrl: '/physical-ai-humanoid-robotics-textbook/',

//   // GitHub pages deployment config
//   organizationName: 'MahamSaif786', // Your GitHub username
//   projectName: 'physical-ai-humanoid-robotics-textbook', // Your repo name

//   onBrokenLinks: 'throw',

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       {
//         docs: {
//           sidebarPath: './sidebars.js',
//           editUrl:
//             'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook/tree/main/',
//         },
//         blog: {
//           showReadingTime: true,
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//           editUrl:
//             'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook/tree/main/',
//           onInlineTags: 'warn',
//           onInlineAuthors: 'warn',
//           onUntruncatedBlogPosts: 'warn',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       },
//     ],
//   ],

//   themeConfig: {
//     image: 'img/docusaurus-social-card.jpg',
//     colorMode: {
//       respectPrefersColorScheme: true,
//     },

//     navbar: {
//       title: 'Physical AI & Humanoid Robotics',
//       logo: {
//         alt: 'Robotics Logo',
//         src: 'img/logo.svg',
//       },
//       items: [
//         {
//           type: 'docSidebar',
//           sidebarId: 'tutorialSidebar',
//           position: 'left',
//           label: 'Tutorial',
//         },
//         { to: '/blog', label: 'Blog', position: 'left' },
//         {
//           href: 'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook',
//           label: 'GitHub',
//           position: 'right',
//         },
//       ],
//     },

//    footer: {
//       style: 'dark',
//       links: [
//         {
//           title: 'Docs',
//           items: [
//             {
//               label: 'Tutorial',
//               to: '/docs/intro',
//             },
//           ],
//         },
//         {
//           title: 'Community',
//           items: [
//             {
//               label: 'Stack Overflow',
//               href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//             },
//             {
//               label: 'Discord',
//               href: 'https://discordapp.com/invite/docusaurus',
//             },
//             {
//               label: 'X',
//               href: 'https://x.com/docusaurus',
//             },
//           ],
//         },
//         {
//           title: 'More',
//           items: [
//             {
//               label: 'Blog',
//               to: '/blog',
//             },
//             {
//               label: 'GitHub',
//               href: 'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook',
//             },
//           ],
//         },
//       ],
//       copyright: 'Copyright © ${new Date().getFullYear()} Maham. Built with Docusaurus.',
//     },

//     prism: {
//       theme: prismThemes.github,
//       darkTheme: prismThemes.dracula,
//     },
//   },
// };

// export default config;



// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Panaversity Hackathon Textbook by Maham',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages URL
  url: 'https://MahamSaif786.github.io',

  // Base URL for repository
  baseUrl: '/physical-ai-humanoid-robotics-textbook/',

  // GitHub deployment config
  organizationName: 'MahamSaif786',
  projectName: 'physical-ai-humanoid-robotics-textbook',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook',
          label: 'GitHub',
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
              label: 'Introduction',
              to: '/docs/01-introduction-physical-ai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href:
                'https://github.com/MahamSaif786/physical-ai-humanoid-robotics-textbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Maham. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;