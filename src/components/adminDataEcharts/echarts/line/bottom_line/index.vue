<template>
  <div>
    <div class='echarts_title' style='position:relative;'>心衰患者新增病例统计</div> 
    <!-- 右下的条形 -->
    <div class='line_bg' ref="bar" :style="{width:'1027px',height: 248+ 'px'}"></div>
  </div>
</template>
<script>
import Echartsinit from '@/components/adminDataEcharts/echarts_init';
import option from "./index";
import store from "@/components/adminDataEcharts/store";

export default{
  computed:{
    Height(){
      return store.state.height;
    }
  },
  data(){
    return {
      charts:null,
    }
  },
  mounted(){
    let that = this;
    this.$nextTick(() => {
      that.charts = Echartsinit.init(
        that.$refs.bar,
        option
      );
    });
  }
}
</script>
<style lang="stylus"></style>