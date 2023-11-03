// pages/column/activity/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      name: '体验余音绕梁的声乐之美讲座',
      cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
      date: '2023.06.10  09:00-10:00',
      tel: '(0744)8596688',
      loc: '张家界市永定区文化馆',
      content: '为广大文化爱好者搭建了学习、创作、表演的平台，提高新时代文化馆的公众知晓度和社会影响力，激发新时代文化馆的新活力，让更多群众认识、了解群众文化，让文化惠民走进千家万户，让文化馆成为感受艺术、体验艺术、创造艺术，享受美好生活的好去处，不断增强人民群众的获得感、幸福感、成就感。举办文化馆服务宣传周活动。'
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