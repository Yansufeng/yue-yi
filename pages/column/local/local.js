// pages/column/local/local.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    tabs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
  },
  getTabs() {
    const tabs = [
      {
        id: 0,
        code: '',
        name: '简介'
      },
      {
        id: 1,
        code: '',
        name: '所辖分馆'
      },
      {
        id: 2,
        code: '',
        name: '全景导航'
      },
      {
        id: 3,
        code: '',
        name: '群文社团'
      },    
    ]
    this.setData({tabs})
  },
  tabChange(e){
    const active = e.detail
    this.setData({active})

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