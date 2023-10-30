// pages/column/book/list/listL.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getBooks()
  },

  getTabs() {
    const tabs = [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '小说传记'
      },
      {
        id: 2,
        name: '小说传记'
      },
      {
        id: 3,
        name: '小说传记'
      },
      {
        id: 4,
        name: '小说传记'
      },
    ]
    this.setData({tabs})
  },

  getBooks() {
    const books = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
        title: '无用之美',
        author: '林白',
        tag: '小说传记'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
        title: '无用之美',
        author: '林白',
        tag: '小说传记'
      },
    ]
    this.setData({ books })
  },

  toDetail(e) {
    const index = e.currentTarget.dataset.i
    
    wx.navigateTo({
      url: '/pages/column/book/detail/detailL',
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