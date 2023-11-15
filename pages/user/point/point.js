// pages/user/point/point.js
import { getPointHis } from '../../../apis/user'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tabs: [],
    // his: [],
    // hisA: [],
    // hisS: [],
    his: [[], [], []],
    page: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTabs()
    this.getList()
  },

  getTabs() {
    const tabs = [
      {
        id: 0,
        title: '全部积分'
      },
      {
        id: 1,
        title: '已获取'
      },
      {
        id: 2,
        title: '已使用'
      },
    ]

    this.setData({tabs})
  },

  getList() {
    const page = this.data.page + 1
    const params = {
      pageNum: page
    }

    getPointHis(params).then(res => {
      const list = res.result.records
      let his = this.data.his

      list.map(e => {
        e.date = e.date.split(' ')[0]
        if(e.points < 0) {
          e.type = 'sub'
          his[2].push(e)
        }else{
          e.type = 'add'
          his[1].push(e)
        }
      })
      his[0] = his[0].concat(...list)

      this.setData({his})
    })
  },

  onChange(e){
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