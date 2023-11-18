// pages/column/activity/activity.js
import { getTopicChildData, getTopicResourceData } from '../../../apis/commonApi'
import { getByPage } from '../../../utils/list'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 'yy-gong-yi-huo-dong',
    active: 0,
    tabs: [],
    shows: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
  },

  getTabs() {
    const code = this.data.code
    getTopicChildData(code).then(res => {
      const tabs = res.result
      tabs.unshift({
        code: code,
        title: '全部'
      })
      this.setData({tabs}, () => {
        this.getShows()
      })
    })
  },

  getShows() {
    const active = this.data.active
    const code = this.data.tabs[active].code
    const shows = this.data.shows

    getByPage(code, this, shows).then(res => {
      const shows = res
      this.setData({shows})
    })
  },

  tabChange(e) {
    const active = e.detail
    this.setData({
      active,
      page: 0,
      shows: []
    })
    this.getShows()
  },

  toDetail(e) {
    const id = e.currentTarget.dataset.id 
    wx.navigateTo({
      url: './detail/detail?id=' + id,
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