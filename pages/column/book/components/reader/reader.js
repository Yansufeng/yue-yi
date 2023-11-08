// pages/column/book/components/reader/reader.js
import { getTopicChildData, getTopicResourceData } from '../../../../../apis/commonApi'
import { getEllipsis } from '../../../../../utils/string'

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
    active: 0,
    code: 'yy-hao-shu-tui-jian',
    tabs: [],
    books: []
  },

  lifetimes: {
    attached() {
      this.getTabs()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTabs() {
      const code = this.data.code
      getTopicChildData(code).then(res => {
        const tabs = res.result
        tabs.unshift({
          title: '全部',
          code: code
        })
        this.setData({tabs})
      }).then(() => {
        this.getBooks()
      })
    },

    getBooks() {
      const active = this.data.active
      const code = this.data.tabs[active].code
      const params = {
        pageSize: 9
      }
      getTopicResourceData(code, params).then(res => {
        const books = res.result.records
        books.map(item => {
          item.title = getEllipsis(item.title, 6)
        })
        this.setData({books})
      })
    },

    onTab(e) {
      const i = e.currentTarget.dataset.i
      const active = i
      this.setData({active})
      this.getBooks()
    },

    toDetail() {
      wx.navigateTo({
        url: '/pages/column/book/detail/detail',
      })
    },

    toMore() {
      wx.navigateTo({
        url: '/pages/column/book/list/list',
      })
    }
  }
})