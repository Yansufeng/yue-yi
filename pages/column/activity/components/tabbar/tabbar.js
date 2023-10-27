// pages/column/activity/components/tabbar/tabbar.js
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
    active: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab(e) {
      const i = e.currentTarget.dataset.i
      const active = i
      this.setData({active})
      this.triggerEvent('tabEvent', i)  // 父组件传值
    }
  }
})