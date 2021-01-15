import * as echarts from 'echarts';
let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label:{
                // formatter: 'some text {value} some text'
            }, 
        },
        formatter:(params , ticket )=>{
            let str =  `${params[0]['name']}：<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params[0]['color']['colorStops'][0]['color']};"></span>${params[0]['value']}人`
            return str;
        }
    },
    grid: {
        left: '20',
        right: '0',
        bottom: '0',
        top:5,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show:false
    },
    yAxis: [
        {
            name:"新增病例",
            type: 'category',
            data: ['邯郸第n', '邯郸第n', '邯郸第n', '邯郸第n', '在？V50', '邯郸医院', '邯郸第n', '邯郸医院', '邯郸医院', '邯郸医院', '邯郸医院', '邯郸医院'],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                color:"#fff",
                fontSize:18,
                inside:false,
                align:'right'
            }, 
        },
    ],
    series: [
        {
            type: 'bar', 
            barWidth:10,
            showBackground:true,
            backgroundStyle: {
                color: '#0F173F'
            },
            z: 10,
            label: {
                show: true,
                position: 'right',
                color:"#fff",
                fontSize:20,
            },
            itemStyle: {
                normal: {
                    barBorderRadius:5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#2FCE8B'},                   //柱图渐变色
                            {offset: 0.5, color: '#FFDB08'},                 //柱图渐变色
                            {offset: 1, color: '#F77D02'},                   //柱图渐变色
                        ]
                    )
                },
            },
            data:[]
        },
        //背景
        { 
            type: 'bar', 
            barWidth:10,
            itemStyle: {
                normal: {
                    barBorderRadius:5,
                    color:'rgba(15, 23, 63,1)'
                },
            }, 
            barGap:"-100%", 
            data:[]
        },
    ]
};
export default option;