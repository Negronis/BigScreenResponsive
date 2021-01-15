// simple init Echarts
import * as echarts from 'echarts'; 
class Echartsinit {
   echarts = echarts;
   init(dom, option) {
      let Charts = (this.echarts).init(dom);
      Charts.setOption(option);
      return Charts;
   };
   resize(Charts) {
      Charts.resize();
   }
}
export default new Echartsinit();