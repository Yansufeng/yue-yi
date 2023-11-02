// pages/column/celebrity/detail/components/info/info.js
import { initImgs } from '../../../../../../utils/init'
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
    imgs: {
      bkg: 'txt-bkg.png'
    },
    info: {}
  },

  lifetimes: {
    attached() {
      initImgs('/column/celebrity/', this)
      this.getInfo()
      this.setData({
        isInit: true
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getInfo() {
      const info = {
        cover: 'https://yansufeng.github.io/img/yuanxi/yue-yi/home/bkg.png',
        content: `贺龙（1896—1969），中华人民共和国元帅。原名贺文常，字云卿。湖南桑植人。\n \
他在半个多世纪的革命斗争生涯中，为中国的旧民主主义革命、新民主主义革命、社会主义革命和建设，作出了重要贡献，建立了不朽功勋。\n \
贺龙同志的一生，是为党和人民的事业奋斗的一生，是革命的一生，战斗的一生，光辉的一生。他对党、对人民无限忠诚，对共产主义理想坚信不移，始终保持旺盛的革命斗志，具有矢志不渝的政治信念；他实事求是，注重深入实际，讲求实效，勇于开拓，具有理论联系实际的优良作风；他刚直不阿，光明磊落，敢于坚持真理，具有坚定不移的政治立场。贺龙同志以自己的革命实践和高风亮节，弘扬了我党我军的优良作风和中华民族的传统美德，为我们树立了一个真正共产党人的崇高榜样。\n \
贺龙同志的一生，是为党和人民的事业奋斗的一生，是革命的一生，战斗的一生，光辉的一生。他对党、对人民无限忠诚，对共产主义理想坚信不移，始终保持旺盛的革命斗志，具有矢志不渝的政治信念；他实事求是，注重深入实际，讲求实效，勇于开拓，具有理论联系实际的优良作风；他刚直不阿，光明磊落，敢于坚持真理，具有坚定不移的政治立场。贺龙同志以自己的革命实践和高风亮节，弘扬了我党我军的优良作风和中华民族的传统美德，为我们树立了一个真正共产党人的崇高榜样。`
      }
      this.setData({info})
    }
  }
})