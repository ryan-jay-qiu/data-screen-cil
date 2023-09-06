import * as echarts from "echarts";

//主页降雨
export const homeChartOption = {
  backgroundColor: "transparent",
  legend: {
    right: 15,
    top: 6,
    color: "#fff",
    itemWidth: 10,
    itemHeight: 5,
    data: [{
      name: "日",
      icon: "rect",
    },],
    itemStyle: {
      color: "#0084FF",
      shadowBlur: 10, // 设置阴影的模糊程度
      shadowColor: "rgb(0,132,255)", // 设置阴影的颜色
      shadowOffsetX: 0, // 设置阴影在水平方向上的偏移量
      shadowOffsetY: 0, // 设置阴影在垂直方向上的偏移量
    },
  },
  title: {
    text: "实时历史降雨检测",
    top: "-2%",
    left: "10%",
    textStyle: {
      align: "center",
      color: "#D1E0FF",
      fontSize: 14,
      fontFamily: "'Microsoft YaHei",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      color: "#fff",
    },
  },
  grid: {
    top: "15%",
    left: "10%",
    right: "5%",
    bottom: "12%",
    // containLabel: true
  },
  xAxis: [{
    type: "category",
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    // interval:4,  //标签之间的间隙
    axisLabel: {
      color: "rgba(154,174,212,0.7)",

      // height: "15px",

      fontSize: "12px",
    },
    // splitLine: {
    //   show: false,
    // },
    boundaryGap: false,
    data: [
      "0点", "4点", "8点", "12点", "16点", "20点", "24点"
    ],
  },],

  yAxis: [{
    type: "value",
    name: "",
    min: function (value) {
      return Math.floor(value.min - 10);
    },
    nameGap: "0",
    axisLabel: {
      color: "rgba(154,174,212,0.7)",

      // height: "15px",

      fontSize: "12px",
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      //坐标轴样式 延伸线
      // 0.4px dashed ;
      show: true,
      lineStyle: {
        type: "dashed",
        color: "rgba(216, 216, 216, 0.2)",
        width: 0.5,
      },
    },
  },],
  dataZoom: [
    // {
    //   type: 'slider',
    //   show: true,
    //   start: 94,
    //   end: 100,
    //   handleSize: 8
    // },
    {
      type: "inside",
      start: 0,
      end: 100,
    },
    // {
    //   type: 'slider',
    //   show: true,
    //   yAxisIndex: 0,
    //   filterMode: 'empty',
    //   width: 12,
    //   height: '70%',
    //   handleSize: 8,
    //   showDataShadow: false,
    //   left: '93%'
    // }
  ],
  series: [{
    name: "日",
    type: "line",
    smooth: true, //是否平滑
    // showSymbol: false,
    symbol: "image://./img/point.png",
    symbolSize: 36,
    lineStyle: {
      // show: false,
      //   color: "#00ca95",
      color: "rgba(216,216,216,0.5)",
      // lineGradient: [0, 1, 1, 1, 1, 1]
    },
    label: {
      show: false,
    },
    lineStyle: {
      color: "rgba(0,123,255,0.5)",
      width: 1.5,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "rgba(0,123,255, 0)",
      },
      {
        offset: 1,
        color: "rgba(0,123,255, 0.5)",
      },]),
      shadowColor: "rgba(0,123,255, 1)",
      shadowBlur: 3,
      shadowOffsetY: -1,
    },
    itemStyle: {
      color: "rgb(0,123,255)",
      borderColor: "rgb(0,123,255)",
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        {
          offset: 0,
          color: "rgba(10,28,68, 0)",
        },
        {
          offset: 0.4,
          color: "rgba(10,28,68, 0.2)",
        },
        {
          offset: 0.5,
          color: "rgba(0,123,255, 0.05)",
        },
        {
          offset: 0.7,
          color: "rgba(0,123,255, 0.2)",
        },
        {
          offset: 0.8,
          color: "rgba(0,123,255, 0.4)",
        },
        {
          offset: 1,
          color: "rgba(0,123,255, 0.8)",
        },
      ]),
    },
    data: [
      30, 10, 30, 32, 40, 19, 10
    ],
  },],
};

export const envirTempOption1 = {
  backgroundColor: "transparent",
  legend: {
    right: 15,
    top: 6,
    color: "#fff",
    itemWidth: 10,
    itemHeight: 5,
    data: [{
      name: "日",
      icon: "rect",
    },],
    itemStyle: {
      color: "#0084FF",
      shadowBlur: 10, // 设置阴影的模糊程度
      shadowColor: "rgb(0,132,255)", // 设置阴影的颜色
      shadowOffsetX: 0, // 设置阴影在水平方向上的偏移量
      shadowOffsetY: 0, // 设置阴影在垂直方向上的偏移量
    },
  },
  title: {
    text: "实时历史降雨检测",
    show: false,
    align: "center",
    color: "#D1E0FF",
    fontSize: "14px",
    fontFamily: "Microsoft YaHei UI",
    letterSpacing: "0.1em",
    top: "5%",
    left: "5%",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      color: "#fff",
    },
  },
  grid: {
    top: "15%",
    left: "10%",
    right: "5%",
    bottom: "12%",
    // containLabel: true
  },
  xAxis: [{
    type: "category",
    axisLine: {
      show: false,
      lineStyle: {
        color: "#27b4c2",
      },
    },
    // splitArea: {
    //   // show: true,
    //   color: "#fff",
    //   lineStyle: {
    //     color: "#fff",
    //   },
    // },
    axisTick: {
      show: false,
    },
    // interval:4,
    axisLabel: {
      color: "rgba(154,174,212,0.7)",
      //
      fontSize: "12px",
    },
    boundaryGap: false,
    data: [
      "0点",
      "1点",
      "2点",
      "3点",
      "4点",
      "5点",
      "6点",
      "7点",
      "8点",
      "9点",
      "10点",
      "11点",
      "12点",
      "13点",
      "14点",
      "15点",
      "16点",
      "17点",
      "18点",
      "19点",
      "20点",
      "24点",
    ],
  },],

  yAxis: [{
    type: "value",
    name: "",
    nameGap: "0",
    min: function (value) {
      return Math.floor(value.min - 10);
    },
    axisLabel: {
      color: "rgba(154,174,212,0.7)",

      fontSize: "12px",
    },
    axisLine: {
      show: false,
      lineStyle: {
        // color: "#27b4c2",
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      //坐标轴样式 延伸线
      // 0.4px dashed ;
      show: true,
      lineStyle: {
        type: "dashed",
        color: "rgba(216, 216, 216, 0.2)",
        width: 0.5,
      },
    },
  },],
  dataZoom: [
    // {
    //   type: 'slider',
    //   show: true,
    //   start: 94,
    //   end: 100,
    //   handleSize: 8
    // },
    {
      type: "inside",
      start: 0,
      end: 100,
    },
    // {
    //   type: 'slider',
    //   show: true,
    //   yAxisIndex: 0,
    //   filterMode: 'empty',
    //   width: 12,
    //   height: '70%',
    //   handleSize: 8,
    //   showDataShadow: false,
    //   left: '93%'
    // }
  ],
  series: [{
    name: "日",
    type: "line",
    smooth: true, //是否平滑
    // showSymbol: false,
    symbol: "image://./img/point.png",
    symbolSize: 24,
    lineStyle: {
      color: "rgba(0,123,255,0.5)",
      width: 1.5,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "rgba(0,123,255, 0)",
      },
      {
        offset: 1,
        color: "rgba(0,123,255, 0.5)",
      },]),
      shadowColor: "rgba(0,123,255, 1)",
      shadowBlur: 3,
      shadowOffsetY: -1,
    },
    itemStyle: {
      color: "rgb(0,123,255)",
      borderColor: "rgb(0,123,255)",
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        {
          offset: 0,
          color: "rgba(10,28,68, 0)",
        },
        {
          offset: 0.4,
          color: "rgba(10,28,68, 0.2)",
        },
        {
          offset: 0.5,
          color: "rgba(0,123,255, 0.05)",
        },
        {
          offset: 0.7,
          color: "rgba(0,123,255, 0.2)",
        },
        {
          offset: 0.8,
          color: "rgba(0,123,255, 0.4)",
        },
        {
          offset: 1,
          color: "rgba(0,123,255, 0.8)",
        },
      ]),
    },
    data: [
      30, 10, 30, 32, 40, 19, 10
    ],
  },],
};
export const envirTempOption2 = {
  backgroundColor: "transparent",
  legend: {
    right: 15,
    top: 6,
    color: "#fff",
    itemWidth: 10,
    itemHeight: 5,
    data: [{
      name: "日",
      icon: "rect",
    },
    {
      name: "月",
      icon: "rect",
    },],
    itemStyle: {
      // color: "#0084FF",
      shadowBlur: 10, // 设置阴影的模糊程度
      shadowColor: "rgb(0,132,255)", // 设置阴影的颜色
      shadowOffsetX: 0, // 设置阴影在水平方向上的偏移量
      shadowOffsetY: 0, // 设置阴影在垂直方向上的偏移量
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      color: "#fff",
    },
  },
  grid: [{
    top: "15%",
    left: "10%",
    right: "5%",
    bottom: "12%",
    // containLabel: true
  },],
  xAxis: [{
    type: "category",
    axisLine: {
      show: false,
      lineStyle: {
        color: "#27b4c2",
      },
    },
    axisTick: {
      show: false,
    },
    // interval:4,
    axisLabel: {
      color: "rgba(154,174,212,0.7)",
      fontSize: "12px",
    },
    boundaryGap: false,
    data: [
      "0点", "4点", "8点", "12点", "16点", "20点", "24点"
    ],
  },
  {
    type: "category",
    show: false,
    data: [
      "0日", "4日", "8日", "12日", "16日", "20日", "24日"
    ],
    axisLine: {
      show: false,
      lineStyle: {
        color: "#27b4c2",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "rgba(154,174,212,0.7)",
      fontSize: "12px",
      margin: 22,
    },
    boundaryGap: false,
  },],

  yAxis: [{
    type: "value",
    name: "",
    nameGap: "0",
    min: function (value) {
      return Math.floor(value.min - 5);
    },
    axisLabel: {
      color: "rgba(154,174,212,0.7)",

      // height: "15px",

      fontSize: "12px",
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      //坐标轴样式 延伸线
      // 0.4px dashed ;
      show: true,
      lineStyle: {
        type: "dashed",
        color: "rgba(216, 216, 216, 0.2)",
        width: 0.5,
        // type: [5, 5],

        // dashOffset: 2
      },
    },
  },],
  dataZoom: [
    // {
    //   type: 'slider',
    //   show: true,
    //   start: 94,
    //   end: 100,
    //   handleSize: 8
    // },
    {
      type: "inside",
      start: 0,
      end: 100,
    },
    // {
    //   type: 'slider',
    //   show: true,
    //   yAxisIndex: 0,
    //   filterMode: 'empty',
    //   width: 12,
    //   height: '70%',
    //   handleSize: 8,
    //   showDataShadow: false,
    //   left: '93%'
    // }
  ],
  series: [{
    name: "月",
    type: "line",
    xAxisIndex: 1,
    smooth: true, //是否平滑
    // showSymbol: false,
    symbol: "image://./img/point.png",
    symbolSize: 24,
    // lineStyle: {
    //   color: "rgba(0,123,255,0.5)",
    //   width: 1.5,
    //   color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //     offset: 0,
    //     color: "rgba(176,217,255, 0)",
    //   },
    //   {
    //     offset: 1,
    //     color: "rgba(176,217,255, 0.5)",
    //   },]),
    //   shadowColor: "rgba(176,217,255, 1)",
    //   shadowBlur: 3,
    //   shadowOffsetY: -1,
    // },
    // itemStyle: {
    //   color: "rgb(255,255,255)",
    //   borderColor: "rgb(255,255,255)",
    // },
    // areaStyle: {
    //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    //     {
    //       offset: 0,
    //       color: "rgba(10,28,68, 0)",
    //     },
    //     {
    //       offset: 0.4,
    //       color: "rgba(10,28,68, 0.2)",
    //     },
    //     {
    //       offset: 0.5,
    //       color: "rgba(176,217,255, 0.05)",
    //     },
    //     {
    //       offset: 0.7,
    //       color: "rgba(176,217,255, 0.2)",
    //     },
    //     {
    //       offset: 0.8,
    //       color: "rgba(176,217,255, 0.4)",
    //     },
    //     {
    //       offset: 1,
    //       color: "rgba(176,217,255, 0.8)",
    //     },
    //   ]),
    // },
    lineStyle: {
      color: "rgba(0,123,255,0.5)",
      width: 1.5,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "rgba(0,123,255, 0)",
      },
      {
        offset: 1,
        color: "rgba(0,123,255, 0.5)",
      },]),
      shadowColor: "rgba(0,123,255, 1)",
      shadowBlur: 3,
      shadowOffsetY: -1,
    },
    itemStyle: {
      color: "rgb(0,123,255)",
      borderColor: "rgb(0,123,255)",
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        {
          offset: 0,
          color: "rgba(10,28,68, 0)",
        },
        {
          offset: 0.4,
          color: "rgba(10,28,68, 0.2)",
        },
        {
          offset: 0.5,
          color: "rgba(0,123,255, 0.05)",
        },
        {
          offset: 0.7,
          color: "rgba(0,123,255, 0.2)",
        },
        {
          offset: 0.8,
          color: "rgba(0,123,255, 0.4)",
        },
        {
          offset: 1,
          color: "rgba(0,123,255, 0.8)",
        },
      ]),
    },
    data: [
      10, 30, 32, 40, 19, 10, 30
    ],
  },
  {
    name: "日",
    xAxisIndex: 0, // 指定使用第一个 X 轴
    type: "line",
    smooth: true, //是否平滑
    // showSymbol: false,
    symbol: "image://./img/point.png",
    symbolSize: 24,
    // lineStyle: {
    //   color: "rgba(0,123,255,0.5)",
    //   width: 1.5,
    //   color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //     offset: 0,
    //     color: "rgba(0,123,255, 0)",
    //   },
    //   {
    //     offset: 1,
    //     color: "rgba(0,123,255, 0.5)",
    //   },]),
    //   shadowColor: "rgba(0,123,255, 1)",
    //   shadowBlur: 3,
    //   shadowOffsetY: -1,
    // },
    // itemStyle: {
    //   color: "rgb(0,123,255)",
    //   borderColor: "rgb(0,123,255)",
    // },
    // areaStyle: {
    //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    //     {
    //       offset: 0,
    //       color: "rgba(10,28,68, 0)",
    //     },
    //     {
    //       offset: 0.4,
    //       color: "rgba(10,28,68, 0.2)",
    //     },
    //     {
    //       offset: 0.5,
    //       color: "rgba(0,123,255, 0.05)",
    //     },
    //     {
    //       offset: 0.7,
    //       color: "rgba(0,123,255, 0.2)",
    //     },
    //     {
    //       offset: 0.8,
    //       color: "rgba(0,123,255, 0.4)",
    //     },
    //     {
    //       offset: 1,
    //       color: "rgba(0,123,255, 0.8)",
    //     },
    //   ]),
    // },
    lineStyle: {
      color: "rgba(0,123,255,0.5)",
      width: 1.5,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "rgba(176,217,255, 0)",
      },
      {
        offset: 1,
        color: "rgba(176,217,255, 0.5)",
      },]),
      shadowColor: "rgba(176,217,255, 1)",
      shadowBlur: 3,
      shadowOffsetY: -1,
    },
    itemStyle: {
      color: "rgb(255,255,255)",
      borderColor: "rgb(255,255,255)",
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        {
          offset: 0,
          color: "rgba(10,28,68, 0)",
        },
        {
          offset: 0.4,
          color: "rgba(10,28,68, 0.2)",
        },
        {
          offset: 0.5,
          color: "rgba(176,217,255, 0.05)",
        },
        {
          offset: 0.7,
          color: "rgba(176,217,255, 0.2)",
        },
        {
          offset: 0.8,
          color: "rgba(176,217,255, 0.4)",
        },
        {
          offset: 1,
          color: "rgba(176,217,255, 0.8)",
        },
      ]),
    },
    data: [
      30, 10, 30, 32, 40, 19, 10
    ],
  },],
};

//风速变化
export const windChangeOption = {
  backgroundColor: "transparent",
  legend: {
    show: false,
    right: 15,
    top: 15,
    color: "#fff",
    itemWidth: 10,
    itemHeight: 5,
    data: [{
      name: "日",
      icon: "rect",
    },],
    itemStyle: {
      color: "#0084FF",
      shadowBlur: 10, // 设置阴影的模糊程度
      shadowColor: "rgb(0,132,255)", // 设置阴影的颜色
      shadowOffsetX: 0, // 设置阴影在水平方向上的偏移量
      shadowOffsetY: 0, // 设置阴影在垂直方向上的偏移量
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      color: "#fff",
    },
  },
  grid: {
    top: "15%",
    left: "10%",
    right: "6%",
    bottom: "12%",
    // containLabel: true
  },
  xAxis: [{
    type: "category",
    axisLine: {
      show: true,
      symbol: ["none", "triangle"],
      symbolSize: "6",
      lineStyle: {
        color: "rgba(6, 88, 131,1)",
        type: "solid",
      },
    },
    // splitArea: {
    //   // show: true,
    //   color: "#fff",
    //   lineStyle: {
    //     color: "#fff",
    //   },
    // },
    axisTick: {
      show: false,
      // lineStyle: { color: "#fff" },
    },
    // interval:4,
    axisLabel: {
      color: "rgba(154,174,212)",

      // height: "15px",

      fontSize: "12px",
    },
    // splitLine: {
    //   show: false,
    // },
    boundaryGap: false,
    data: [
      "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"
    ],
  },],

  yAxis: [{
    type: "value",
    name: "",
    nameGap: "0",
    axisLabel: {
      color: "rgba(154,174,212)",
      // height: "15px",

      fontSize: "12px",
    },
    axisLine: {
      show: true,
      symbol: ["none", "triangle"],
      symbolSize: "6",
      lineStyle: {
        color: "rgba(6, 88, 131,1)",
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      //坐标轴样式 延伸线
      // 0.4px dashed ;
      show: true,
      // interval:1,
      lineStyle: {
        type: "dashed",
        color: "rgba(216, 216, 216, 0.2)",
        width: 0.5,
      },
    },
  },],
  dataZoom: [
    // {
    //   type: 'slider',
    //   show: true,
    //   start: 94,
    //   end: 100,
    //   handleSize: 8
    // },
    {
      type: "inside",
      start: 0,
      end: 100,
    },
    // {
    //   type: 'slider',
    //   show: true,
    //   yAxisIndex: 0,
    //   filterMode: 'empty',
    //   width: 12,
    //   height: '70%',
    //   handleSize: 8,
    //   showDataShadow: false,
    //   left: '93%'
    // }
  ],
  series: [{
    name: "日",
    type: "line",
    smooth: true, //是否平滑
    // showSymbol: false,
    symbol: "image://./img/point.png",
    symbolSize: 24,
    markLine: {
      data: [
        // {
        //   name: '平均线',
        //   // 支持 'average', 'min', 'max'
        //   type: 'average'
        // },
        // {
        //   name: 'Y 轴值为 100 的水平线',
        //   yAxis: 100
        // },
        // [
        //   {
        //     // 起点和终点的项会共用一个 name
        //     name: '最小值',
        //     type: 'min'
        //   },
        //   {
        //     name: '最大值',
        //     type: 'max'
        //   }
        // ],
        // [
        //   {
        //     name: '两个坐标之间的标线',
        //     coord: [10, 20]
        //   },
        //   {
        //     coord: [20, 30]
        //   }
        // ],
        [{
          // 固定起点的 x 像素位置，用于模拟一条指向最大值的水平线
          yAxis: "max",
          x: "12%",
          symbol: "none",
          label: {
            show: false,
          },
        },
        {
          type: "max",
          x: "90%",
          symbol: "none",
        },],
        // [
        //   {
        //     name: '两个屏幕坐标之间的标线',
        //     x: 100,
        //     y: 100
        //   },
        //   {
        //     x: 500,
        //     y: 200
        //   }
        // ]
      ],
      //   symbol: 'none',
      //   itemStyle: {
      //       lineStyle: {
      //         width: 1.5,
      //         type: 'dashed',
      //         color:'#666666'
      //     },
      //     label: {
      //         color:'#666666',
      //         show: true,
      //         position:'end'
      //     }
      // }
      // [
      //   {
      //     yAxis: 'max',
      //     lineStyle: {
      //       type: 'dashed',
      //       color: 'red'
      //     },
      //     label: {
      //       position: 'end',
      //       show: true,
      //       // formatter: '最高点'
      //     }
      //   }
      // ]
    },
    markPoint: {
      data: [{
        type: "max",
        name: "最大值",
        symbol: "image://./img/max.png",
        // symbol:'rect',
        symbolSize: [45, 20],
        symbolOffset: [0, "-70%"],
        label: {
          fontSize: 10,
          fontWeight: 350,
          color: "#FFFFFF",
          formatter: function (params) {
            // params.value 包含了该标记点对应的数值
            // 这里假设该标记点的数值是一个百分比，需要添加单位"%"
            return params.value + "m/s";
          },
        },
      },
        // {
        //   type: 'min',
        //   name: '最小值'
        // }
      ],
    },
    lineStyle: {
      // show: false,
      //   color: "#00ca95",
      color: "rgba(216,216,216,0.5)",
      // lineGradient: [0, 1, 1, 1, 1, 1]
    },
    label: {
      show: false,
      position: "top",
      color: "#00ca95",
    },
    // symbol: "image://./img/point.png",
    // symbolSize: 24,
    lineStyle: {
      color: "rgba(65,255,243,0.5)",
      width: 1.5,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "rgba(65,255,243, 0)",
      },
      {
        offset: 1,
        color: "rgba(65,255,243, 0.5)",
      },]),
      shadowColor: "rgba(65,255,243, 1)",
      shadowBlur: 3,
      shadowOffsetY: -1,
    },
    itemStyle: {
      color: "rgb(65,255,243)",
      borderColor: "rgb(65,255,243)",
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color: "rgba(65,255,243, 0)",
      },
      {
        offset: 0.6,
        color: "rgba(65,255,243, 0.2)",
      },
      {
        offset: 0.8,
        color: "rgba(65,255,243, 0.4)",
      },
      {
        offset: 1,
        color: "rgba(65,255,243, 0.8)",
      },]),
    },
    data: [
      200, 350, 200, 160, 300, 250, 150
    ],
  },],
};

//PM2.5
export const pm25ChangeOption = {
  backgroundColor: "transparent",
  legend: {
    right: 15,
    top: 6,
    color: "#fff",
    itemWidth: 10,
    itemHeight: 5,
    data: [{
      name: "日",
      icon: "rect",
    },],
    itemStyle: {
      color: "#0084FF",
      shadowBlur: 10, // 设置阴影的模糊程度
      shadowColor: "rgb(0,132,255)", // 设置阴影的颜色
      shadowOffsetX: 0, // 设置阴影在水平方向上的偏移量
      shadowOffsetY: 0, // 设置阴影在垂直方向上的偏移量
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      color: "#fff",
    },
  },
  grid: {
    top: "15%",
    left: "10%",
    right: "5%",
    bottom: "12%",
    // containLabel: true
  },
  xAxis: [{
    type: "category",
    axisLine: {
      show: false,
      lineStyle: {
        color: "#27b4c2",
      },
    },
    // splitArea: {
    //   // show: true,
    //   color: "#fff",
    //   lineStyle: {
    //     color: "#fff",
    //   },
    // },
    axisTick: {
      show: false,
      // lineStyle: { color: "#fff" },
    },
    // interval:4,
    axisLabel: {
      color: "rgba(154,174,212,0.7)",

      fontSize: "12px",
    },
    boundaryGap: false,
    data: [
      "0点", "4点", "8点", "12点", "16点", "20点", "24点"
    ],
  },],

  yAxis: [{
    type: "value",
    name: "",
    nameGap: "0",
    axisLabel: {
      color: "rgba(154,174,212,0.7)",

      fontSize: "12px",
    },
    axisLine: {
      show: false,
      lineStyle: {
        // color: "#27b4c2",
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      //坐标轴样式 延伸线
      // 0.4px dashed ;
      show: true,
      lineStyle: {
        type: "dashed",
        color: "rgba(216, 216, 216, 0.2)",
        width: 0.5,
      },
    },
  },],
  dataZoom: [
    // {
    //   type: 'slider',
    //   show: true,
    //   start: 94,
    //   end: 100,
    //   handleSize: 8
    // },
    {
      type: "inside",
      start: 0,
      end: 100,
    },
    // {
    //   type: 'slider',
    //   show: true,
    //   yAxisIndex: 0,
    //   filterMode: 'empty',
    //   width: 12,
    //   height: '70%',
    //   handleSize: 8,
    //   showDataShadow: false,
    //   left: '93%'
    // }
  ],
  series: [{
    name: "日",
    type: "line",
    smooth: true, //是否平滑
    symbol: "image://./img/point.png",
    symbolSize: 24,
    lineStyle: {
      color: "rgba(0,123,255,0.5)",
      width: 1.5,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: "rgba(0,123,255, 0)",
      },
      {
        offset: 1,
        color: "rgba(0,123,255, 0.5)",
      },]),
      shadowColor: "rgba(0,123,255, 1)",
      shadowBlur: 3,
      shadowOffsetY: -1,
    },
    itemStyle: {
      color: "rgb(0,123,255)",
      borderColor: "rgb(0,123,255)",
    },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color: "rgba(0,123,255, 0)",
      },
      {
        offset: 0.6,
        color: "rgba(0,123,255, 0.2)",
      },
      {
        offset: 0.8,
        color: "rgba(0,123,255, 0.4)",
      },
      {
        offset: 1,
        color: "rgba(0,123,255, 0.8)",
      },]),
    },
    data: [
      30, 10, 30, 32, 40, 19, 10
    ],
  },],
};
let angle = 0; //角度，用来做简单的动画效果的
let timerId;
//温度监控水球
export const waterOption = () => ({
  backgroundColor: "transparent",
  tooltip: {
    trigger: "item",
    position: ["50%", "45%"],
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
  },
  series: [
    {
      type: "liquidFill",
      center: ["50%", "50%"],
      radius: "70%",
      // backgroundStyle: {
      //   // borderColor: "transparent",
      //   color: "rgba(0,0,0,0)"
      //   // borderWidth: 1,
      //   // shadowColor: "rgba(0, 0, 0, 0.4)",
      //   // shadowBlur: 20,
      // },
      itemStyle: {
        color: "#79CBFF",
      },
      backgroundStyle: {
        color: {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0.5,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: "rgba(68, 145, 253, 0)",
          },
          {
            offset: 0.5,
            color: "rgba(68, 145, 253, .25)",
          },
          {
            offset: 1,
            color: "rgba(68, 145, 253, 1)",
          },],
          globalCoord: false,
        },
      },
      outline: {
        show: true,
        borderDistance: 1, // 外部圆线距离水球的距离
        itemStyle: {
          // 外部圆线样式
          borderWidth: 1, // 外部圆线宽度
          borderColor: "rgba(255,255,255,0.45)", // 外部圆线颜色
          //shadowBlur: 20, // 外部圆线阴影范围
          //shadowColor: 'rgba(0, 0, 0, 0.25)' // 外部圆线阴影颜色
        },
      },
      label: {
        color: "#fff", //transprant
        show: true,
        fontSize: 12,
        // formatter: "{b}: {c}", //格式化显示
      },
      data: [0.26, 0.26, 0.26],
    },
    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8,
            startAngle: ((0 + angle) * Math.PI) / 180,
            endAngle: ((90 + angle) * Math.PI) / 180,
          },
          style: {
            stroke: "#8383FA",
            fill: "transparent",
            lineWidth: 0.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5", //紫点
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8;
        let point = getCirlPoint(x0, y0, r, 90 + angle);
        return {
          type: "circle",
          shape: {
            cx: point.x,
            cy: point.y,
            r: 1,
          },
          style: {
            stroke: "#8450F9", //绿
            fill: "#8450F9",
          },
          silent: true,
        };
      },
      data: [0],
    },
    // 蓝色

    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8,
            startAngle: ((180 + angle) * Math.PI) / 180,
            endAngle: ((270 + angle) * Math.PI) / 180,
          },
          style: {
            stroke: "#4386FA",
            fill: "transparent",
            lineWidth: 0.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5", // 蓝色
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.8;
        let point = getCirlPoint(x0, y0, r, 180 + angle);
        return {
          type: "circle",
          shape: {
            cx: point.x,
            cy: point.y,
            r: 1,
          },
          style: {
            stroke: "#4386FA", //绿
            fill: "#4386FA",
          },
          silent: true,
        };
      },
      data: [0],
    },

    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.9,
            startAngle: ((270 + -angle) * Math.PI) / 180,
            endAngle: ((40 + -angle) * Math.PI) / 180,
          },
          style: {
            stroke: "#0CD3DB",
            fill: "transparent",
            lineWidth: 0.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    // 橘色

    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.9,
            startAngle: ((90 + -angle) * Math.PI) / 180,
            endAngle: ((220 + -angle) * Math.PI) / 180,
          },
          style: {
            stroke: "#FF8E89",
            fill: "transparent",
            lineWidth: 0.5,
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5",
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.9;
        let point = getCirlPoint(x0, y0, r, 90 + -angle);
        return {
          type: "circle",
          shape: {
            cx: point.x,
            cy: point.y,
            r: 1,
          },
          style: {
            stroke: "#FF8E89", //粉
            fill: "#FF8E89",
          },
          silent: true,
        };
      },
      data: [0],
    },
    {
      name: "ring5", //绿点
      type: "custom",
      coordinateSystem: "none",
      renderItem: function (params, api) {
        let x0 = api.getWidth() / 2;
        let y0 = api.getHeight() / 2;
        let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.9;
        let point = getCirlPoint(x0, y0, r, 270 + -angle);
        return {
          type: "circle",
          shape: {
            cx: point.x,
            cy: point.y,
            r: 1,
          },
          style: {
            stroke: "#0CD3DB", //绿
            fill: "#0CD3DB",
          },
          silent: true,
        };
      },
      data: [0],
    },
  ],
});

// export const chartOption = {
//   //animation: false,
//   legend: {
//       data: legendData
//   },
//   tooltip: {
//       formatter: params => {
//           if (params.seriesName !== 'mouseoutSeries') {
//               return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}`;
//           }
//       }
//   },
//   xAxis3D: {
//       min: -1,
//       max: 1
//   },
//   yAxis3D: {
//       min: -1,
//       max: 1
//   },
//   zAxis3D: {
//       min: -1,
//       max: 1
//   },
//   grid3D: {
//       show: false,
//       boxHeight: 10,
//       viewControl: {//3d效果可以放大、旋转等，请自己去查看官方配置
//           alpha: 40,
//           // beta: 40,
//           rotateSensitivity: 0,
//           zoomSensitivity: 0,
//           panSensitivity: 0,
//           autoRotate: false
//       },
//       //后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
//       postEffect: {//配置这项会出现锯齿，请自己去查看官方配置有办法解决
//           enable: true,
//           bloom: {
//               enable: true,
//               bloomIntensity: 0.1
//           },
//           SSAO: {
//               enable: true,
//               quality: 'medium',
//               radius: 2
//           }
//       }
//   },
//   series: series
// };
//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
  let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
  let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
  return {
    x: x1,
    y: y1,
  };
}

function draw() {
  angle = angle + 3;
  // myChart.setOption(option, true)
  //window.requestAnimationFrame(draw);
}
if (timerId) {
  clearInterval(timerId);
}
timerId = setInterval(function () {
  //用setInterval做动画感觉有问题
  draw();
}, 100);
