<template>
  <div class="root" ref="rootRef" >
    <router-view></router-view>
  </div>
</template>
<script setup>
import resizeScale from "@/utils/resizeScale.js"

const show = ref(false);
const rootRef = ref(null)
onMounted(() => {
  show.value = true;
  resizeScale(rootRef.value)
});
</script>
<style scoped lang="scss">
.root {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>
<style lang="scss">
[v-cloak] {
  display: none;
}


.fade-in-down-right-enter-active {
  transition: opacity 1s ease-out,transform 1s ease-out;
}

.fade-in-down-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}


.fade-in-down-enter-active {
  transition: opacity 1s ease-out,transform 1s ease-out;
}
.fade-in-down-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}


#app {
      &::after {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 1;
        z-index: -1;
        background: url('./assets/images/bg-bg.png') 100% 100% no-repeat;
        background-size: cover;
      }
    }

    #app {
      &::before {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 1;
        z-index: -1;
        background: url('./assets/images/bg-all.png') no-repeat;
        background-size: cover;
      }
    }
</style>
