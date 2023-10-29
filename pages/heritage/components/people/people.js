// pages/heritage/components/people/people.js
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
    tabs: []
  },

  lifetimes: {
    attached() {
      this.getTabs()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTabs() {
      const tabs = [
        {
          id: 0,
          name: '国家级'
        },
        {
          id: 1,
          name: '省级'
        }
      ]
      this.setData({ tabs })
    },
  }
})