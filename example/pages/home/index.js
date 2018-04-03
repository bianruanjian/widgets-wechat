import config from "./config.js";
let { menus } = config;

export default Page({
  data: {
    "__code__": {
      readme: ""
    },

    menus
  },
  onShareAppMessage: function () {
    return {
      title: '基于规范的小程序组件库，简洁、易用、工具化',
      desc: '',
      path: '/pages/home/index',
      imageUrl: 'https://avatars2.githubusercontent.com/u/33917699?s=60&v=4'
    };
  }
});