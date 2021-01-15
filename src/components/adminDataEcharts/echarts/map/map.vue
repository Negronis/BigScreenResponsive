<template>
  <div>
    <div  ref='chart'  :style='{width:"1017px",height: 600+"px" }'  ></div>
  </div>
</template>
<script> 
import MapClass from "./index";
import Echartsinit from '@/components/adminDataEcharts/echarts_init'; 
import "@/components/adminDataEcharts/china";
import 'echarts/extension/bmap/bmap';
import store from "@/components/adminDataEcharts/store";

export default {
  data(){
    return {
      map:{},
      Height:store.state.height/2,
      Chart:null
    }  
  },
  methods:{
    setHeight(){   
      store.setHeight(window.innerHeight);
    }
  },
  mounted(){
    let that = this;
    this.$nextTick(() => {
      that.Chart = Echartsinit.init( (this.$refs.chart), MapClass.option);
    });
  }
} 
</script>
<style lang="sass">

</style>