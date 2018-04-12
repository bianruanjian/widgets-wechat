import config from "./config.js";
let { menus } = config;

Page({
  data: {
    "__code__": {
      readme: ""
    },

    menus
  },
  onShareAppMessage: function () {
    return {
      title: '基于 bootstrap 和 zanui 的微信小程序语义化组件库',
      desc: '',
      path: '/pages/home/index',
      imageUrl: 'https://avatars2.githubusercontent.com/u/33917699?s=60&v=4'
    };
  }
});