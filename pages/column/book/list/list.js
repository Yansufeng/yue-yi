// pages/column/book/list/list.js
import { getTopicChildData, getTopicResourceData } from '../../../../apis/commonApi'
// import { getEllipsis } from '../../../../utils/string'
import { getByPage } from '../../../../utils/list'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    code: 'yy-hao-shu-tui-jian',
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
    const code = this.data.code

    getTopicChildData(code).then(res => {
      const tabs = res.result
      tabs.unshift({
        title: '全部',
        code: code
      })
      this.setData({tabs})
    }).then(() => this.getBooks())
  },

  getBooks() {
    const code = this.data.tabs[this.data.active].code

    getByPage(code, this, this.data.books).then(books => {
      // books.map(item => {
      //   item.title = getEllipsis(item.title, 6)
      // })
      this.setData({books})
    })
  },

  onTab(e) {
    const active = e.detail 
    this.setData({
      active,
      books: []
    })
    this.getBooks()
  },

  toDetail(e) {
    const index = e.currentTarget.dataset.i
    
    wx.navigateTo({
      url: '/pages/column/book/detail/detail',
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
    this.getBooks()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})