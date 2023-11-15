import { getAction } from './commonApi'

const app = getApp()
const baseUrl = app.globalData.globalRequestUrl

const handleResult = function(res){
    const code = res.data.code
    if(code !== 200 && code !== 0) throw new Error(res.data.message)
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

module.exports = {
  getPointInfo,
  getPointHis
}
