// pages/column/media/media.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: false,
    imgs: {
      cover: 'cover.png'
    },
    tabs: [],
    teachers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initImgs()
    this.getTabs()
    this.getTeachers()
    this.getCourses()

    this.setData({
      isInit: true
    })
  },

  initImgs() {
    let base = app.globalData.globalImgUrl + '/column/media/'

    let imgs = this.data.imgs
    for(let i in imgs) {
      imgs[i] = base + imgs[i]
    }
    this.setData({imgs})
  },

  getTabs() {
    const tabs = [
      {
        id: 0,
        code: '',
        name: '舞蹈'
      },
      {
        id: 1,
        code: '',
        name: '声乐'
      },
      {
        id: 2,
        code: '',
        name: '声乐'
      },
      {
        id: 3,
        code: '',
        name: '声乐'
      },
      {
        id: 4,
        code: '',
        name: '声乐'
      },
      {
        id: 5,
        code: '',
        name: '声乐'
      },
      {
        id: 6,
        code: '',
        name: '声乐'
      },
      {
        id: 7,
        code: '',
        name: '声乐'
      },
    ]
    this.setData({tabs})
  },

  getTeachers() {
    const teachers = [
      {
        id: 0,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 1,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 2,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 3,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 4,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
      {
        id: 5,
        avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
        name: '张苏苏'
      },
    ]
    this.setData({teachers})
  },

  getCourses() {
    const courses = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
      {
        id: 2,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
      {
        id: 3,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '摆手舞教学（一）',
        teacher: '张苏苏'
      },
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