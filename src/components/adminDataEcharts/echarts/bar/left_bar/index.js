var xAxisData = []; 
var boy = [];
var girl = [];

for (var i = 0; i < 8; i++) {
    xAxisData.push('6-10岁');
    // data1.push((Math.random() * 2).toFixed(2));
    // data2.push(-Math.random().toFixed(2));
    boy.push( -(Math.random() * 20).toFixed(2));
    girl.push((Math.random() + 10).toFixed(2));
}

var emphasisStyle = {
    itemStyle: {
        barBorderWidth: 1,
        shadowBlur: 5,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

let option = {
    color:['#0FE3F7','#24C768'],
    backgroundColor: 'transparent',
    legend: {
        data: [ '男', '女'], 
        right:15,
        top:15 ,
        textStyle:{
            color:"#fff"
        }
    }, 
    xAxis:[{
        data: xAxisData, 
        axisLine: {
            show:true,
            onZero: false,
            lineStyle:{
                color:"#fff"
            }
        },
        axisTick:{
            show:true
        },
        axisLabel:{
            show:true, 
            interval:0,
            rotate:30
        },
        splitLine: {show: false},
        splitArea: {show: false}
    },{
        type:"value",
        axisLine: {
            show:true,
            onZero: true,
            lineStyle:{
                color:"#fff",
                width:1
            }
        },
    }],
    yAxis: {
        inverse: false,
        axisLine:{
            show:true,
            lineStyle:{
                color:"#fff"
            }
        },
        splitLine:{
            show:false,
            interval:1
        },
        splitArea: {show: false}
    },
    grid: {
        left: 30,
        right:30,
        bottm:0,
    },
    series: [
        {
            name: '男',
            type: 'bar',
            stack: 'two',
            emphasis: emphasisStyle, 
            itemStyle:{
                barBorderRadius:[0,0,10,10],
            },
            barWidth:15,
            data: boy
        },
        {
            name: '女',
            type: 'bar',
            stack: 'two',
            barWidth:10,
            itemStyle:{
                barBorderRadius:[10,10,0,0],
            },
            emphasis: emphasisStyle,

            data: girl
        }
    ]
};
export default option;