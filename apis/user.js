import { getAction, postAction } from './commonApi'

const app = getApp()
const baseUrl = app.globalData.globalRequestUrl
const appName = 'zjj_yue_yi'

const handleResult = function(res){
    const code = res.data.code
    if(code !== 200 && code !== 0){
      wx.showModal({
        title: '提示',
        content: res.data.message
      })
      throw new Error(res.data.message)
    }
    return res.data
}

const getPointInfo = function() {
  const url = `${baseUrl}/party/open/user/point/simple`
  
  return getAction(url).then(res => handleResult(res))
}

const getPointHis = function(params = {}) {
  const url = `${baseUrl}/party/open/user/point/history`

  return getAction(url, {params}).then(res => handleResult(res))
}

const doSignin = function () {
  const url = `${baseUrl}/party/open/user/sign-in`
  return postAction(url).then(res => handleResult(res))
}

const getCode = function(phone, data) {
  const url = `${baseUrl}/party/open/user/sms-code?phone=${phone}`
  console.log('getcode')
  return postAction(url, data).then(res => handleResult(res))
}

const getImgTest = function (key) {
  const url = `${baseUrl}/party/open/user/captcha/${key}`
  return getAction(url).then(res => handleResult(res))
}

const doLoginByWx = function(code) {
  const url = `${baseUrl}/party/open/user/wx/login/code2session?app=${appName}&code=${code}`
  return getAction(url).then(res => handleResult(res))
}

const doLoginByWxWithPhone = function(data) {
  const url = `${baseUrl}/party/open/user/wx/login/phone?app=${appName}`
  return postAction(url, data).then(res => handleResult(res))
}

const doLogin = function(data){
  const url = `${baseUrl}/party/open/user/login`
  return postAction(url,data).then(res => handleResult(res))
}

const getUserinfo = function(){
  const url = `${baseUrl}/party/open/user/userinfo`
  return getAction(url).then(res => handleResult(res))
}

module.exports = {
  getPointInfo,
  getPointHis,
  doSignin,
  getImgTest,
  getCode,
  doLoginByWx,
  doLoginByWxWithPhone,
  doLogin,
  getUserinfo
}
