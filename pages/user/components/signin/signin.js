// pages/user/components/signin/signin.js
import { doSignin, getPointInfo } from '../../../../apis/user'
import { initImgs } from '../../../../utils/init'

import Toast from 'tdesign-miniprogram/toast/index'

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
    visible: false,
    point: 0,
    imgs: {
      signin: 'icon_signin.png'
    }
  },

  lifetimes: {
    attached() {
      initImgs('/user/', this)
      this.setData({
        isInit: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSignin() {
      doSignin().then(() => {
        this.showPop()
      }).catch(err => {
        Toast({
          context: this,
          selector: '#t-toast',
          message: err.message,
          duration: 4000
        })
      })
    },

    showPop() {
      getPointInfo().then(res => {
        const point = res.result.total
        this.setData({
          point,
          visible: true
        })
      })
    },

    onVisibleChange(e) {
      this.setData({
        visible: e.detail.visible,
      })
    },

    onClose() {
      this.setData({
        visible: false
      })
    }
  }
})