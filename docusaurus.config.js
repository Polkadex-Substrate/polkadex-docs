/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Polkadex Docs',
  tagline: 'Template to organize documents like technical specs, architecture overviews, and project kickoff notes.',
  url: 'https://polkadex.trade.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Polkadex INC', // Usually your GitHub org/user name.
  projectName: 'polkadex', // Usually your repo name.
  themeConfig: {
    image: 'img/twitterCard.jpg', 
    navbar: {
      title: 'Polkadex ',
      logo: {
        alt: 'Polkadex logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Polkadex-Substrate/Polkadex',
          label: 'GitHub',
          position: 'right',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Overview',
              to: '/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/Polkadex',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/polkadex',
            },
            {
              label: 'Medium',
              href: 'https://polkadex.medium.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              to: 'https://www.polkadex.trade',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Polkadex-Substrate/Polkadex',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Polkadex, Inc. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/Polkadex-Substrate/polkadex-docs/edit/master/',          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
