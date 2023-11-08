// pages/column/book/components/recommend/recommend.js
import { getTopicResource } from '../../../../../apis/commonApi'

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
    code: 'yy-hao-shu-tui-jian'
  },

  lifetimes: {
    attached() {
      this.getBooks()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBooks() {
      const params = {
        pageSize: 2
      }
      getTopicResource(this.data.code, params).then(res => {
        const books = res.data.result.records
        this.setData({books})
      })
    },

    toDetail(e) {
      const index = e.currentTarget.dataset.i
      
      wx.navigateTo({
        url: '/pages/column/book/detail/detail',
      })
    },
  }
})