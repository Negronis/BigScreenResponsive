<template>
  <div>
      <!-- 这是个模板 -->
    <div ref="bar" style='width:400px;height:200px;'></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Echartsinit from '@/common/echarts_init';
@Component
export default class bar_example extends Vue {
  private option: object = {
    title: {
      text: "世界人口总量",
      subtext: "数据来自网络"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["2011年", "2012年"]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: "category",
      data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"]
    },
    series: [
      {
        name: "2011年",
        type: "bar",
        data: [18203, 23489, 29034, 104970, 131744, 630230]
      },
      {
        name: "2012年",
        type: "bar",
        data: [19325, 23438, 31000, 121594, 134141, 681807]
      }
    ]
  };
  private charts = null;
  mounted() {
    let that = this;
    this.$nextTick((): void => {
         that.charts = Echartsinit.init((that.$refs.bar as HTMLCanvasElement),that.option);
         window.onresize = (): void=>{
             Echartsinit.resize(that.charts);
         }
    });
  }
}
</script>
<style lang="stylus"></style>