<template>
  <div >
    <div class='echarts_title'>心衰患者新增病例统计</div> 
    <!-- 右下的条形 -->
    <div class='bar_bg' :style="{width:'384px',height:'633px'}">
      <!-- <RadioGroup @on-change="changeCharts" v-model="days" style='color:#fff;display:block;padding-top:20px;text-align:center'>
          <Radio :class='days == "今天" ? radio : ""' style='margin-left:10px;width:30%;font-size:20px;padding:5px;' label="今天"></Radio>
          <Radio :class='days == "全年" ? radio : ""' style='width:30%;font-size:20px;padding:5px;' label="全年"></Radio>
          <Radio :class='days == "本月" ? radio : ""' style='width:30%;font-size:20px;padding:5px;' label="本月"></Radio>
      </RadioGroup>   -->
      <div  ref="bar" :style="{width:'374px',height:'586px'}"></div>
    </div>
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
      radio:"radio",
      days:"今天",
      charts:null, 
    }
  },
  methods:{
    setHeight(){ 
      store.setHeight(window.innerHeight);
    },
    changeCharts(){
      let that = this;
      let arr = [];
      if(this.days == '今天'){
        arr = [100,200,200,300,100,200,100,200,300,400,500,100];
      }
      else if (this.days == '本月'){
          arr = [120,230,200,300,100,200,130,240,340,400,545,100];
      }
      else {
        arr = [1000,2000,2000,3000,1000,2000,1000,2000,3000,4000,5000,1000];   
      }
      option['series'][0]['data'] =  arr;
      option['series'][1]['data'] =  arr.map((e,i,arr)=>{
          return Math.max(...arr) > 1000 ? Math.max(...arr) + 1000 : Math.max(...arr) +100;
      })
      that.charts = Echartsinit.init(
        that.$refs.bar,
        option
      );
    }
  },
  mounted() { 
    this.$nextTick(() => {
        this.changeCharts();
    });
  }
} 
</script>
<style>
.radio>.ivu-radio-checked .ivu-radio-inner{
      border-color:#FFDC00;
}
.radio>.ivu-radio-inner{
      background:#FFDC00;
}
.radio>.ivu-radio-inner:after{
      background:#F54400;
}
.radio{
  background-image:url(~@/assets/big_screen/yjjx.png);
  background-size:100% 100%;
  background-repeat:no-repeat;
} 
</style>