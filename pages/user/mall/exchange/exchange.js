// pages/user/mall/exchange/exchange.js
import {initImgs} from '../../../../utils/init'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:{
      exchangeCover:"exchange-bkg.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    initImgs('/user/mall/',this)
  },
  goHistory(){
    wx.navigateTo({
      url: '/pages/user/mall/history/history',
    })
  },
  goExchange(){
    wx.navigateTo({
      url: '/pages/user/mall/mall',
    })
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