import { defineConfig } from 'vitepress'
import navZh from './configs/nav/zh'
import navEn from './configs/nav/en'
import sidebarZh from './configs/sidebar/zh'
import sidebarEn from './configs/sidebar/en'

export default defineConfig({
  title: '波比文档中心',
  description: '波比产品官方文档中心',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  },
  themeConfig: {
    localeLinks: {
      text: '语言',
      items: [
        { text: '简体中文', link: '/' },
        { text: 'English', link: '/en/' }
      ]
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../')
      }
    },
  },
})