// pages/user/login/login.js
import { getUuid } from '../../../utils/string'
import { getImgTest, getCode, doLoginByWx, doLoginByWxWithPhone,doLogin } from '../../../apis/user'

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
    imgTestCode: '',
    smsCode:'',
    openidToken:{}
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

    getCode(phone, data).then(res => {
      // 设置倒计时
    }).catch(() => { // 出错后重新请求新验证码
      this.getImgTest()
    })
  },

  onLogin() {
    if(!this.data.proOn) {
      wx.showModal({
        title: '提示',
        content: '请先阅读并同意相关协议'
      })
      return
    }
    // 获取表单内容
    const data = {
      account: this.data.phone,
      captcha: {
        key: this.data.key,
        value: this.data.imgTestCode
      },
      smsCode: this.data.smsCode,
      autoRegister: true,
      smsLogin: true
    }
    // 发送到服务器请求登录
    doLogin(data).then(res => {
      console.log(res)
      // 登录成功 设置token并后退一页
      wx.setStorageSync('X-User-Token', res.result)
      wx.navigateBack()
    })
  },

  onWxLogin() {
    wx.login({
      success: (res) => {
        const code = res.code
        console.log(code)
        doLoginByWx(code).then(res => {
          console.log(res)
          // 如果后台显示登录成功，则 设置token并后退一页
          if(res.result.loginSuccess){
            wx.setStorageSync('X-User-Token', res.result.token)
            wx.navigateBack()
            return
          }
          // 如果登录失败，看是否需要注册,如需注册，发起手机号注册流程
          if(res.result.needRegister){
            this.setData({
              openidToken:res.result.openidToken,
              showGetPhone: true,
            })
            return
          }
          wx.showModal({
            title: '登录识别',
            content: res.result.message
          })
        })
      },
    })
  },

  getPhone(e) {
    const code = e.detail.code
    const data = {
      openidToken: this.data.openidToken,
      wxGetPhone: {
        code: code
      }
    }
    doLoginByWxWithPhone(data).then(res => {
      wx.setStorageSync('X-User-Token', res.result)
      wx.navigateBack()
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