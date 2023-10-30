// pages/column/book/components/listener/listener.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    navs: {
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
    toList(e) {
      const i = e.currentTarget.dataset.i
      wx.navigateTo({
        url: '/pages/column/book/list/listL',
      })
    }
  }
})