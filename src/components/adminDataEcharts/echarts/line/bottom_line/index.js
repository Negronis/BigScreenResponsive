let xData = [];
let Data = [];
for (let a = 1; a <= 30; a++) {
    xData.push(a)
    Data.push(Math.random() * a * 100)
}
let option = {
    color: [
        '#0FE3F7'
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            }
        }
    },
    // legend: {
    //     data: ['邮件营销']
    // },
    grid: {
        top: 30,
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: xData,
            axisLine: {
                lineStyle: {
                    color: "#fff"
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    opacity: .5,
                    color: 'rgba(255,255,255,.2)'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "#fff"
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    opacity: .5,
                    color: '#fff'
                }
            }
        }
    ],
    series: [
        {
            name: '随访曲线图',
            type: 'line',
            stack: '总量',
            smooth: .3,
            areaStyle: {
                opacity: .1
            },
            data: Data
        }
    ]
};
export default option;