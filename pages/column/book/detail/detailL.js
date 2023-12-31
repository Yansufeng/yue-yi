// pages/column/book/detail/detailL.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInfo()
  },

  getInfo() {
    const info = {
      id: 0,
      cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/column/book/book.png',
      title: '无用之美',
      des: '这是一个后真相时代，我们对于何为真实的判断暧昧晦暗。现代社会庞大的信息数据网络，除了如同迷魂阵令人难辨真假，也如同牢笼将我们封锁其中。回顾来路，20世纪的变革既漫长又短暂，一方面，科学的迅速发展建立起现代人膨胀的...'
    }
    this.setData({info})
  },

  onTab(e) {
    const active = e.currentTarget.dataset.i 
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