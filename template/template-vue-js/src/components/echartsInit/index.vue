<template>
  <div class="container">
    <div ref="ec" class="watch" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, onUnmounted } from "vue";
import * as echarts from 'echarts';
import 'echarts-liquidfill'
let props = defineProps({
  data: {
    type: Object,
    default: () => { }
  },
  option: {
    type: Object,
    default: () => { }
  }
});
// const myPropValue = ref(props.myProp);
let ec = ref(null);
let myChart = reactive({});
watch(() => props.data, () => {
  myChart?.setOption(props.data);
}, {
  deep: true,
})
watch(() => props.option, () => {
  myChart?.setOption(props.option);
}, {
  deep: true,
})
// 处理窗口大小变化事件
const handleResize = () => {
  myChart.resize();
};
onMounted(() => {
  myChart = echarts.init(ec.value);
  const option = props.option;
  const data = props.data;
  myChart.setOption(option);
  if (data) myChart.setOption(data);
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  // 销毁 ECharts 实例
  myChart.dispose();

  // 移除窗口大小变化事件监听
  window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  .watch {
    height: 100%;
  }
}
</style>
