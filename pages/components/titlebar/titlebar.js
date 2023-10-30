// pages/components/titlebar/titlebar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 标题
    title: {
      type: String,
      value: ''
    },
    // 更多转跳链接 
    path: {
      type: String,
      value: ''
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
    onMore() {
      const path = this.data.path
      if(path == '' || path == 'TODO') return
      wx.navigateTo({
        url: path,
      })
    }
  }
})