// pages/column/local/detail/detail.js
import {initImgs} from '../../../../utils/init'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      intro:"",
      serveList:[],
      teamList:[],
    imgs:{
      bkg:'cover.png',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    initImgs('/column/local/',this)
    this.getInfo()
  },
  getInfo(){
    const intro =
    "天门山镇办公楼建筑面积约10000平方米，用于综合文化的场地约400平方米左右。包括培训辅导会议室1间，图书室1间，阅览室1间，办公室1间，用于开展日常文化工作。从业人员共2名，其中专干1名。下辖社区（村）文化服务中心8个，有群众业余文艺团队10支，共计100人.（龙灯、花灯），下辖8个行政村。"
    const serveList=[
      {
        id:"0",
        img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
        title:"大坪居委会综合文化服务中心",
        name:"胡海清",
        tel:"(0744)8596681",
        address:"张家界市永定区王姓垭村"
      },
      {
        id:"1",
        img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
        title:"大坪居委会综合文化服务中心",
        name:"胡海清",
        tel:"(0744)8596681",
        address:"张家界市永定区王姓垭村"
      },
      {
        id:"2",
        img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
        title:"大坪居委会综合文化服务中心",
        name:"胡海清",
        tel:"(0744)8596681",
        address:"张家界市永定区王姓垭村"
      }
    ]
    const teamList=[
    {
      id:"0",
      title:"合作桥村非遗文化队",
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
      name:"张宏田",
      tel:"13787968565",
      content:"成立于1982年，隶属于合作桥村，现有成员12名，平均年龄62岁，擅长大庸花灯，龙灯。"
    },
    {
      id:"1",
      title:"合作桥村非遗文化队",
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
      name:"张宏田",
      tel:"13787968565",
      content:"成立于1982年，隶属于合作桥村，现有成员12名，平均年龄62岁，擅长大庸花灯，龙灯。"
    },
    {
      id:"2",
      title:"合作桥村非遗文化队",
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
      name:"张宏田",
      tel:"13787968565",
      content:"成立于1982年，隶属于合作桥村，现有成员12名，平均年龄62岁，擅长大庸花灯，龙灯。"
    }
    ] 
    this.setData({intro})
    this.setData({serveList})
    console.log(this.data.serveList)
    this.setData({teamList})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})