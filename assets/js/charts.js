// import * as echarts from 'echarts';
$(function (){

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option =  {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            data: ['base pool', 'rewards Smartrocks', 'destroys', 'marketing']
        },
        grid: {
            // left: '3%',
            // right: '4%',
            // bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine:{show: false},
            scale: false,
            axisLabel:{
                show:false
            },
            axisTick: {
                show: false
            },
            axisLine:{show:false}
        },
        yAxis: {
            type: 'category',
            data: ['Distribution'],
            splitLine:{show: false},
            scale: false,
            axisTick: {
                show: false
            },
            axisLabel:{
                show:false
            }
        },
        series: [
            // {
            //     name: 'Normal trading',
            //     type: 'bar',
            //     stack: 'total',
            //     label: {
            //         show: true
            //     },
            //     emphasis: {
            //         focus: 'series'
            //     },
            //     data: [93.1]
            // },
            {
                name: 'base pool',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [5]
            },
            {
                name: 'rewards Smartrocks',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [1]
            },
            {
                name: 'destroys',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [0.5]
            },
            {
                name: 'marketing',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [0.4]
            }
        ]
    };

    option && myChart.setOption(option);

})