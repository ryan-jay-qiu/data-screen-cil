<template>
  <div class="container">
    <div class="box1">
      <div class="header">
        综合安全评测
      </div>
      <div class="content">
        <svgBoll class="svg"  />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, toRefs, onBeforeUnmount, onUnmounted } from "vue";
import videoLive from "@/components/videoLive"
import viewBottom from "@/components/viewBottom";
import svgBoll from "@/components/icons/boll.vue"
import { homeViewVideo1, homeViewVideo2_1, homeViewVideo2_2 } from "@/utils/camera"
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url("./assets/images/bg.png") no-repeat;
  background-size: contain;
  padding: 56px 14px 0;
}

.header {
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  line-height: 18px;
}

.box1 {
  .content {
    width: 265px;
    height: 158px;
    margin: 0 auto;
  }

  .svg {
    position: absolute;
    top: 12px;
    left: 20px;

    :deep(svg) {
      width: 288.025390625px;
      height: 385.14111328125px;
    }
  }
}

.box2 {
  .header {
    margin: 10px 0;
  }

  .content {
    .monitor1 {
      width: 296px;
      height: 160px;
      margin: 0 auto;
      margin-bottom: 15px;
      z-index: 9999;
      position: relative;
      // cursor: pointer;

      #video1 {
        width: 296px;
        height: 160px;
      }
    }

    .monitor2 {
      // margin-left: 14px;
      width: 148px;
      height: 91px;
    }

    .monitor3 {
      width: 148px;
      height: 91px;
    }
  }
}

.line {
  animation: move 3s infinite;
  animation-direction: alternate;
}

@keyframes move {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
