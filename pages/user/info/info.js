// pages/user/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    tel:"",
    name:"",
    type:"",
    id:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getUserInfo()
    console.log(this.data)
  },
  getUserInfo(){
    this.setData({
      username:"果果昔",
      tel:"132****0025",
      name:"李丽",
      type:"身份证",
      id:"4***01199905*****1",
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