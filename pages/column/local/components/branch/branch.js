// pages/column/local/components/branch/branch.js
import {initImgs} from '../../../../../utils/init'
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
    imgs:{
      bkg:'branch-bkg.png'
    },
    branches:[]
  },
  lifetimes: {
    attached() {
      initImgs('/column/local/', this)
      this.setData({
        isInit: true
      })
      this.getBranches()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getBranches(){
      const branches=[
        {
          id:'0',
          title:'天门山镇分馆',
          cover:this.data.imgs.bkg
      },
      {
        id:'1',
        title:'天门山镇分馆',
        cover:this.data.imgs.bkg
    },
    {
      id:'2',
      title:'天门山镇分馆',
      cover:this.data.imgs.bkg
  },
  {
    id:'3',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'4',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'5',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'6',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'7',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'8',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'9',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'10',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'11',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'12',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'13',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'14',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'15',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'16',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  },
  {
    id:'17',
    title:'天门山镇分馆',
    cover:this.data.imgs.bkg
  }
    ]
    this.setData({branches})
    },
    toDetail(){      
      console.log("触发了")
       wx.navigateTo({
       url: '/pages/column/local/detail/detail',
    })
    }
  }
})
