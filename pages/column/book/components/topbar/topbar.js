// pages/column/book/components/topbar/topbar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    deviceInfo: {
      top: 0,
      height: 0,
      left: 0
    }
  },

  lifetimes: {
    attached() {
      this.init()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      const capsule = wx.getMenuButtonBoundingClientRect()
      const windowW = wx.getSystemInfoSync().windowWidth
      const deviceInfo = {
        top: capsule.top,
        height: capsule.height,
        left: windowW - capsule.right
      }
      this.setData({deviceInfo})
    }
  }
})