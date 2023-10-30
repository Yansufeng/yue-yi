// pages/heritage/components/h-tabbar/h-tabbar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
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
    onTap(e) {
      const active = e.currentTarget.dataset.i
      this.setData({ active })
      this.triggerEvent('tabEvent', active)  // 父组件传值
    }
  }
})