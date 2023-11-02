// pages/column/media/course/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInfo()
  },

  getInfo() {
    const info = {
      id: 0,
      cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
      name: '摆手舞教学（一）',
      date: '2023-06-08',
      like: 26,
      star: 10,
      content: '摆手舞的内容十分丰富，主要表现土家先民长期与山打交道、表现渔猎和农事活动，以及模仿飞禽走兽的各种动作等，其动作多达120多个，由于长期失传较多，有的地方仅剩10余个，有的地方在演出时硬性规定8个基本动作。摆手舞有单摆和双摆，即同边手，主要起整顿和协调队伍，形成圆圈的作用。'
    }
    this.setData({info})
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