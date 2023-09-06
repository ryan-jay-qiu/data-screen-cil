<template>
  <div ref="videoLoading" style="width: 100%; height: 100%;">
    <canvas id="video1" ref="videoRef2" class="style-video" alt="" @click="openBigVideo" />
    <modalVideo v-if="showModal" :option="option" :visible="showVideoModal" @close="handlerClose" />
  </div>
</template>

<script setup>
import { initVideo } from "@/utils"
import { ElLoading } from 'element-plus'
import modalVideo from "@/components/modalVideo"
const props = defineProps({
  option: {
    type: Object,
    default: () => { }
  },
  showModal: {
    type: Boolean,
    default: true
  }
})
const showVideoModal = ref(false);
const handlerClose = () => {
  showVideoModal.value = false
}

const openBigVideo = () => {
  showVideoModal.value = true
}
const videoLoading = ref(null)
const videoRef2 = ref(null);
let JSMpegInstance2 = null;
const openLoading = () => {
  const loading = ElLoading.service({
    target: videoLoading.value,
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  return loading
}
onMounted(() => {
  console.log(props.option, videoRef2.value.clientWidth)
  const loading = openLoading()
  initVideo(props.option.rtsp, videoRef2.value, videoRef2.value.clientWidth).then(res => {
    JSMpegInstance2 = res;
    loading.close()
  })
})
onUnmounted(() => {
  JSMpegInstance2?.destroy()
})
</script>

<style lang="scss" scoped>
#video1 {
  width: inherit;
  height: inherit;
}

.style-video {
  cursor: pointer;
}
</style>