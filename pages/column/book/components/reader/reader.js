// pages/column/book/components/reader/reader.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    books: []
  },

  observers: {
    'tabs': function (tabs) {
      const len = tabs.length
      if(len == 0) return // 跳过空数组

      this.getBooks()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBooks() {
      const books = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
          name: '无用之美'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
          name: '无用之美'
        },
        {
          id: 2,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
          name: '无用之美'
        },
        {
          id: 3,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
          name: '无用之美'
        },
      ]
      this.setData({books})
    },

    onTab(e) {
      const i = e.currentTarget.dataset.i
      const active = i
      this.setData({active})
    }
  }
})