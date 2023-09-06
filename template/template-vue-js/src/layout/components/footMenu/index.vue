<template>
  <transition-group tag="div" class="tagBox" name="fade">
    <div v-for="(item, index) in list" :key="item.path" class="tag" :class="{ active: 3 == index }"
      :style="getImg(item.path, item.type)" @click="clickTag(index, item)" />
  </transition-group>
</template>

<script setup>
const props = defineProps(['defaultActive'])
const emit = defineEmits(['change'])
const list = reactive([
  { path: "1", page: "/WaterSelfControl" },
  { path: "2", page: "/produceSelfControl" },
  { path: "3", page: "/home" },
  { path: "0", type: 'center' },
  { path: "4", page: "/videoMonitor" },
  { path: "5", page: "/environmentMonitor" },
  { path: "6", page: "/weightRoomMange" },
]);
const path = props.defaultActive == "/" ? '/home' : props.defaultActive
list[3].path = list.find(item => item.page == path).path;
//点击中心元素
function clickTag(index, item) {
  if (index == 3) return;
  emit("change", item.page);
  list[3].path = item.path;
}
// 获取图片样式
// imgUrl.value = new URL(`./assets/images/${props.type}.png`, import.meta.url)();
function getImg(name, type) {
  let img = type
    ? new URL(`./assets/img/${list[3].path}-focu.png`, import.meta.url)
    : new URL(`./assets/img/${name}.png`, import.meta.url);
  console.log(img)
  let obj = {
    backgroundImage: `url(${img})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
  };
  return obj;
}
</script>

<style scoped lang="scss">
.btn {
  width: 48px;
  height: 43px;
}

.left {
  margin-top: 30px;
  background: url("@/assets/btnleft.png") no-repeat;
  background-size: contain;
}

.right {
  margin-top: 20px;
  background: url("@/assets/btnright.png") no-repeat;
  background-size: contain;
}

.tagBox {
  width: 100%;
  padding-top: 30px;
  height: 100px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  display: flex;
  justify-content: space-between;
  /**需要设置在盒子设置相对定位，不然offsetLeft会基于整个页面body */
}

.tag {
  display: inline-block;
  position: relative;
  // transition: transform 0.3s ease-in-out;
  width: 136px;
  height: 51px;
  cursor: pointer;
  opacity: 1;
  // margin-left: 24px;
  transform: none;

  // &:first-child {
  //   margin-left: 0px;
  // }
}

.tag.active {
  // transform: scale(1.2) translateY(-10px);
  // position: relative;
  top: -20px;
  width: 157px;
  height: 77px;
  right: 4px;
  // &::after{
  //   content: "";
  //   position: absolute;
  //   bottom: 0;
  //   filter: drop-shadow(0 0 10px #fff)
  // }
}

/* 1. 声明过渡效果 */
// .fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20%);
}

.fade-leave-from {
  opacity: 0;
  //   // transform: translateY(-100%);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
<!-- <template>
  <transition-group tag="div" class="tagBox" name="footer-active">
    <div v-for="(item, index) in list" :key="item.path" class="tag" :class="{ active: 3 == index }"
      :style="getImg(item.path, item.type)" @click="clickTag(index, item)" />
  </transition-group>
</template>

<script setup>
const props = defineProps(['defaultActive'])
const emit = defineEmits(['change'])
const list = reactive([
  { path: "1", page: "/WaterSelfControl" },
  { path: "2", page: "/produceSelfControl" },
  { path: "3", page: "/home" },
  { path: "0", type: 'center' },
  { path: "4", page: "/videoMonitor" },
  { path: "5", page: "/environmentMonitor" },
  { path: "6", page: "/weightRoomMange" },
]);
list[3].path = list.find(item => item.page == props.defaultActive).path;
//点击中心元素
function clickTag(index, item) {
  if (index == 3) return;
  emit("change", item.page);
  list[3].path = item.path;
}
// 获取图片样式
function getImg(name, type) {
  let img = type
    ? require(`@/assets/images/${list[3].path}-focu.png`)
    : require(`@/assets/images/${name}.png`);
  let obj = {
    backgroundImage: `url(${img})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
  };
  return obj;
}
</script> -->

<!-- <style scoped lang="scss">
.btn {
  width: 48px;
  height: 43px;
}

.left {
  margin-top: 30px;
  background: url("@/assets/btnleft.png") no-repeat;
  background-size: contain;
}

.right {
  margin-top: 20px;
  background: url("@/assets/btnright.png") no-repeat;
  background-size: contain;
}

.tagBox {
  width: 100%;
  padding-top: 30px;
  height: 100px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  display: flex;
  justify-content: space-between;
  /**需要设置在盒子设置相对定位，不然offsetLeft会基于整个页面body */
}

.tag {
  display: inline-block;
  position: relative;
  // transition: transform 0.3s ease-in-out;
  width: 136px;
  height: 51px;
  opacity: 1;
  // margin-left: 24px;
  transform: none;

  // &:first-child {
  //   margin-left: 0px;
  // }
}

.tag.active {
  // transform: scale(1.2) translateY(-10px);
  // &::after{
  //   content: "";
  //   position: absolute;
  //   bottom: 0;
  //   filter: drop-shadow(0 0 10px #fff)
  // }
}

.footer-active-enter-active {
  will-change: transform;
  position: absolute;
  transition: all .6s ease-out;
  /*1s后从初始状态，过渡到显示状态*/
}

.footer-active-leave-active {
  will-change: transform;
  // position: absolute;
  transition: all .6s ease-out;
  /*1s后从初始状态，过渡到显示状态*/
}

.footer-active-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.footer-active-enter-to {
  opacity: 0;
  transform: translateY(0);
}

.footer-active-leave-from {
  opacity: 1;
  transform: scale(1);
}

.footer-active-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>  -->
