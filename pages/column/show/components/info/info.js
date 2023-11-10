// pages/column/show/components/info/info.js
import { getTopicResourceData } from '../../../../../apis/commonApi'

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    code: 'yy-whzl-zhan-lan-zi-xun',
    info: []
  },

  lifetimes: {
    attached() {
      this.getInfo()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getInfo() {
      const params = {
        pageSize: 4
      }
      getTopicResourceData(this.data.code, params).then(res => {
        const info = res.result.records
        this.setData({info})
      })
    }
  }
})