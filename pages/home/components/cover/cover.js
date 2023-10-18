// pages/home/components/cover/cover.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object,
      value: {
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/heritage.png',
        name: '张家界泼水龙'
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isInit: false,
    imgs: {
      border: 'heritage-border.png',
      nameBkg: 'heritage-name-bkg.png'
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
      this.initImgs()
      this.setData({
        isInit: true
      })
    },

    initImgs() {
      const base = app.globalData.globalImgUrl + '/home/'
      const imgs = this.data.imgs
      for(let k in imgs) {
        imgs[k] = base + imgs[k]
      }
      this.setData({imgs})
    }
  }
})
