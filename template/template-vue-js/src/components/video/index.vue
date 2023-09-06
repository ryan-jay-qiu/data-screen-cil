<!-- <template>
  <canvas ref="canvas" class="audio-bars" />
</template>
  
<script setup>
const canvas = ref(null);
let ctx;
let animationFrameId;
let barHeights = [];
let updateCounter = 0; // 计数器，用于控制更新的间隔
const updateInterval = 25; // 更新的间隔，单位为帧数
// 创建函数来更新柱形条的高度
function updateBars() {
  updateCounter++;
  if (updateCounter >= updateInterval) {
    updateCounter = 0;


    const numBars = 60; // 柱形条的数量
    const maxBarHeight = 60; // 最大柱形条高度
    const barWidth = canvas.value.width / (numBars * 2); // 柱形条的宽度

    // 清空画布
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    // 生成随机高度的柱形条
    for (let i = 0; i < numBars; i++) {
      const barHeight = Math.floor(Math.random() * maxBarHeight) + 1;
      barHeights[i] = barHeight;

      // 计算柱形条的位置
      const centerX = canvas.value.width / 2; // 画布的中心横坐标
      const startY = ((canvas.value.height - barHeight) / 2) - 20; // 柱形条的起始纵坐标
      const startX = centerX - (i + 0.5) * barWidth; // 柱形条的起始横坐标
      const endX = centerX + (i + 0.5) * barWidth; // 柱形条的结束横坐标

      // 绘制柱形条
      ctx.fillStyle = 'rgba(1,60,188,0.7)';
      ctx.fillRect(startX, startY, barWidth, barHeight);
      ctx.fillRect(endX, startY, barWidth, barHeight);
    }
  }
  // 通过递归调用来实现动态效果
  // animationFrameId = requestAnimationFrame(updateBars);
  // 通过递归调用来实现动态效果
  animationFrameId = requestAnimationFrame(updateBars);
}

// 在组件挂载后开始更新柱形条
onMounted(() => {
  ctx = canvas.value.getContext('2d');
  updateBars();
});

// 在组件卸载前停止更新柱形条
onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>
  
<style scoped>
.audio-bars {
  width: 100%;
  height: 100%;
}
</style>
   -->
<template>
  <canvas ref="canvas" class="audio-bars" />
</template>
  
<script setup>
const canvas = ref(null);
let ctx;
let animationFrameId;
let barHeights = [];
let updateCounter = 0; // 计数器，用于控制更新的间隔
const updateInterval = 25; // 更新的间隔，单位为帧数

// 定义接受参数的 props
const props = defineProps({
  barHeight: {
    type: Number,
    default: 60
  }
});

// 创建函数来更新柱形条的高度
function updateBars() {
  updateCounter++;
  if (updateCounter >= updateInterval) {
    updateCounter = 0;

    const numBars = 60; // 柱形条的数量
    const maxBarHeight = props.barHeight; // 最大柱形条高度，从父组件接收
    const barWidth = canvas.value.width / (numBars * 2); // 柱形条的宽度
    // 清空画布
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    // 生成随机高度的柱形条
    for (let i = 0; i < numBars; i++) {
      const barHeight = Math.floor(Math.random() * maxBarHeight) + 1;
      barHeights[i] = barHeight;

      // 计算柱形条的位置
      const centerX = canvas.value.width / 2; // 画布的中心横坐标
      const startY = ((canvas.value.height - barHeight) / 2) - 20; // 柱形条的起始纵坐标
      const startX = centerX - (i + 0.5) * barWidth; // 柱形条的起始横坐标
      const endX = centerX + (i + 0.5) * barWidth; // 柱形条的结束横坐标

      // 绘制柱形条
      ctx.fillStyle = 'rgba(1,60,188,0.7)';
      ctx.fillRect(startX, startY, barWidth, barHeight);
      ctx.fillRect(endX, startY, barWidth, barHeight);
    }
  }
  // 通过递归调用来实现动态效果
  animationFrameId = requestAnimationFrame(updateBars);
}

// 在组件挂载后开始更新柱形条
onMounted(() => {
  ctx = canvas.value.getContext('2d');
  updateBars();
});
// 在组件卸载前停止更新柱形条
onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>
  
<style scoped>
.audio-bars {
  width: 100%;
  height: 100%;
}
</style>
  