// pages/heritage/components/title-bkg/title-bkg.js
import { initImgs } from '../../../../utils/init'

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isInit: false,
    imgs: {
      bkg: "bkg-title.png"
    }
  },

  lifetimes: {
    attached() {
      initImgs('/heritage/', this)
      this.setData({
        isInit: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})