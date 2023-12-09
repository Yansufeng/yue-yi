// pages/column/book/list/listL.js
import { getTopicChildData, getTopicResourceData } from '../../../../apis/commonApi'
import { getByPage } from '../../../../utils/list'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 'yy-hstj-szts',
    active: 0,
    tabs: [],
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
  },

  getTabs() {
    getTopicChildData(this.data.code).then(res => {
      const tabs = res.result
      this.setData({ tabs })
    }).then(() => {
      this.getBooks()
    })
  },

  getBooks() {
    const code = this.data.tabs[this.data.active].code

    getByPage(code, this, this.data.books).then(books => this.setData({books}))
  },

  onTab(e) {
    const active = e.detail
    if(active == this.data.active) return
    this.setData({ active })
    this.setData({ books: [] })
    this.getBooks()
  },

  toDetail(e) {
    const id = e.currentTarget.dataset.id
    
    wx.navigateTo({
      url: '/pages/column/book/detail/detailL?id=' + id,
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