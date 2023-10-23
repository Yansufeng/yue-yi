// pages/column/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cover: '',
    recommends: [],
    listeners: [],
    readers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCover()
    this.getRecommends()
    this.getListeners()
    this.getReaders()
  },

  getCover() {
    const cover = 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/bkg.png'
    this.setData({cover})
  },

  getRecommends() {
    const recommends = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png'
      }
    ]
    this.setData({recommends})
  },

  getListeners(){
    const listeners = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
        title: '红色纪实'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
        title: '红色纪实'
      },
      {
        id: 2,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
        title: '红色纪实'
      },
      {
        id: 3,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
        title: '红色纪实'
      },
    ]
    this.setData({listeners})
  },

  getReaders() {
    const readers = [
      {
        code: 0,
        title: '畅销图书'
      },
      {
        code: 1,
        title: '畅销图书'
      },
      {
        code: 2,
        title: '畅销图书'
      },
      {
        code: 3,
        title: '畅销图书'
      },
      {
        code: 4,
        title: '畅销图书'
      },
      {
        code: 5,
        title: '畅销图书'
      },
    ]

    this.setData({readers})
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