// pages/user/user.js
const app = getApp()
import {getUserinfo} from '../../apis/user'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowSignin: false,
    isLogin: false,
    info: {
      name: '',
      avatar: '',
      check: 0
    },
    btns: [],
    navs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInfo()
    this.getBtns()
    this.getNavs()
  },

  getBtns() {
    const btns = [
      {
        id: 0,
        icon: 'order.png',
        title: '我的预约',
        path: '/pages/user/order/order'
      },
      {
        id: 1,
        icon: 'ticket.png',
        title: '我的订票',
        path: '/pages/user/ticket/ticket'
      },
      {
        id: 2,
        icon: 'point.png',
        title: '我的积分',
        path: '/pages/user/point/point'
      },
      {
        id: 3,
        icon: 'collect.png',
        title: '我的收藏',
        path: '/pages/user/collect/collect'
      }
    ]

    const base = app.globalData.globalImgUrl + '/user/'
    btns.map(item => {
      item.icon = base + item.icon
    })
    
    this.setData({btns})
  },

  getInfo() {
    // const info = {
    //   name: '果果昔',
    //   avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
    //   check: 7
    // }
    getUserinfo().then(res => {
      console.log(res)
      this.setData({
        isLogin:true,
        info:{
          name:res.result.username,
          avatar:res.result.profile,
        }
      })
    }).catch(e => {
      this.setData({isLogin:false})
    })
    
  },

  getNavs() {
    const navs = [
      {
        id: 0,
        icon: 'user-setting',
        title: '个人信息',
        path: ''
      },
      {
        id: 1,
        icon: 'store',
        title: '积分商城',
        path: '/pages/user/mall/mall'
      },
      {
        id: 2,
        icon: 'chat-bubble-1',
        title: '意见反馈',
        path: ''
      },
      {
        id: 3,
        icon: 'call-1',
        title: '联系我们',
        path: ''
      },
    ]
    this.setData({navs})
  },

  toDetail(e){
    const path = e.currentTarget.dataset.path
    if(path.length > 0){
      wx.navigateTo({
        url: path,
      })
    }
  },

  onBtn(e) {
    const path = e.currentTarget.dataset.path
    wx.navigateTo({
      url: path,
    })
  },

  toLogin() {
    wx.navigateTo({
      url: '/pages/user/login/login',
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
        active: 3
      })
    }
    // 获取用户信息，检验是否登录
    this.getInfo()
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