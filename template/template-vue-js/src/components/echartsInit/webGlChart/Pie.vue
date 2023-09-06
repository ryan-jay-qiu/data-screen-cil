<template>
    <div ref="chartPanel" class="chartPanel" />
    <div class="bc" />
</template>

<script setup>
import * as echarts from 'echarts';
import 'echarts-gl';
const options = defineProps({
    type: Array,
    default: () => []
})
const chartPanel = ref(null)
let myChart = null;
let selectedIndex = ref("");
let hoveredIndex = ref("");

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
const getParametricEquation = (startRatio, endRatio, isSelected, isHovered, k, h) => {

    // 计算
    let midRatio = (startRatio + endRatio) / 2;

    let startRadian = startRatio * Math.PI * 2;
    let endRadian = endRatio * Math.PI * 2;
    let midRadian = midRatio * Math.PI * 2;

    // 如果只有一个扇形，则不实现选中效果。
    if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
    }

    // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
    k = typeof k !== 'undefined' ? k : 1 / 3;

    // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
    let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
    let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

    // 计算高亮效果的放大比例（未高亮，则比例为 1）
    let hoverRate = isHovered ? 1.05 : 1;

    // 返回曲面参数方程
    return {

        u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32
        },

        v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
        },

        x: function (u, v) {
            if (u < startRadian) {
                return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },

        y: function (u, v) {
            if (u < startRadian) {
                return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
                return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },

        z: function (u, v) {
            if (u < -Math.PI * 0.5) {
                return Math.sin(u);
            }
            if (u > Math.PI * 2.5) {
                return Math.sin(u) * h * .1;
            }
            return Math.sin(v) > 0 ? 1 * h * .1 : -1;
        }
    };
}
// 生成模拟 3D 饼图的配置项
const getPie3D = (pieData, internalDiameterRatio) => {

    let series = [];
    let sumValue = 0;
    let startValue = 0;
    let endValue = 0;
    let legendData = [];
    let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3;

    // 为每一个饼图数据，生成一个 series-surface 配置
    for (let i = 0; i < pieData.length; i++) {

        sumValue += pieData[i].value;

        let seriesItem = {
            name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
            type: 'surface',
            parametric: true,
            wireframe: {
                show: false
            },
            pieData: pieData[i],
            pieStatus: {
                selected: false,
                hovered: false,
                k: k
            }
        };

        if (typeof pieData[i].itemStyle != 'undefined') {

            let itemStyle = {};

            typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
            typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

            seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
    }

    // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
    // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
    for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;

        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k, series[i].pieData.value);

        startValue = endValue;

        legendData.push(series[i].name);
    }
    // 补充一个透明的圆环，用于支撑高亮功能的近似实现。
    // series.push({
    //     name: 'mouseoutSeries',
    //     type: 'surface',
    //     parametric: true,
    //     wireframe: {
    //         show: false
    //     },
    //     itemStyle: {
    //         opacity: 1
    //     },
    //     // grid3D: {
    //     //     show: true
    //     // },
    //     surfaceImage: base64, // 替换为你的背景图片的URL或Base64编码
    //     parametricEquation: {
    //         u: {
    //             min: 0,
    //             max: Math.PI * 2,
    //             step: Math.PI / 20
    //         },
    //         v: {
    //             min: 0,
    //             max: Math.PI,
    //             step: Math.PI / 20
    //         },
    //         x: function (u, v) {
    //             return Math.sin(v) * Math.sin(u) + Math.sin(u);
    //         },
    //         y: function (u, v) {
    //             return Math.sin(v) * Math.cos(u) + Math.cos(u);
    //         },
    //         z: function (u, v) {
    //             return Math.cos(v) > 0 ? 0.1 : -0.1;
    //         }
    //     }
    // });

    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    let option = {
        //animation: false,
        legend: {
            data: legendData,
            itemHeight: 14,
            itemWidth: 14,
            icon: "rect",
            orient: "vertical",
            top: "center",
            right: "0",
            textStyle: {
                align: "left",
                color: "#",
                verticalAlign: "middle",
                rich: {
                    name: {
                        width: 40,
                        fontSize: 12,
                    },
                    value: {
                        width: 10,
                        align: "right",
                        fontFamily: "Medium",
                        fontSize: 12,
                    },
                    rate: {
                        width: 10,
                        align: "right",
                        fontSize: 12,
                    },
                },
            },
            formatter: (name, params) => {
                if (legendData.length) {
                    console.log(name, legendData, series)
                    const item = series.filter((item) => item.name === name)[0];
                    console.log(item)
                    return `{name|${name}}{value| ${item.pieData.value}} {rate| %}`;
                }
            },
        },
        tooltip: {
            formatter: params => {
                if (params.seriesName !== 'mouseoutSeries') {
                    return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}`;
                }
            }
        },
        xAxis3D: {
            min: -1,
            max: 1
        },
        // grid: {
        //     left: "10%",
        //     right: "0%",
        //     bottom: "0%",
        // },
        yAxis3D: {
            show: 'false',
            min: -1,
            max: 1
        },
        zAxis3D: {
            min: -1,
            max: 1
        },
        grid3D: {
            // boxWidth: 200,  // 设置画布的宽度
            // boxHeight: 100, // 设置画布的高度
            // boxDepth: 0,   // 设置画布的深度
            grid3DLocation: [ // 设置网格的位置
                '50%', '0%', '0%' // x, y, z 轴的位置百分比
            ],
            show: false,
            boxHeight: 5,
            viewControl: { //3d效果可以放大、旋转等，请自己去查看官方配置
                alpha: 30,
                // beta: 40,
                rotateSensitivity: 0,
                zoomSensitivity: 0,
                panSensitivity: 0,
                autoRotate: true
            },
            // //后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
            // postEffect: { //配置这项会出现锯齿，请自己去查看官方配置有办法解决 
            //     enable: true,
            //     bloom: {
            //         enable: true,
            //         bloomIntensity: 0.1
            //     },
            //     SSAO: {
            //         enable: true,
            //         quality: 'medium',
            //         radius: 2
            //     }
            // },
            // msaa: 0
        },
        series: series
    };
    return option;
}
// 传入数据生成 option
const option = getPie3D([{
    name: 'A区域',
    value: 43,
    itemStyle: {
        color: '#fff',
        opacity: 0.5,
    }
}, {
    name: 'B区域',
    value: 35,
    itemStyle: {
        color: '#2D9BFC',
        opacity: 0.5,
    }
}, {
    name: 'C区域',
    value: 12,
    itemStyle: {
        color: '#66FF00',
        opacity: 0.5,
    }
}, {
    name: 'D区域',
    value: 7,
    itemStyle: {
        color: '#EAB966',
        opacity: 0.5,
    }
}], 0.75);
let isSelected;
let isHovered;
let startRatio;
let endRatio;
let k;
const mouseoverHandler = function (params) {
    if (hoveredIndex.value === params.seriesIndex) {
        return;
    } else {
        if (hoveredIndex.value !== "") {
            isSelected = option.series[hoveredIndex.value].pieStatus.selected;
            isHovered = false;
            startRatio = option.series[hoveredIndex.value].pieData.startRatio;
            endRatio = option.series[hoveredIndex.value].pieData.endRatio;
            k = option.series[hoveredIndex.value].pieStatus.k;

            option.series[hoveredIndex.value].parametricEquation = getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                option.series[hoveredIndex.value].pieData.value
            );
            option.series[hoveredIndex.value].pieStatus.hovered = isHovered;

            hoveredIndex.value = "";
        }

        if (params.seriesName !== "mouseoutSeries") {
            isSelected = option.series[params.seriesIndex].pieStatus.selected;
            isHovered = true;
            startRatio = option.series[params.seriesIndex].pieData.startRatio;
            endRatio = option.series[params.seriesIndex].pieData.endRatio;
            k = option.series[params.seriesIndex].pieStatus.k;

            option.series[params.seriesIndex].parametricEquation = getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                option.series[params.seriesIndex].pieData.value + 5
            );
            option.series[params.seriesIndex].pieStatus.hovered = isHovered;

            hoveredIndex.value = params.seriesIndex;
        }

        myChart.setOption(option);
    }
}
const globaloutHandler = function () {
    if (hoveredIndex.value !== "") {
        isSelected = option.series[hoveredIndex.value].pieStatus.selected;
        isHovered = false;
        k = option.series[hoveredIndex.value].pieStatus.k;
        startRatio = option.series[hoveredIndex.value].pieData.startRatio;
        endRatio = option.series[hoveredIndex.value].pieData.endRatio;

        option.series[hoveredIndex.value].parametricEquation = getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            option.series[hoveredIndex.value].pieData.value
        );
        option.series[hoveredIndex.value].pieStatus.hovered = isHovered;

        hoveredIndex.value = "";
    }

    myChart.setOption(option);
}
const clickHandler = function (params) {
    let isSelected = !option.series[params.seriesIndex].pieStatus.selected;
    let isHovered = option.series[params.seriesIndex].pieStatus.hovered;
    let k = option.series[params.seriesIndex].pieStatus.k;
    let startRatio = option.series[params.seriesIndex].pieData.startRatio;
    let endRatio = option.series[params.seriesIndex].pieData.endRatio;

    if (selectedIndex.value !== "" && selectedIndex.value !== params.seriesIndex) {
        option.series[selectedIndex.value].parametricEquation = getParametricEquation(
            option.series[selectedIndex.value].pieData.startRatio,
            option.series[selectedIndex.value].pieData.endRatio,
            false,
            false,
            k,
            option.series[selectedIndex.value].pieData.value
        );
        option.series[selectedIndex.value].pieStatus.selected = false;
    }

    option.series[params.seriesIndex].parametricEquation = getParametricEquation(
        startRatio,
        endRatio,
        isSelected,
        isHovered,
        k,
        option.series[params.seriesIndex].pieData.value
    );
    option.series[params.seriesIndex].pieStatus.selected = isSelected;

    isSelected ? (selectedIndex.value = params.seriesIndex) : null;

    myChart.setOption(option);
}
onUnmounted(() => {
    myChart.off("click", clickHandler); // 解绑事件
    myChart.off("mouseover", mouseoverHandler);
    myChart.off("globalout", globaloutHandler);
    myChart.dispose();
}),
    onMounted(() => {
        // 基于准备好的dom，初始化echarts实例
        myChart = echarts.init(chartPanel.value);
        console.log(option)
        myChart.setOption(option);
        myChart.on("click", clickHandler);
        myChart.on("mouseover", mouseoverHandler);
        myChart.on("globalout", globaloutHandler);
    })
</script>

<style lang="scss" scoped>
.container2 {
    position: relative;
    width: 100%;
    height: 100%;
}

.chartPanel {
    position: absolute;
    top: 238px;
    left: -95px;
    width: 400px;
    height: 150px;
    z-index: 2;
}

.bc {
    position: absolute;
    background: url("bc.png") no-repeat;
    background-size: contain;
    width: 212px;
    height: 121px;
    left: 2px;
    bottom: -6px;
    z-index: 0;
}
</style>