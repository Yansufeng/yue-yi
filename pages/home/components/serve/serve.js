// pages/home/components/serve/serve.js
const app = getApp()

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
    isInit: false,
    btns: [
      {
        bkg: 'serve_reserve.png',
        icon: 'city-ancient-1',
        title: '场馆预约'
      },
      {
        bkg: 'serve_reserve.png',
        icon: 'city-ancient-1',
        title: '场馆预约2'
      },
      {
        bkg: 'serve_reserve.png',
        icon: 'city-ancient-1',
        title: '场馆预约3'
      }
    ]
  },
  
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
      const btns = this.data.btns
      const base = app.globalData.globalImgUrl + '/home/'
      btns.map(btn => btn.bkg = base + btn.bkg)
      this.setData({btns})
      this.setData({
        isInit: true
      })
    }
  }
})
