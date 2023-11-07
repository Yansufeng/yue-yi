// pages/home/components/culture/culture.js
import { getTopicChild, getTopicResource } from '../../../../apis/commonApi'  

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
    code: 'yy-wen-hua-re-dian',
    isInit: false,
    active: 0,
    tabs: [],
    tabsMap: new Map(),
    list: []
  },

  /**
   * 生命周期
   */
  lifetimes: {
    attached: function() {
      this.init()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      this.getTabs()
      this.setData({
        isInit: true
      })
    },

    getTabs() {
      const code = this.data.code
      getTopicChild(code).then(res => {
        const tabs = res.data.result
        tabs.unshift({
          title: '全部',
          code: code
        })
        this.setData({tabs})
        this.getList()
        // const tabsMap = this.data.tabsMap
        // tabs.forEach(item => {
        //   tabsMap.set('')
        // })
      })
    },

    getList() {
      const active = this.data.active
      const code = this.data.tabs[active].code
      const params = {
        pageSize: 3
      }
      getTopicResource(code, params).then(res => {
        const list = res.data.result.records
        list.map(item => {
          item.date = item.time.split(' ')[0]
        })
        this.setData({list})
        console.log(list)
      })
    },

    onTab(e) {
      const active = e.detail
      this.setData({active})
      this.getList()
    },
  }
})
