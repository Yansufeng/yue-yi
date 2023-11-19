// pages/column/media/media.js
import { getTopicChildData, getTopicResourceData } from '../../../apis/commonApi'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: false,
    code: 'yy-stjs-pei-xun-shi-zi',
    imgs: {
      cover: 'cover.png'
    },
    active: 0,
    tabs: [],
    teachers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initImgs()
    this.getTabs()
    // this.getTeachers()
    // this.getCourses()

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
    getTopicChildData(this.data.code).then(res => {
      const tabs = res.result 
      this.setData({tabs}, () => {
        this.getTeachers()
        this.getCourses()
      })
    })
  },

  getTeachers() {
    const active = this.data.active
    const code = this.data.tabs[active].code
    
    getTopicResourceData(code).then(res => {
      const teachers = res.result.records
      this.setData({teachers})
    })
  },

  getCourses() {
    const active = this.data.active
    const codeT = this.data.tabs[active].code 
    const codeList = codeT.split('-')
    const code = `${codeList[0]}-${codeList[1]}-xskc-${codeList[3]}-${codeList[4]}`

    getTopicResourceData(code).then(res => {
      const courses = res.result.records 
      this.setData({courses})
    })
  },

  onChange(e) {
    const active = e.detail 
    this.setData({active}, () => {
      this.getTeachers()
      this.getCourses()
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