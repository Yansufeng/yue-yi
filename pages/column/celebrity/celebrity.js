// pages/column/celebrity/celebrity.js
import { initImgs } from '../../../utils/init'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: {
      bkg: 'main-bkg.png'
    },
    celebrities: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    initImgs('/column/celebrity/', this)
    this.getCelebrities()
  },

  getCelebrities() {
    const celebrities = [
      {
        id: 0,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 1,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 2,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 3,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 4,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 5,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 6,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
    ]
    this.setData({celebrities})
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