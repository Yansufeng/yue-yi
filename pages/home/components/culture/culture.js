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
          name: '全部',
          code: '0'
        },
        {
          id: '1',
          name: '通知',
          code: '0'
        },
        {
          id: '2',
          name: '活动',
          code: '0'
        },
        {
          id: '3',
          name: '演出',
          code: '0'
        },
        {
          id: '4',
          name: '培训',
          code: '0'
        },
        {
          id: '5',
          name: '通2',
          code: '0'
        },
        {
          id: '6',
          name: '活2',
          code: '0'
        },
        {
          id: '7',
          name: '演2',
          code: '0'
        },
        {
          id: '8',
          name: '培2',
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
          title: '春风伏笔——公益书法行动2',
          loc: '永定区文化馆',
          date: '2023.06.21'
        },
        {
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          tag: '培训',
          tagType: 0,
          title: '春风伏笔——公益书法行动3',
          loc: '永定区文化馆',
          date: '2023.06.21'
        }
      ]
      this.setData({list})
    }
  }
})
