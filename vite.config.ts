import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

const pageData = {
  "/index.html": {
    title: "哈尔滨新区",
    navList: [
      { title: "新区发布", url: "#" },
      { title: "双创惠", url: "#" },
      { title: "活动惠", url: "#" },
      { title: "政策惠", url: "#" },
      { title: "场地惠", url: "#" },
      { title: "资本惠", url: "#" },
      { title: "服务惠", url: "#" },
      { title: "项目惠", url: "#" },
    ],
    cardList: [
      {
        title: "科技部印发《关于促进新型研发机构发展的指导意见》的通知",
        time: "2021-04-22 10:55:53",
      },
      {
        title: "科技部印发《关于促进新型研发机构发展的指导意见》的通知",
        time: "2021-04-22 10:55:53",
      },
      {
        title: "科技部印发《关于促进新型研发机构发展的指导意见》的通知",
        time: "2021-04-22 10:55:53",
      },
      {
        title: "科技部印发《关于促进新型研发机构发展的指导意见》的通知",
        time: "2021-04-22 10:55:53",
      },
    ],
  },
  "/nested/subpage.html": {
    title: "Sub Page",
  },
};

export default {
  plugins: [
    handlebars({
      context(pagePath) {
        return pageData[pagePath];
      },
      partialDirectory: resolve("./src", "partials"),
    }),
  ],
};
