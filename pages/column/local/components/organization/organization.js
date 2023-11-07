// pages/column/local/components/organization/organization.js
import {initImgs} from '../../../../../utils/init'
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
    news:[],
    imgs:{
      bkg:"organization-cover.png",
      create:"create-btn.png",
      join:"join-btn.png"
    }
  },
  lifetimes:{
    attached(){
      this.getNews()
      initImgs('/column/local/', this)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getNews(){
      const news=[
        {
          id:"0",
          title:"公益宣讲进社区 每好生活暖人心",
          img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
          dateTime:"2023.06.21"
        },
        {
          id:"1",
          title:"公益宣讲进社区 每好生活暖人心",
          img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
          dateTime:"2023.06.21"
        },
        {
          id:"2",
          title:"公益宣讲进社区 每好生活暖人心",
          img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
          dateTime:"2023.06.21"
        }
      ]
      this.setData({
        news
      })
    }
  }
})
