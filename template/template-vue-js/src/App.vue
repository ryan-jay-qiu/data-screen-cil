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
  transition: opacity 1s ease-out,transform 1s ease-out;
  /*1s后从初始状态，过渡到显示状态*/
}

.fade-in-down-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}


.fade-in-down-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}


.fade-in-down-enter-active,.fade-in-down-leave-active {
  transition: opacity 1s ease-out,transform 1s ease-out;
}
.fade-in-down-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}


.fade-in-down-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
