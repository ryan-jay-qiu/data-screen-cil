import { onMounted, onUnmounted } from 'vue'
export default function resizeScale(
  el,
  fullScreen,
  width = 1920,
  height = 1080,
  transformOrigin = 'top left'
) {
  const main = () => {
    const windowWidth = document.documentElement.clientWidth
    const windowHeight = document.documentElement.clientHeight
    const scaleX = windowWidth / width
    const scaleY = windowHeight / height // Keep the same aspect ratio by using the same scaleX for scaleY
    let scale = 1
    if (windowWidth / windowHeight > width / height) {
      // 如果浏览器的宽高比大于设计稿的宽高比，就取浏览器高度和设计稿高度之比
      scale = scaleY
    } else {
      // 如果浏览器的宽高比小于设计稿的宽高比，就取浏览器宽度和设计稿宽度之比
      scale = scaleX
    }

    el.style.width = width + 'px'
    el.style.height = height + 'px'

    if (fullScreen) {
      // 如果不在乎缩放失真的情况，可以设置全屏
      el.style.transformOrigin = `top left`
      el.style.transform = `scale(${scaleX}, ${scaleY})`
    } else {
      // 否则选择适配比例缩放
      el.style.transformOrigin = `left top`
      el.style.transform = 'scale(' + scale + ') translate(-50%,-50%)'
    }
  }
  main()
  window.addEventListener('resize', main)
  onUnmounted(() => {
    window.removeEventListener('resize', main)
  })
}
