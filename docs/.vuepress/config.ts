import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const packageJson = require("../../package.json")

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  title: packageJson.name,
  description: packageJson.description,

  base:'/typescript-sdk-cli/',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar:[
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
      {
        text: "GitHub",
        link: "https://github.com/nekobc1998923/typescript-sdk-cli",
      },
    ],
  },
})
