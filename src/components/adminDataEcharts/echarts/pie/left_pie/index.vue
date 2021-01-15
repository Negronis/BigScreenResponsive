<template>
  <div> 
    <div class='echarts_title'>患者治疗情况</div> 
    <div class='bar_bg' ref="bar"  :style="{width:'384px',height:292  + 'px'}"></div>
  </div>
</template>
<script> 
import Echartsinit from '@/components/adminDataEcharts/echarts_init';
import option from './index';
import store from "@/components/adminDataEcharts/store";
export default {
  computed:{
    Height(){
      return store.state.height
    }
  },
  data(){
    return {
      charts:null
    }
  },
  methods:{
    setHeight(){
      store.setHeight(window.innerHeight); 
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(()  => {
      that.charts = Echartsinit.init(
        that.$refs.bar,
        option
      );
    });
  }
} 
</script>
<style>
.echarts_title{
    font-size:25px;
    position: relative;
    margin:0;
}
</style>