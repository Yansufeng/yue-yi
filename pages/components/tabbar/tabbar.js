// pages/components/tabbar/tabbar.js
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
    active: 0,
    tabs: [{
      'id': 0,
      'pagePath': 'pages/home/home',
      'text': '首页',
      'icon': 'home'
    }, 
    {
      'id': 1,
      'pagePath': 'pages/map/map',
      'text': '文化地图',
      'icon': 'map-information-1'
    }, 
    {
      'id': 2,
      'pagePath': 'pages/resource/resource',
      'text': '资源推荐',
      'icon': 'dashboard-1'
    }, 
    {
      'id': 3,
      'pagePath': 'pages/user/user',
      'text': '我的',
      'icon': 'user'
    }]
  },

  /**
   * 生命周期
   */
  lifetimes: {
    attached: function() {
      this.init()
      // console.log(this.data.tabs)
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      const tabs = this.data.tabs
      this.setData({
        tabsL: tabs.slice(0, 2),
        tabsR: tabs.slice(2, 4)
      })
    },

    onTap(id) {
      console.log(id)
    }
  }
})
