// pages/column/volunteer/components/news/news.js
import { getTopicResourceData } from '../../../../../apis/commonApi'
import { getByPage } from '../../../../../utils/list'

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
    code: 'yy-zyzfc-zhi-yuan-zi-xun',
    list: []
  },

  lifetimes: {
    attached() {
      this.getList()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getList() {
      getByPage(this.data.code, this, this.data.list).then(list => {
        list.map(item => {
          item.date = item.time.split(' ')[0]
        })
        
        this.setData({list})
      })
      // getTopicResourceData(this.data.code)
    }
  }
})