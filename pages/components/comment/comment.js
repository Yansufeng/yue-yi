// pages/column/book/detail/components/comment/comment.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    sourceID: {
      type: String,
      observer: function (newVal, oldVal) {
        // 在这里处理 sourceID 变化后的逻辑
        this.setData({id:newVal})
      }
  },
  },
  /**
   * 组件的初始数据
   */
  data: {
    isInit: false,
    comments: []
  },

  lifetimes: {
    attached() {
      this.getComments()
      this.setData({
        isInit: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getComments() {
      const comments = [
        {
          id: 0,
          avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
          name: '果果昔',
          content: '活动真精彩！',
          like: 12
        },
        {
          id: 1,
          avatar: 'https://yansufeng.github.io/img/yuanxi/yue-yi/user/avatar.png',
          name: '果果昔',
          content: '活动真精彩！',
          like: 12
        }
      ]
      this.setData({comments})
    },
    
    doLike(e) {
      const i = e.currentTarget.dataset.i
      const comments = this.data.comments 
      comments[i].isLiked = true
      comments[i].like++
      this.setData({comments})
    }
  }
})