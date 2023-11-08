// pages/column/book/components/listener/listener.js
import { initImgs } from '../../../../../utils/init'

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
    navs: [],
    imgs: {
      red: 'tab-red.png',
      master: 'tab-master.png',
      poem: 'tab-poem.png',
      child: 'tab-child.png',
      thought: 'tab-thought.png'
    }
  },

  lifetimes: {
    attached() {
      initImgs('/column/book/', this)
      this.getNavs()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNavs() {
      const imgs = this.data.imgs
      const navs = [
        {
          id: 0,
          cover: imgs.red,
          title: '红色纪实',
          code: 'yy-hong-se-ji-shi'
        },
        {
          id: 1,
          cover: imgs.master,
          title: '国学名著',
          code: 'yy-guo-xue-ming-zhu'
        },
        {
          id: 2,
          cover: imgs.poem,
          title: '诗词文学',
          code: 'yy-shi-ci-wen-xue'
        },
        {
          id: 3,
          cover: imgs.child,
          title: '儿童文学',
          code: 'yy-er-tong-wen-xue'
        },
        {
          id: 4,
          cover: imgs.thought,
          title: '思想理论',
          code: 'yy-si-xiang-li-lun'
        },
      ]
      this.setData({navs})
    },

    toList(e) {
      const i = e.currentTarget.dataset.i
      wx.navigateTo({
        url: '/pages/column/book/list/listL',
      })
    }
  }
})