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

const handleResult = function(res){
    const code = res.data.code
    if(code !== 200 && code !== 0) throw new Error(res.data.message)
    return res.data
}

// 获取code下的分类信息 -> 用于检索标签
const getTopicChild = function(code) {
  const url = `${baseUrl}/party/open/topic/${code}/child`

  return getAction(url)
}

const getTopicChildData = function(code) {
  return getTopicChild(code).then(res => handleResult(res))
}

// 按code获取资源
const getTopicResource = function(code, params = {}) {
  const url = `${baseUrl}/party/open/topic/${code}/page`

  return getAction(url, {params})
}

const getTopicResourceData = function(code, params = {}) {
  return getTopicResource(code, params).then(res => handleResult(res))
}

module.exports = {
  getAction,
  getTopicChild,
  getTopicResource,
  getTopicChildData,
  getTopicResourceData
}
