// pages/column/activity/detail/detail.js
import { getResourceById } from "../../../../apis/commonApi"
import { getDateS } from '../../../../utils/string'

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
    const id = options.id
    this.getInfo(id)
  },

  getInfo(id) {
    getResourceById(id).then(res => {
      const info = res.result

      const s = new Date(info.extern.activityStartTime)
      const e = new Date(info.extern.activityEndTime)
      info.date = this.getTime(s, e)
      info.content = info.firstItem.content
      this.setData({info})
    })
  },

  getTime(dateS, dateE) {
    return `${getDateS(dateS)}-${dateE.getHours()}:${dateE.getMinutes()}`
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