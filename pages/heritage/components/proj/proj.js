// pages/heritage/components/proj/proj.js
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
    swiperList: [],
    tabs: [],
    projs: []
  },

  lifetimes: {
    attached() {
      this.getSwiperList()
      this.getTabs()
      this.getProjs()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSwiperList() {
      const swiperList = [
        "https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png",
        "https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png"
      ]
      this.setData({swiperList})
    },

    getTabs() {
      const tabs = [
        {
          id: 0,
          name: '国家级'
        },
        {
          id: 1,
          name: '省级'
        },
        {
          id: 2,
          name: '市级'
        },
        {
          id: 3,
          name: '永定区级'
        },
      ]
      this.setData({ tabs })
    },

    getProjs() {
      const projs = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          type: '民俗',
          title: '龙舞（板板龙灯）',
          des: '土家族撒叶儿嗬，汉族称“跳丧”，又叫“打丧鼓”。是土...'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          type: '民俗',
          title: '龙舞（板板龙灯）',
          des: '土家族撒叶儿嗬，汉族称“跳丧”，又叫“打丧鼓”。是土...'
        },
        {
          id: 2,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          type: '民俗',
          title: '龙舞（板板龙灯）',
          des: '土家族撒叶儿嗬，汉族称“跳丧”，又叫“打丧鼓”。是土...'
        },
      ]
      this.setData({ projs })
    }
  }
})