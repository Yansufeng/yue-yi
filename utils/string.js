const getEllipsis = function(str, len) {
  if(str.length < len) return str
  return str.slice(0, len) + '...'
}

const getDateS = function(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  return `${[year, month, day].map(formatNumber).join('.')} ${[hour, minute].map(formatNumber).join(':')}`
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const getUuid = () => {
  const str = []
  const hex = '0123456789abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i < 16; i++) {
    str.push(hex.substr(Math.floor(Math.random() * 36), 1))
  }
  return str.join('')
}

module.exports = {
  getEllipsis,
  getDateS,
  getUuid,
  formatTime
}
