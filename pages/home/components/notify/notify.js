// pages/home/components/notify/notify.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: String,
      value: '阳戏《三子争父》即将上演！',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isInit: false,
    bkg: '/home/notify_bg.png',
    marquee: {
      speed: 80,
      loop: -1,
      delay: 0,
    }
  },

  /**
   * 生命周期
   */
  lifetimes: {
    attached: function() {
      this.init()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      const bkg = app.globalData.globalImgUrl + this.data.bkg
      this.setData({bkg})
      this.setData({
        isInit: true
      })
    }
  }
})
