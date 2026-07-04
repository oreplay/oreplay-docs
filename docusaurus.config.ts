import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "O-Replay documentation",
  tagline: "By orienteers, For orienteers",
  favicon: "img/logo.svg",
  // favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.oreplay.es",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "oreplay", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    image: "img/logo.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "O-Replay",
      logo: {
        alt: "O-Replay Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Organizer's info",
        },
        { to: "/features", label: "Features", position: "left" },
        { to: "/about-us", label: "About Us", position: "left" },
        /*{to: '/blog', label: 'Blog', position: 'left'},*/
        {
          href: "https://www.oreplay.es",
          label: "O-Replay Events",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/oreplay/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction for Organizers",
              to: "/docs/intro",
            },
            {
              label: "Getting Started",
              to: "/docs/category/getting-started",
            },
            {
              label: "Uploading Data",
              to: "/docs/category/uploading-data",
            },
            {
              label: "Managing Errors",
              to: "/docs/category/managing-errors",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "About Us",
              to: "/about-us",
            },
            {
              label: "Features",
              to: "/features",
            },
            {
              label: "O-Replay",
              href: "https://www.oreplay.es",
            },
          ],
        },
        {
          title: "Contribute",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/oreplay/",
            },
            {
              label: "Weblate",
              href: "https://hosted.weblate.org/projects/o-replay/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} O-Replay documentation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
