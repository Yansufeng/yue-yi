// pages/column/media/components/teachers/teachers.js
const app = getApp()

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    teachers: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isInit: false,
    imgs: {
      bkg: 'teacher-bkg.png'
    },
  },

  lifetimes: {
    attached() {
      this.initImgs()
      this.setData({
        isInit: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initImgs() {
      const base = app.globalData.globalImgUrl + '/column/media/'

      let imgs = this.data.imgs
      for(let key in imgs) {
        imgs[key] = base + imgs[key]
      }
      this.setData({imgs})
    }
  }
})