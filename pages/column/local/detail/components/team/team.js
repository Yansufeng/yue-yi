// pages/column/local/detail/components/team/team.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    teamlist:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    detailImg:"",
    detailTitle:"",
    detailContent:"",
    visible:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDetail(e){
      const index= e.currentTarget.dataset.index
      const {img,title,content}=this.properties.teamlist[index]
      this.setData({
        detailImg:img,
        detailTitle:title,
        detailContent:content,
        visible:true
      })      
    },
    onVisibleChange(e){
      this.setData({
        visible: e.detail.visible,
      });
    },
    close(){
      this.setData({
        visible:false
      })
    }
  }
})
