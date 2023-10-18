// custom-tab-bar/index.js
const app = getApp()

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
      'pagePath': '/pages/home/home',
      'text': '首页',
      'icon': 'home'
    }, 
    {
      'id': 1,
      'pagePath': '/pages/map/map',
      'text': '文化地图',
      'icon': 'map-information-1'
    }, 
    {
      'id': 2,
      'pagePath': '/pages/resource/resource',
      'text': '资源推荐',
      'icon': 'dashboard-1'
    }, 
    {
      'id': 3,
      'pagePath': '/pages/user/user',
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
      // this.getActive()
    },

    // 设置当前高亮页
    getActive() {
      // console.log(app.globalData.path)
      // let path = ''
      // let _this = this
      // wx.onAppRoute(res => {
      //   path = res.path
      //   this.data.tabs.forEach(e => {
      //     if(e.pagePath == path) _this.setData({ active: e.id })
      //   });
      // })
    },

    onTap(e) {
      const id = e.currentTarget.dataset.id || 0
      const path = this.data.tabs[id].pagePath
      // const path = '../../' + this.data.tabs[id].pagePath
      wx.switchTab({ url: path })
      // this.setData({
      //   active: id
      // })
    }
  }
})
