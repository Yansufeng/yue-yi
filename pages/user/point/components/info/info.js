// pages/user/point/components/info/info.js
import { initImgs } from '../../../../../utils/init'
import { getPointInfo } from '../../../../../apis/user'

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
    info: {},
    imgs: {
      coins : 'coins.png'
    }
  },

  lifetimes: {
    attached() {
      initImgs('/user/mall/', this)
      this.getInfo()
      this.setData({
        isInit: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getInfo() {
      getPointInfo().then(res => {
        const info = res.data.result
        this.setData({info})
      })
    }
  }
})