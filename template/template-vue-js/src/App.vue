<template>
  <div class="root"  :style="style" ref="rootRef" :class="[showMask == 'blue' ? 'mask-blue' : 'mask-dark']">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script setup>
import resizeScale from "@/utils/resizeScale.js"
import { useRouter } from "vue-router";
const router = useRouter();
const showMask = ref("blue")
router.beforeEach((to, from, next) => {
  // 通过 to.meta.overlay 来获取当前路由的背景遮罩状态
  const showOverlay = to.meta.overlay;
  showMask.value = showOverlay
  next();
})
const show = ref(false);
const rootRef = ref(null)
onMounted(() => {
  show.value = true;
  resizeScale(rootRef.value)
});
const style = {
  background: import.meta.env.VITE_ENV == 'development' ? '#000' : 'none'
}
</script>
<style scoped lang="scss">
.root.mask-blue {

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: -1;
    background: url("./assets/images/bg-bg.png") 100% 100% no-repeat;
    background-size: cover;
  }
}

.root.mask-blue {
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: -1;
    background: url("./assets/images/bg-all.png") no-repeat;
    background-size: cover;
  }
}

.root.mask-dark {
  &::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: -1;
    background: linear-gradient(180deg, #001A4C 0%, #000F2C 100%) 100% 100% no-repeat;
    background-size: cover;
  }
}
</style>
<style lang="scss">
[v-cloak] {
  display: none;
}

.fade-in-down-right-enter-active,
.fade-in-down-right-leave-active {
  will-change: transform;
  transition: all 1s ease-out;
  /*1s后从初始状态，过渡到显示状态*/
}

.fade-in-down-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-in-down-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-down-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-in-down-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}


.fade-in-down-enter-active {
  animation: fade-in-down-enter 1s ease-out;
}

.fade-in-down-leave-active {
  animation: fade-in-down-leave 1s ease-out;
}

@keyframes fade-in-down-enter {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-down-leave {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(100%);
  }
}





.el-loading-spinner {
  margin-top: 0 !important;
  transform: translateY(-50%);
}

.echart .watch>div:last-child {

  background: rgba(0, 61, 135, 0.8);
  background-color: rgba(0, 61, 135, 0.8) !important;
  backdrop-filter: blur(15px);
  border-style: none !important;

  div {
    color: #D1E0FF !important;
  }

  span:not(span:first-child) {
    color: #D1E0FF !important;
  }
}
</style>
@/utils/useScale.js
