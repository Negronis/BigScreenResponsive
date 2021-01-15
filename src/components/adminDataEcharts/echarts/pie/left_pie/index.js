let data = [
    {value: 310, name: '死亡率'},
    {value: 274, name: '住院率'},
    {value: 235, name: '康复率'},
    {value: 400, name: '自杀率'}, 
]
// let  a=0;
// for(let i=0; i<data.length; i++)
// {
//   a+=data[i].value;
// }
// let obj ={
//     value:a, name:'', itemStyle:{
//     normal:{
//         color:'transparent'
//     }}
// }
// data.push(obj);
let option = {
   color:[
       '#0FE3F7','#24C768','#FF7E00','#00A1E4'
   ],
   backgroundColor: 'transparent',
   title: { 
       left: 'center',
       top: 20,
       textStyle: {
           color: '#fff'
       }
   },
   tooltip: {
       trigger: 'item',
       formatter: '{a} <br/>{b} : {c} ({d}%)'
   },
   series: [
       {
           name: '访问来源',
           startAngle:180,
           type: 'pie',
           radius : '80%',
            center: ['50%', '50%'],
           data: data.sort(function (a, b) { return a.value - b.value; }),
           roseType: 'radius',
           label:
            {
                color: '#fff',
                position:'outer'
            } ,
           labelLine: { 
               lineStyle: {
                   color: '#fff'
               },
               smooth: 0,
               length: 5,
               length2: 10
           }, 
           animationType: 'scale',
           animationEasing: 'elasticOut',
           animationDelay: function (idx) {
               return Math.random() * 200;
           }
       }
   ]
};
export default option;