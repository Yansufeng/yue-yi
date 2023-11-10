// pages/column/show/components/local/local.js
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
    code: 'yy-whzl-xian-xia-zhan-lan',
    shows: []
  },

  lifetimes: {
    attached: function () {
      this.getShows()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getShows() {
      const params = {
        pageSize: 4
      }
      getTopicResourceData(this.data.code, params).then(res => {
        const shows = res.result.records
        this.setData({shows})
      })
    }
  }
})