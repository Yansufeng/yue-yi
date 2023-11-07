// pages/user/mall/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[],
    goods:[]
  },
  getTabs(){
    const tabs=[
    {
      id:"0",
      name:"全部",
    },
    {
      id:"1",
      name:"待使用",
    },
    {
      id:"2",
      name:"已使用",
    }
  ]
  this.setData({tabs})
  },
  getGoods(){
    const goods=[
      {
        id:"0",
        img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
        name:"张家界原生态茅岩莓茶",
        score:"800",
        isExchange:true
      },
      {
        id:"1",
        img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
        name:"张家界原生态茅岩莓茶",
        score:"800",
        isExchange:false
      },
      {
        id:"2",
        img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png",
        name:"张家界原生态茅岩莓茶",
        score:"800",
        isExchange:false
      }
    ]
    this.setData({goods})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getGoods()
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