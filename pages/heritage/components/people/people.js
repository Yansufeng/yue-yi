// pages/heritage/components/people/people.js
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
    tabs: [],
    people: []
  },

  lifetimes: {
    attached() {
      this.getTabs()
      this.getPeople()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTabs() {
      const tabs = [
        {
          id: 0,
          name: '国家级'
        },
        {
          id: 1,
          name: '省级'
        }
      ]
      this.setData({ tabs })
    },

    getPeople() {
      const people = [
        {
          id: 0,
          avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
          name: '张苏苏',
          tag: '张家界阳戏',
          des: '朱丽珍，女、土家族、1940年出生。'
        },
        {
          id: 1,
          avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
          name: '张苏苏',
          tag: '张家界阳戏',
          des: '朱丽珍，女、土家族、1940年出生。'
        },
        {
          id: 2,
          avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
          name: '张苏苏',
          tag: '张家界阳戏',
          des: '朱丽珍，女、土家族、1940年出生。'
        },
        {
          id: 3,
          avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
          name: '张苏苏',
          tag: '张家界阳戏',
          des: '朱丽珍，女、土家族、1940年出生。'
        }
      ]
      this.setData({people})
    }
  }
})