import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "bugger®",
  description: "An ECR Debugger",
  base: "/buggerdocs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setup', link: '/setup/why-bugger-is-better' },
      { text: 'API', link: '/api/scheduler' }
    ],

    sidebar: {
      "/setup": [
        {
          text: "Setup",
          items: [
            { text: 'Why bugger® is better', link: '/setup/why-bugger-is-better' },
            { text: 'Installation', link: '/setup/installation' }
          ]
        }
      ],

      "/api": [
        {
          text: 'API',
          items: [
            { text: 'Scheduler', link: '/api/scheduler' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HarryXChen3/buggerdocs' }
    ]
  }
})
