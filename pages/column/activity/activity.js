// pages/column/activity/activity.js
import { getTopicChildData, getTopicResourceData } from '../../../apis/commonApi'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 'yy-gong-yi-huo-dong',
    active: 0,
    page: 0,
    tabs: [],
    shows: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getShows()
  },

  getTabs() {
    const code = this.data.code
    getTopicChildData(code).then(res => {
      const tabs = res.result
      tabs.unshift({
        code: code,
        title: '全部'
      })
      this.setData({tabs})
    }).then(() => {
      this.getShows()
    })
  },

  getShows() {
    const active = this.data.active
    const page = this.data.page + 1
    const code = this.data.tabs[active]
    const params = {
      page: page,
      pageSize: 5
    }

    getTopicResourceData(code, params).then(res => {
      const shows = res.result.records
      this.setData({
        shows: this.data.shows.concat(...shows),
        page: page
      })
      console.log(shows)
    })
    // const shows = [
    //   {
    //     id: 0,
    //     cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
    //     title: '体验余音绕梁的声乐之美讲座',
    //     date: '2023.06.10',
    //     time: '09:00-10:00',
    //     loc: '张家界市永定区文化馆',
    //     status: 0
    //   },
    //   {
    //     id: 1,
    //     cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
    //     title: '体验余音绕梁的声乐之美讲座',
    //     date: '2023.06.10',
    //     time: '09:00-10:00',
    //     loc: '张家界市永定区文化馆',
    //     status: 1
    //   },
    //   {
    //     id: 2,
    //     cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
    //     title: '体验余音绕梁的声乐之美讲座',
    //     date: '2023.06.10',
    //     time: '09:00-10:00',
    //     loc: '张家界市永定区文化馆',
    //     status: 2
    //   }
    // ]
    
  },

  tabChange(e) {
  },

  toDetail(e) {
    const i = e.currentTarget.dataset.i 
    wx.navigateTo({
      url: './detail/detail',
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