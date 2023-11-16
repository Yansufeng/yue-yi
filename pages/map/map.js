// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0,
    tabs: [],
    activeSubtab: 0,
    subtabs: [],
    cards: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getSubtabs()
    this.getCards()
  },

  getTabs() {
    const tabs = [
      {
        code: '0',
        title: '文化'
      }, 
      {
        code: '1',
        title: '体育'
      },
      {
        code: '2',
        title: '图书'
      }, 
      {
        code: '3',
        title: '美术'
      }, 
      {
        code: '4',
        title: '文博'
      }
    ]
    this.setData({tabs})
  },

  getSubtabs() {
    const subtabs = [
      {
        code: '0',
        title: '场馆'
      }, 
      {
        code: '1',
        title: '活动'
      }
    ]
    this.setData({subtabs})
   
  },

  getCards() {
    const cards = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '张家界市永定区文化馆',
        time: '开放时间：周一至周五09:00-17:00',
        dis: 1.13
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '张家界市永定区文化馆',
        time: '开放时间：周一至周五09:00-17:00',
        dis: 1.13
      },
      {
        id: 2,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '张家界市永定区文化馆',
        time: '开放时间：周一至周五09:00-17:00',
        dis: 1.13
      },
      {
        id: 3,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '张家界市永定区文化馆',
        time: '开放时间：周一至周五09:00-17:00',
        dis: 1.13
      }
    ]

    this.setData({cards})
  },

  onTab(e) {
    const activeTab = e.currentTarget.dataset.index
    this.setData({activeTab})
  },

  onSubtab(e) {
    const activeSubtab = e.currentTarget.dataset.index
    this.setData({activeSubtab})

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  toDetail(){
    console.log(this.data.activeSubtab)
    if(this.data.activeSubtab==0){      
      wx.navigateTo({
        url: '/pages/map/branch/branch',
      })
    }
    if(this.data.activeSubtab==1){
      wx.navigateTo({
        url: '/pages/map/activity/activity',
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        active: 1
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