// pages/column/media/components/mediaCard/mediaCard.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object,
      value: {}
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
    toDetail() {
      wx.navigateTo({
        url: '/pages/column/media/course/detail',
      })
    }
  }
})