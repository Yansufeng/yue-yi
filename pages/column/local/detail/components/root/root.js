// pages/column/local/detail/components/root/root.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    servelist:{
      type:Array,
  
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible:false,
  },
 lifetimes:{
   attached(){
     console.log(this.properties.serveList)
   }
 },
  /**
   * 组件的方法列表
   */
  methods: {
    toMore() {   
      this.setData({
        visible:true
      })
    },  
    onVisibleChange(e){      
      this.setData({
        visible:e.detail.visible
      })
    },
    close(){
      this.setData({
        visible:false
      })
    }
  },
  
})
