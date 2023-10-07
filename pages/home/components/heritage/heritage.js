// pages/home/components/heritage/heritage.js
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
    isInit: false,
    active: '0',
    tabs: [],
    list: []
  },  
  
  /**
   * 生命周期
   */
  lifetimes: {
    attached: function() {
      this.init()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      this.getTabs()
      this.getList()
      this.setData({
        isInit: true
      })
    },

    getTabs() {
      const tabs = [
        {
          id: '0',
          title: '非遗项目',
          code: '0'
        },
        {
          id: '1',
          title: '非遗传承人',
          code: '0'
        },
        {
          id: '2',
          title: '非遗起源地',
          code: '0'
        }
      ]
      this.setData({tabs})
    },
  
    getList() {}
  }
})
