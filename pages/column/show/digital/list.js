// pages/column/show/digital/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 'yy-whzl-shu-zi-zhan-ting',
    tabs: [],
    exhibits: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getExhibits()
  },

  getTabs() {
    const tabs =[
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '分类'
      },
      {
        id: 2,
        name: '分类'
      },
      {
        id: 3,
        name: '分类'
      },
      {
        id: 4,
        name: '分类'
      },
    ]
    this.setData({tabs})
  },

  getExhibits() {
    const exhibits = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '土家族织锦技艺'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '土家族织锦技艺'
      },
      {
        id: 2,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '土家族织锦技艺'
      },
      {
        id: 3,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '土家族织锦技艺'
      },
      {
        id: 4,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '土家族织锦技艺'
      },
      {
        id: 5,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '土家族织锦技艺'
      },
    ]

    this.setData({ exhibits })
  },

  toDetail(e) {
    const i = e.currentTarget.dataset.i
    const exhibit = this.data.exhibits[i]

    wx.navigateTo({
      url: '/pages/column/show/digital/detail',
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