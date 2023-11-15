// pages/user/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: []
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
        title: '图书'
      },
      {
        id: 1,
        title: '展览'
      },
      {
        id: 2,
        title: '展品'
      },
      {
        id: 3,
        title: '活动'
      },
      {
        id:4,
        title: '培训'
      },
      {
        id: 5,
        title: '视频'
      },
    ]
    this.setData({tabs})
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