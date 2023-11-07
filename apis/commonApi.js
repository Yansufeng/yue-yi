const app = getApp()
const baseUrl = app.globalData.globalRequestUrl

const getAction = function(url, config = {}) {
  config.headers = config.headers || {}
  // const token = localStorage.getItem('token')
  // if(token){
  //   config.headers['X-User-Token'] = token
  // }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'GET',
      data: config.params,
      header: config.headers,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

const getTopicChild = function(code) {
  const url = `${baseUrl}/party/open/topic/${code}/child`

  return getAction(url)
}

const getTopicResource = function(code, params = {}) {
  const url = `${baseUrl}/party/open/topic/${code}/page`

  return getAction(url, {params})
}

module.exports = {
  getAction,
  getTopicChild,
  getTopicResource
}
