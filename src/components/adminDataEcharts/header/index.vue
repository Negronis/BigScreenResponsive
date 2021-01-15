<template>
  <div>
    <div class='bs_header' :style='{backgroundImage:bg_src}' >
       <div class='bs_top_row'>
          <div span="2" class='bs_title_left'>
            <img src="@/assets/big_screen/home_logo.png"  alt="">
            <div style='cursor:pointer' @click='reback'>控制台</div>
          </div> 
          <div span="12" class='bs_title_center'>XXXXXX管理系统</div>
          <div span="6" class='bs_right_second_time'>{{Date_str}} </div> 
       </div>
    </div>
  </div>
</template>
<script >  
export default {
  components:{},
  data(){
    return {
      bg_src: "url(" + require('@/assets/big_screen/head.png') + ")",
      date_nyr:"",
      date_sfm:""
    }
  },
  computed:{
    Date_str(){
      return this.date_sfm
    }
  },
  methods:{
    reback(){
      this.$router.replace('/');
    },
  },
  created(){
    setInterval(()=>{  
      let date = new Date();
      this.date_sfm =date.getFullYear() +"年" + (+(date.getMonth()+1) < 9 ? "0" +(date.getMonth()+1) :  (date.getMonth()+1))+ "月" +  (date.getDate() > 9 ? date.getDate() : "0" +date.getDate()) + "日" + " " + (((+date.getHours()) > 9 )? date.getHours() : "0" + date.getHours()) + ':' +  ((+date.getMinutes()) > 9 ? date.getMinutes() : "0" + date.getMinutes()) + ':' + ((+date.getSeconds()) > 9 ? date.getSeconds() : "0" + date.getSeconds());
    },1000)
  }
}
</script>
<style>
.bs_header{ 
  width:100%;
  min-height:80px; 
  height:80px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  position:relative; 
  color:#fff;
}
.bs_header .bs_title_center{
  font-size:35px;
  line-height:80px;
  text-align: center;
  color:#fff;
  text-shadow: .1px .1px 10px #47D4E8;
  flex-basis:33.33%;
}
.bs_top_row{
  width:100%;
  color:#47D4E8;
  text-align:left;
  line-height:70px;
  display:flex;
  flex-wrap: wrap;
} 
.bs_title_left{ 
  font-size:20px;  
  flex-basis:33.33%;
}
.bs_title_left div,img{
  display:inline-block;vertical-align:middle;
}
.bs_title_left div{
  margin-left:5px;
}
.bs_title_left img{
  margin-left:20px;
  margin-bottom:5px; 
} 
.bs_right_second_time{
  font-size:20px;
  text-align: right; 
  flex-basis:30%; 
}
.bs_right_time{
  padding-right:25px;
  font-size:20px;
  text-align: right;
}
</style>