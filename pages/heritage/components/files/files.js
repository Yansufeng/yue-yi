// pages/heritage/components/files/files.js
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
    files: []
  },

  lifetimes: {
    attached() {
      this.getFiles()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getFiles() {
      const files = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png'
        },
        {
          id: 2,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png'
        },
        {
          id: 3,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png'
        }
      ]
      this.setData({files})
    }
  }
})