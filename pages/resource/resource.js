// pages/resource/resource.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cards: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getCards()
  },

  /**
   * 获取列表
   */
  getCards() {
    const cards = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/resource/book.png',
        title: '艺术图书',
        nav: 'nav2艺术图书'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/resource/music.png',
        title: '库克音乐',
        nav: 'nav2艺术图书'
      },
      {
        id: 2,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/resource/art.png',
        title: '爱艺术+',
        nav: 'nav2艺术图书'
      },
      {
        id: 3,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/resource/heritage.png',
        title: '非遗特色',
        nav: 'nav2艺术图书'
      },
      {
        id: 4,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/resource/party.png',
        title: '党建专题',
        nav: 'nav2艺术图书'
      },
      {
        id: 5,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/resource/resource.png',
        title: '资源访问',
        nav: 'nav2艺术图书'
      }
    ]
    this.setData({ cards })
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
        active: 2
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