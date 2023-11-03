// pages/column/celebrity/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 3,
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
      '名人简介',
      '名人故事',
      '名人书籍',
      '名人故居'
    ]
    this.setData({ tabs })
  },

  onTab(e) {
    const active = e.currentTarget.dataset.i
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