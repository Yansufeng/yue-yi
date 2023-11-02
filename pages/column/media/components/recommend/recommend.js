// pages/column/media/components/recommend/recommend.js
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
    courses: []
  },

  lifetimes: {
    attached() {
      this.getCourses()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getCourses() {
      const courses = [
        {
          id: 0,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          name: '摆手舞教学（一）',
          teacher: '张苏苏'
        },
        {
          id: 1,
          cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
          name: '摆手舞教学（一）',
          teacher: '张苏苏'
        }
      ]
      this.setData({courses})
    }
  }
})