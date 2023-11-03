// pages/column/local/components/intro/intro.js
import{initImgs} from '../../../../../utils/init'
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
    moreActive:false,
    isInit: false,
    imgs:{
      bkg:'cover.png',
      setting:'setting.png'
    }
  },
  lifetimes: {
    attached() {
      initImgs('/column/local/', this)
      this.setData({
        isInit: true
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toMore(){
      this.moreActive=!this.moreActive      
      this.setData({moreActive:this.moreActive})
    }
  }
})
