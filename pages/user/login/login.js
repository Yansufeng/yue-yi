// pages/user/login/login.js
import { getUuid } from '../../../utils/string'
import { getImgTest, getCode, doLoginByWx, doLoginByWxWithPhone } from '../../../apis/user'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    proOn: false,
    showGetPhone: false,
    key: '',
    imgTest: '',
    phone: '',
    imgTestCode: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getImgTest()
  },

  getImgTest() {
    const key = getUuid()
    getImgTest(key).then(res => {
      const imgTest = res.result 
      this.setData({
        imgTest,
        key
      })
    })
  },

  onImgTest() {
    this.getImgTest()
  },

  onPro() {
    const proOn = !this.data.proOn 
    this.setData({proOn})
  },

  onGetCode() {
    const phone = this.data.phone
    const code = this.data.imgTestCode
    const key = this.data.key

    if(phone == '') {
      wx.showModal({
        title: '提示',
        content: '请先输入手机号'
      })
      return
    }

    if(code == '') {
      wx.showModal({
        title: '提示',
        content: '请先输入图形验证码'
      })
      return
    }

    const data = {
      key,
      value: code
    }

    getCode(phone, data).then(res => console.log(res))
  },

  onLogin() {
    if(!this.data.proOn) {
      wx.showModal({
        title: '提示',
        content: '请先阅读并同意相关协议'
      })
      return
    }
  },

  onWxLogin() {
    wx.login({
      success: (res) => {
        const code = res.code
        console.log(code)
        doLoginByWx(code).then(res => {
          console.log(res)
          const message = res.data.message 
          const wxGetPhoneToken = message.split('rid: ')[1]
          const success = res.data.success 
          if(success) {
            return
          }
          this.setData({
            showGetPhone: true,
            wxGetPhoneToken
          })
        })
      },
    })
  },

  getPhone(e) {
    const code = e.detail.code
    const data = {
      openidToken: {
        token: this.data.wxGetPhoneToken
      },
      wxGetPhone: {
        code: code
      }
    }
    doLoginByWxWithPhone(data).then(res => console.log(res))
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