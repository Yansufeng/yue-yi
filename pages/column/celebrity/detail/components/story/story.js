// pages/column/celebrity/detail/components/story/story.js
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
    stories: []
  },
  
  lifetimes: {
    attached() {
      this.getStories()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getStories() {
      const stories = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          name: '两把菜刀闹革命'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          name: '两把菜刀闹革命'
        },
        {
          id: 2,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          name: '两把菜刀闹革命'
        },
      ]
      this.setData({stories})
    }
  }
})