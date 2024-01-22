// pages/column/training/detail/detail.js
import {
  getResourceById
} from "../../../../apis/commonApi";
import { formatTime } from '../../../../utils/string'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.getInfo()
  },

  getInfo() {
    getResourceById(this.data.id).then(res => {
      const {
        result
      } = res
      result.signInTime= formatTime( new Date(result.extern.signUpStartTime))
      result.trainingTime=formatTime(new Date(result.extern.activityStartTime))
      this.setData({
        info:result
      })
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