// pages/column/celebrity/detail/components/loc/loc.js
import { initImgs } from '../../../../../../utils/init'

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
    imgs: {
      bkg: 'txt-bkg.png',
      fullView: 'full-view-icon.png'
    },
    loc: {}
  },

  lifetimes: {
    attached() {
      initImgs('/column/celebrity/', this)
      this.getLoc()
      this.setData({
        isInit: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getLoc() {
      const loc = {
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '贺龙故居',
        time: '周二至周日09:00-16:30',
        loc: '湖南省张家界市桑植县',
        content: '贺龙故居，位于张家界市桑植县洪家关村，从张家界市区驱车约两个小时，为1975年桑植县政府按原貌所修复的。故居为一湘西常见的木架毛瓦平房，同时在同院内新建了贺龙生平事迹陈列室，此为一砖木结构房屋，共陈列贺龙不同时期的185张照片和50多件文物。旧居门前还有一座风雨桥，建于1916年，贺龙成名后改称为“贺龙桥”。该桥为木质结构，造型古朴，富有民族特色。'
      }
      this.setData({loc})
    }
  }
})