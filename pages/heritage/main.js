// pages/heritage/main.js
import { initImgs } from "../../utils/init";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: false,
    active: 0,
    imgs: {
      bkg: 'bkg-main.png'
    },
    tabs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    initImgs('/heritage/', this)
    this.setData({
      isInit: true
    })
  },

  getTabs() {
    const tabs = [
      {
        id: 0,
        name: '非遗项目'
      },
      {
        id: 1,
        name: '非遗传承人'
      },
      {
        id: 2,
        name: '非遗动态'
      },
      {
        id: 3,
        name: '非遗文件'
      }
    ]
    this.setData({tabs})
  },

  tabChange(e) {
    const active = e.detail
    this.setData({active})
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