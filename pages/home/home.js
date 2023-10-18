// pages/home/home.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: false,
    logo: {
      top: 0,
      height: 0,
      left: 0
    },
    imgs: {
      logo: 'logo.png', 
      bkg: 'bkg.png',
      map: 'map.png'
    }
    // imgMap: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.init()
  },

  /**
   * 初始化相关数据
   */
  init() {
    const capsule = wx.getMenuButtonBoundingClientRect()
    const windowW = wx.getSystemInfoSync().windowWidth
    const logo = {
      top: capsule.top,
      height: capsule.height,
      left: windowW - capsule.right
    }
    this.setData({logo})

    const baseUrl = app.globalData.globalImgUrl + '/home/'
    // const imgMap = new Map([
    //   ['logo', 'logo.png'], 
    //   ['bkg','bkg.png']
    // ])
    // imgMap.forEach((v, k) => {
    //   imgMap.set(k, baseUrl + v)
    // })
    // this.setData({imgMap})
    const imgs = this.data.imgs
    for(let k in imgs) imgs[k] = baseUrl + imgs[k]
    this.setData({imgs})

    this.setData({
      isInit: true
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 0
      })
    }
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