// pages/column/book/components/recommend/recommend.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    books: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(e) {
      const index = e.currentTarget.dataset.i
      
      wx.navigateTo({
        url: '/pages/column/book/detail/detail',
      })
    },
  }
})