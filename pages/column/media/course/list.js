// pages/column/media/course/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    courses: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getCourses()
  },

  getTabs() {
    const tabs = [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '舞蹈'
      },
      {
        id: 2,
        name: '舞蹈'
      },
      {
        id: 3,
        name: '舞蹈'
      },
      {
        id: 4,
        name: '舞蹈'
      },
      {
        id: 5,
        name: '舞蹈'
      },
      {
        id: 6,
        name: '舞蹈'
      },
    ]
    this.setData({tabs})
  },

  getCourses() {
    const courses = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
      {
        id: 2,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
      {
        id: 3,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
      {
        id: 4,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        name: '摆手舞教学（一）',
        teacher: '张苏苏'
      }
    ]
    this.setData({courses})
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