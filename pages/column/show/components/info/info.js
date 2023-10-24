// pages/column/show/components/info/info.js
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
    info: []
  },

  lifetimes: {
    attached() {
      this.getInfo()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getInfo() {
      const info = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '线上展览丨自古知兵非好战——中国古代兵书专题展',
          time: '2023.06.21'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '线上展览丨自古知兵非好战——中国古代兵书专题展',
          time: '2023.06.21'
        },
        {
          id: 2,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '线上展览丨自古知兵非好战——中国古代兵书专题展',
          time: '2023.06.21'
        },
      ]
      this.setData({info})
    }
  }
})