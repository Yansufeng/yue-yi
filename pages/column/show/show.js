// pages/column/show/show.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiper()
    this.getNavs()
  },

  getSwiper() {
    const swiper = [
      'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
      'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
      'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png'
    ]
    this.setData({swiper})
  },

  getNavs() {
    const base = app.globalData.globalImgUrl + '/column/show/'
    const navs = [
      {
        id: 0,
        cover: base + 'info.png',
        name: '展览资讯',
        path: ''
      },
      {
        id: 1,
        cover: base + 'hall.png',
        name: '数字展厅',
        path: ''
      },
      {
        id: 2,
        cover: base + 'exhibits.png',
        name: '数字展品',
        path: '/pages/column/show/digital/list'
      },
    ]
    this.setData({ navs })
  },

  toDigitalList(e) {
    const i = e.currentTarget.dataset.i
    const path = this.data.navs[i].path 

    wx.navigateTo({
      url: path,
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