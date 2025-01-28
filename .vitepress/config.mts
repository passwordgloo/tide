import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "听潮文库",
  description: "海潮音入佛耳，薰风句达帝听。",
  titleTemplate:":title - 海阔天高",
  lang:"zh-Hans",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"/logo.svg",
    search: {
      provider: 'algolia',
      options: {
        appId: 'NSM0XR0X8R',
        apiKey: 'ae911f353c09b506790378bdded11095',
        indexName: 'Tidedoc'
      }
    },
    nav: navbar,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/passwordgloo/pie' }
    ]
  }
})
