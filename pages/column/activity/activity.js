// pages/column/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    shows: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getShows()
  },

  getTabs() {
    const tabs = [
      {
        id: 0,
        code: '',
        name: '全部'
      },
      {
        id: 1,
        code: '',
        name: '演出'
      },
      {
        id: 2,
        code: '',
        name: '演出'
      },
      {
        id: 3,
        code: '',
        name: '演出'
      },
      {
        id: 4,
        code: '',
        name: '演出'
      },
      {
        id: 5,
        code: '',
        name: '演出'
      },
      {
        id: 6,
        code: '',
        name: '演出'
      },
      {
        id: 7,
        code: '',
        name: '演出'
      },
    ]
    this.setData({tabs})
  },

  getShows() {
    const shows = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '体验余音绕梁的声乐之美讲座',
        date: '2023.06.10',
        time: '09:00-10:00',
        loc: '张家界市永定区文化馆',
        status: 0
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '体验余音绕梁的声乐之美讲座',
        date: '2023.06.10',
        time: '09:00-10:00',
        loc: '张家界市永定区文化馆',
        status: 1
      },
      {
        id: 2,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '体验余音绕梁的声乐之美讲座',
        date: '2023.06.10',
        time: '09:00-10:00',
        loc: '张家界市永定区文化馆',
        status: 2
      }
    ]
    this.setData({shows})
  },

  tabChange(e) {
    console.log(e)
  },

  toDetail(e) {
    const i = e.currentTarget.dataset.i 
    wx.navigateTo({
      url: './detail/detail',
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