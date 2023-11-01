// pages/column/training/training.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tranningList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList()
  },

  getList(){
    const list = [
      {
        id: 0,
        code: '',
        name: '悦艺益课堂·公益惠民土家族民族舞蹈培训',
        img:'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png',
        time:'2028.06.23 10:00'
      },
      {
        id: 1,
        code: '',
        name: '悦艺益课堂·公益惠民土家族民族舞蹈培训',
        img:'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png',
        time:'2023.06.23 10:00'
      },
      {
        id: 2,
        code: '',
        name: '悦艺益课堂·公益惠民土家族民族舞蹈培训',
        img:'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png',
        time:'2023.06.23 10:00'
      },
      {
        id: 3,
        code: '',
        name: '悦艺益课堂·公益惠民土家族民族舞蹈培训',
        img:'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png',
        time:'2023.06.23 10:00'
      },
      {
        id: 4,
        code: '',
        name: '悦艺益课堂·公益惠民土家族民族舞蹈培训',
        img:'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png',
        time:'2023.06.23 10:00'
      }
    ]
    const now = Date.now();
    const newlist=list.map((item)=>{
      console.log(item)
      item.isExpired = now > +new Date(item.time.replace(/\./g, '/'));
      return item;
    })
    this.setData({tranningList:newlist})
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