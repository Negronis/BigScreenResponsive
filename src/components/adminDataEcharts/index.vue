<template>
<div class='big_screen'>
    <div class="wrapper_img"  :style="{backgroundImage:`url(${bg_src})`}">
      <div class="outer_content" :style="{margin:`${sMargin}` }">
        <div class='content'  :style="{width:Width +'px',height:Height +'px'}">  
              <div class='content_inter' :style="{transform:'scale('+scaleX+','+scaleY+')',transformOrigin:'0px 0px'}"> 
                  <div style='position:relative;top:0;left:0'>
                  <headers style='position:absolute;left:0px;top:10px;width:100%;'></headers>
                      <!-- 左2 -->
                      <leftBar style='position:absolute;left:30px;top:83px;'></leftBar>
                      <leftpie style='position:absolute;left:30px;top:412px;'></leftpie>
                      <!-- 中 --> 
                      <maps  style='position:absolute;left:454px;top:128px;'></maps>
                      <!-- 右2 -->
                      <leftBar style='position:absolute;right:30px;top:83px;'></leftBar>
                      <rightBar style='position:absolute;right:30px;top:386px;'></rightBar>
                      <!-- 下2 -->
                      <bottomLine style='position:absolute;left:30px;top:770px;'></bottomLine>
                      <leftBar style='position:absolute;left:1077px;top:755px;'></leftBar> 
                  </div>
              </div>
          </div>  
    </div>   
    </div>
    </div>
</template>
<script > 
import maps from "./echarts/map/map.vue";
import leftBar from "./echarts/bar/left_bar/index.vue";
import headers from "./header/index.vue"; 
import rightBar from "./echarts/bar/right_bar/index.vue"; 
import leftpie from "./echarts/pie/left_pie/index.vue";
import bottomLine from './echarts/line/bottom_line/index.vue';
import store from "@/components/adminDataEcharts/store";
export default {
  name:"bigScreen",
  components:{
    maps,
    leftBar,
    headers, 
    rightBar, 
    leftpie, 
    bottomLine
  },
  data(){
    return {
      bg_src:require('@/assets/big_screen/bg.png'),
      scaleX:1,
      scaleY:1, 
      Height:0,
      Width:0,
      sMargin:0,
      //固定的理想屏幕比率
      defaultScaleFactor:1920/1080, 
      //固定的理想屏幕宽高
      defaultWidth:1920,
      defaultHeight:1080,
      // 竖向 / 横向异形屏
      isVerticalDifferentScreen:false,
      isTransverseDifferentScreen:false
    }
  }, 
  methods:{ 
    setHeight(){    
      if(this.isTransverseDifferentScreen){ 
         this.Height = window.innerHeight; 
         return ;
      }
      if(this.isVerticalDifferentScreen){
        this.Height = this.defaultHeight * this.scaleY; 
        return ;
      }
      this.Height = window.innerHeight;
    },
    setWidth(){   
      if(this.isTransverseDifferentScreen){
        this.Width = this.defaultWidth * this.scaleX;
        return ;
      }
      if(this.isVerticalDifferentScreen){
        this.Width = window.innerWidth;
        return ;
      } 
      this.Width = window.innerWidth; 
    },
    setSMargin(){ 
      if(this.isTransverseDifferentScreen){
        if(((window.innerWidth - (this.Width)) / 2) < 0){
          this.sMargin = `0`;
          return;
        }
        this.sMargin = `0 ${((window.innerWidth - (this.Width)) / 2)}px`; 
        return ; 
      }
      if(this.isVerticalDifferentScreen){
        this.sMargin = `${(window.innerHeight - (this.Height)) / 2}px 0`;
        return;
      }
      this.sMargin = `0`; 
    },
    // 是否是异形屏
    changeScreenType(){
      let thisScaleFactor = window.innerWidth / window.innerHeight;
      // x < 1.777
      if(thisScaleFactor < this.defaultScaleFactor){
        this.isVerticalDifferentScreen =  true;
        this.isTransverseDifferentScreen = false;
      }
      // x > 1.777
      if(thisScaleFactor > this.defaultScaleFactor){
        this.isTransverseDifferentScreen = true;
        this.isVerticalDifferentScreen = false;
      }
      if(thisScaleFactor === this.defaultScaleFactor){
        this.isVerticalDifferentScreen = false ;
        this.isTransverseDifferentScreen = false;
      }  
    }, 
    changeScale(){    
      this.changeScreenType();   
      if(this.isTransverseDifferentScreen){
        this.scaleX = window.innerHeight / this.defaultHeight; 
        this.scaleY = window.innerHeight / this.defaultHeight; 
      }
      if(this.isVerticalDifferentScreen){
        this.scaleX = window.innerWidth / this.defaultWidth; 
        this.scaleY = window.innerWidth / this.defaultWidth;  
      }
      this.setWidth();
      this.setHeight();  
      this.setSMargin();  
    }, 
    init(){
      this.changeScreenType(); 
      this.changeScale()  
    }
  },
  created(){ 
    this.init();
    let throttle = (fn, interval) => {
      let timer = null;
        return () => {
            if (timer) {
                return;
            }
            timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                typeof fn === 'function' ? fn() : "";
            }, interval)
        };
    }
    var _onresize = window.onresize || function(){};
    window.onresize = ()=>{      
      throttle(this.changeScale,500)();
      throttle( _onresize(),500)();  
    }
  }
} 
</script>
<style>
.outer_content{
  position: absolute; 
  left:0;
  top:0;
  bottom:0;
  right:0;
  overflow: hidden;
  box-sizing: border-box;
}
.wrapper_img{
  width:100%;
  height:100%; 
  background-position: center;
  background-size:100% 100%; 
  position: absolute;
  left: 0;
  top: 0; 
  bottom: 0;
  right:0; 
  box-sizing: border-box;
}
.content{
  margin:0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
.content_inter{
  transition:0.5s linear all;
  width:1920px;
  height:1080px; 
  overflow: hidden;
} 
.bar_bg{ 
  background-image:url(~@/assets/big_screen/boderRadius_square.png);
  background-repeat: no-repeat;
  background-size:100% 100%;
}
.line_bg{
  background-image:url(~@/assets/big_screen/longBorderRadius_square.png);
  background-repeat: no-repeat;
  background-size:100% 100%;
}
</style>