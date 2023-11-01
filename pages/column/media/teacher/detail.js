// pages/column/media/teacher/detail.js
import { initImgs } from "../../../../utils/init";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: false,
    imgs: {
      cover: 'teacher-cover.png'
    },
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    initImgs('/column/media/', this)
    this.getInfo()
    this.setData({
      isInit: true
    })
  },

  getInfo() {
    const info = {
      id: 0,
      avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
      name: '张苏苏',
      tag: '舞蹈',
      content: '张苏，湖南省舞蹈家协会会员，曾任武警湖南总队政治部文工团主要演员，现任永定区文化馆培训部主任、舞蹈专干；从事舞蹈专业25年。\
                原创舞蹈：《百花盛开》《党旗颂》《荷》《带着幸福来见你》《春风是你》《莓茶姑娘嗓门亮》等；多次受邀参加北京、湖南、贵州、云南、河南等省市各大型文艺晚会，出访了香港、法国、泰国...'
    }
    this.setData({info})
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