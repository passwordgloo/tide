import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "听潮文库",
  description: "海潮音入佛耳，薰风句达帝听。",
  titleTemplate:":title - 海阔天高",
  lang:"zh-Hans",
  appearance:false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"/logo.svg",
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '...',
    //     apiKey: '...',
    //     indexName: '...'
    //   }
    // },
    nav: navbar,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/passwordgloo/pie' }
    ]
  }
})
