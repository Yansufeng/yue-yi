// pages/map/branch/branch.js
import {initImgs} from '../.././../utils/init'
import{getEllipsis} from '../../../utils/string'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:{
      bkg:'cover.png',
    },
    adress:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    initImgs('/column/local/', this)
    this.getTitle()
  },
getTitle(){
const str='详细地址：湖南省张家界市永定区西溪坪街道永安中路永定区文体广电新闻出版局旁边'
const address= getEllipsis(str,31)
this.setData({address})
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