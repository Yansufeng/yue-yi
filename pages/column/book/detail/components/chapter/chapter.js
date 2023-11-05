// pages/column/book/detail/components/chapter/chapter.js
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
    list: []
  },
  
  lifetimes: {
    attached() {
      this.getList()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getList() {
      const list = [
        {
          id: 0,
          name: '章节一'
        },
        {
          id: 1,
          name: '章节一'
        },
        {
          id: 2,
          name: '章节一'
        },
        {
          id: 3,
          name: '章节一'
        },
        {
          id: 4,
          name: '章节一'
        },
        {
          id: 5,
          name: '章节一'
        },
        {
          id: 6,
          name: '章节一'
        },
        {
          id: 7,
          name: '章节一'
        },
      ]
      this.setData({list})
    }
  }
})