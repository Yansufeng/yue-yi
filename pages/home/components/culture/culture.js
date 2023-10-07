// pages/home/components/culture/culture.js
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
    isInit: false,
    active: '0',
    tabs: [],
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
      this.getList()
      this.setData({
        isInit: true
      })
    },

    getTabs() {
            const tabs = [
        {
          id: '0',
          title: '全部',
          code: '0'
        },
        {
          id: '1',
          title: '通知',
          code: '0'
        },
        {
          id: '2',
          title: '活动',
          code: '0'
        },
        {
          id: '3',
          title: '演出',
          code: '0'
        },
        {
          id: '4',
          title: '培训',
          code: '0'
        },
        {
          id: '1',
          title: '通知',
          code: '0'
        },
        {
          id: '2',
          title: '活动',
          code: '0'
        },
        {
          id: '3',
          title: '演出',
          code: '0'
        },
        {
          id: '4',
          title: '培训',
          code: '0'
        }
      ]
      this.setData({tabs})
    },

    getList() {
      const list = [
        {
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          tag: '培训',
          tagType: 0,
          title: '春风伏笔——公益书法行动',
          loc: '永定区文化馆',
          date: '2023.06.21'
        },
        {
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          tag: '培训',
          tagType: 0,
          title: '春风伏笔——公益书法行动',
          loc: '永定区文化馆',
          date: '2023.06.21'
        },
        {
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          tag: '培训',
          tagType: 0,
          title: '春风伏笔——公益书法行动',
          loc: '永定区文化馆',
          date: '2023.06.21'
        }
      ]
      this.setData({list})
    }
  }
})
