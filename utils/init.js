const app = getApp()
const base = app.globalData.globalImgUrl

const initImgs = (url, _this) => {
  const _base = base + url

  let imgs = _this.data.imgs || {}
  for(let i in imgs) {
    imgs[i] = _base + imgs[i]
  }
  _this.setData({imgs})
}

module.exports = {
  initImgs
}
