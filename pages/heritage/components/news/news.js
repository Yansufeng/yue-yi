// pages/heritage/components/news/news.js
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
    news: []
  },

  lifetimes: {
    attached() {
      this.getNews()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNews() {
      const news = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '中国·张家界第二届世界遗产摄影大展非物质文化遗产动',
          date: '2023.06.21'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '中国·张家界第二届世界遗产摄影大展非物质文化遗产动',
          date: '2023.06.21'
        },
        {
          id: 2,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '中国·张家界第二届世界遗产摄影大展非物质文化遗产动',
          date: '2023.06.21'
        },
        {
          id: 3,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          title: '中国·张家界第二届世界遗产摄影大展非物质文化遗产动',
          date: '2023.06.21'
        }
      ]
      this.setData({news})
    }
  }
})