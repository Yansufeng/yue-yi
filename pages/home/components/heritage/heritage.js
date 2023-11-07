// pages/home/components/heritage/heritage.js
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
    active: 0,
    tabs: [],
    list: [],
    current: 1,
    margin: '',
    imgs: {
      border: 'heritage-border.png'
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
      this.getTabs()
      this.getList()
      this.initImgs()
      this.getMargin()
      this.setData({
        isInit: true
      })
    },

    getTabs() {
      const tabs = [
        {
          id: '0',
          name: '非遗项目',
          code: '0'
        },
        {
          id: '1',
          name: '非遗传承人',
          code: '0'
        },
        // {
        //   id: '2',
        //   name: '非遗起源地',
        //   code: '0'
        // }
      ]
      this.setData({tabs})
    },
  
    getList() {
      const base = app.globalData.globalImgUrl + '/home/heritage/'
      const list = []

      for(let i = 0; i < 6; i++) {
        list.push(base + i + '.png')
      }

      this.setData({list})
    },

    getPList() {
      const base = app.globalData.globalImgUrl + '/home/heritage/'
      const list = []

      for(let i = 0; i < 4; i++) {
        list.push(base + 'p' + i + '.png')
      }

      this.setData({list})
    },

    getMargin() {
      const windowW = wx.getSystemInfoSync().windowWidth
      const margin = windowW * 0.16 + 'px'
      this.setData({margin})
    },

    onChange() {

    },

    onTab(e) {
      const active = e.detail
      if(active == 0) this.getList()
      else this.getPList()
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
