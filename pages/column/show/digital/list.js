// pages/column/show/digital/list.js
import { getByPage } from '../../../../utils/list'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 'yy-whzl-shu-zi-zhan-ping',
    // tabs: [],
    exhibits: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.getTabs()
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
    getByPage(this.data.code, this, this.data.exhibits).then(exhibits => this.setData({ exhibits }))
  },

  toDetail(e) {
    const id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: '/pages/column/show/digital/detail?id=' + id,
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