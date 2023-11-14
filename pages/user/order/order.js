// pages/user/order/order.js
import { initImgs } from '../../../utils/init'
import { getEllipsis } from '../../../utils/string'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    list: [],
    imgs: {
      bkg: 'bkg-ticket.png'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    initImgs('/user/info/', this)
    this.getTabs()
    this.getList()
  },

  getTabs() {
    const tabs = [
      {
        id: 0,
        title: '个人预约'
      },
      {
        id: 1,
        title: '团队预约'
      },
      {
        id: 2,
        title: '机构预约'
      }
    ]
    this.setData({tabs})
  },

  getList() {
    const list = [
      {
        id: 0,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '永定区非物质文化遗产展示馆',
        date: '2023-06-04',
        time: '09:00-12:00',
        status: '已通过'
      },
      {
        id: 1,
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        title: '永定区非物质文化遗产展示馆',
        date: '2023-06-04',
        time: '09:00-12:00',
        status: '已通过'
      },
    ]
    list.map(item => {
      item.title = getEllipsis(item.title, 10)
    })
    this.setData({list})
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