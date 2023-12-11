// pages/column/show/local/list.js
import { getByPage } from '../../../../utils/list'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 'yy-whzl-xian-xia-zhan-lan',
    shows: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getShows()
  },

  getShows() {
    getByPage(this.data.code, this, this.data.shows).then(shows => this.setData({shows}))
  },

  toDetail(e) {
    const id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: './detail?id=' + id,
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