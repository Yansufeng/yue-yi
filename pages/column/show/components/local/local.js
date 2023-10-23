// pages/column/show/components/local/local.js
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
    shows: []
  },

  lifetimes: {
    attached: function () {
      this.getShows()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getShows() {
      const shows = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '有温度·有故事——非遗手工艺展'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '有温度·有故事——非遗手工艺展'
        },
        {
          id: 2,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '有温度·有故事——非遗手工艺展'
        },
      ]
      this.setData({shows})
    }
  }
})