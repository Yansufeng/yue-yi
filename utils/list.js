import { getTopicResourceData } from '../apis/commonApi'

const getByPage = function(code, _this, list) {
  const page = _this.data.page + 1 || 0
  const pageSize = 5
  const params = {
    page,
    pageSize
  }

  return getTopicResourceData(code, params).then(res => {
    const data = res.result.records
    _this.setData(page)
    return list.concat(...data)
  })
}

module.exports = {
  getByPage
}
