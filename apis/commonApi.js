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

module.exports = {
  getAction
}
