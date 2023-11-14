// pages/home/components/navbar/navbar.js
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
    isInit: false,
    basePath: '/pages/column/',
    list: [
      {
        cover: 'book.png',
        title: '好书推荐',
        path: 'book'
      },
      {
        cover: 'show.png',
        title: '文化展览',
        path: 'show'
      },
      {
        cover: 'activity.png',
        title: '公益活动',
        path: 'activity'
      },
      {
        cover: 'training.png',
        title: '艺术培训',
        path: 'training'
      },
      {
        cover: 'media.png',
        title: '视听集市',
        path: 'media'
      },
      {
        cover: 'local.png',
        title: '地方风采',
        path: 'local'
      },
      {
        cover: 'celebrity.png',
        title: '文化名人',
        path: 'celebrity'
      },
      {
        cover: 'volunteer.png',
        title: '志愿者风采',
        path: 'volunteer'
      }
    ]
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
      const baseUrl = app.globalData.globalImgUrl + '/home/'
      const basePath = this.data.basePath
      const list = this.data.list
      list.map(e => {
        e.cover = baseUrl + e.cover
        e.path = basePath + e.path + '/' + e.path
        return e
      })
      this.setData({list})
      this.setData({
        isInit: true
      })
    },
    onTap(e) {
      const i = e.currentTarget.dataset.i
      const path = this.data.list[i].path
      console.log(path)
      wx.navigateTo({
        url: path,
      })
    }
  }
})
