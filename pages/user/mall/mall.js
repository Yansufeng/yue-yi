// pages/user/mall/mall.js
import {initImgs} from '../../../utils/init'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsName:"",
    sucess:true,
    visible:false,
    tabs:[],
    imgs:{
      bkg:'mall-bkg.png',
      coins:'coins.png'
    },
    goodsList:[],
    score:"70",  
    goodsImg:"",
    goodsScore:"",
  },
 
getTabs(){  
  const tabs=[
    {
      id:'0',
      name:"全部"
    },
    {
      id:'1',
      name:"景区门票"
    },
    {
      id:'2',
      name:"文博文创"
    },
    {
      id:'3',
      name:"美食美宿"
    }]
    this.setData({tabs})   
},
toHistory(){
  wx.navigateTo({
    url: '/pages/user/mall/history/history',
  })
},  
confirmChange(){
  wx.navigateTo({
    url: '/pages/user/mall/exchange/exchange',
  })
},
getGoods(){
  const goodsList=[
    {
      id:"0",
      name:"张家界景点古典书签",
      score:300,
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png"
    },
    {
      id:"1",
      name:"张家界景点古典书签",
      score:300,
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png"
    },
    {
      id:"2",
      name:"张家界景点古典书签",
      score:300,
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png"
    },
    {
      id:"3",
      name:"张家界景点古典书签",
      score:50,
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png"
    },
    {
      id:"4",
      name:"张家界景点古典书签",
      score:300,
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png"
    },
    {
      id:"5",
      name:"张家界景点古典书签",
      score:300,
      img:"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/introduce-oteam.png"
    },
  ]
  this.setData({goodsList})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    initImgs("/user/mall/",this),
    this.getTabs()
    this.getGoods()
  },
  change(e){
    const score=e.target.dataset.score
    const img=e.target.dataset.img  
    const name =e.target.dataset.name
    this.setData({visible:true ,goodsScore:score,goodsImg:img,goodsName:name})
    if(score > this.data.score){
      this.setData({sucess:false})
    }
    else{
      this.setData({sucess:true})
    }
  },

  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },
  onClose() {
    this.setData({
      visible: false,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})