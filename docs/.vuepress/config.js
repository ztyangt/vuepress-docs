import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
// import sidebar from "./config/sidebar.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "相左文档",
  description: "念念不忘，必有回响",
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/images/favicon.svg" },
    ],
  ],

  theme: defaultTheme({
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文档",
        children: [
          {
            text: "git命令",
            link: "/git/",
          },
          // {
          //   text: "linux命令01",
          //   link: "/linux1/",
          // },
          {
            text: "GoAPI",
            link: "/goapi/",
          },
        ],
      },
      {
        text: "博客",
        link: "https://www.ztyang.com",
      },
    ],

    // sidebar: sidebar,

    logo: "/images/favicon.svg",
    repo: "https://github.com/ztyangt/goAPI",
  }),

  plugins: [
    searchPlugin({
      isSearchable: (page) => page.path !== "/",
    }),
  ],

  dest: "./dist",
});
