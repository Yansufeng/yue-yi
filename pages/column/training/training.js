// pages/column/training/training.js
import { getTopicResourceData } from '../../../apis/commonApi'
import { formatTime } from '../../../utils/string'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:'yy-yi-shu-pei-xun',
    tranningList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList()
  },
toDetail(e){
  const id = e.currentTarget.dataset.id
  wx.navigateTo({
    url: `/pages/column/training/detail/detail?id=${id}`,
  })
},
getList(){
    getTopicResourceData(this.data.code).then((res)=>{
      const list = res.result.records
      const now = Date.now();
      const newlist=list.map((item)=>{
        item.isExpired = now >item.extern.signUpEndTime        
        item.signUpStartTime = formatTime(new Date( item.extern.signUpStartTime))          
        if(!item.isExpired){
          item.isRollUp=now > item.extern.signUpStartTime
        }      
        return item
      })
       this.setData({tranningList:newlist})
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