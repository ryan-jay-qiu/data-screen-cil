<template>
  <div class="progress-bar" :style="progressStyle">
    <div class="progress-bar-fill" :style="fillStyle" />
    <!-- <div class="progress-bar-text">{{ progress }}%</div> -->
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    progress: { type: Number, required: true },
    width: { type: String, default: "100" },
    height: { type: String, default: "100" },
    bgColor: { type: String, default: "#f0f0f0" },
    fillColor: { type: String, default: "#1abc9c" },
  },
  computed: {
    progressStyle() {
      return {
        width: `${this.width}%`,
        height: `${this.height}%`,
        background: this.bgColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"

      };
    },
    fillStyle() {
      return {
        width: `${this.progress}%`,
        height: `${this.height}%`,
        background: this.fillColor, backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      };
    },
  },
});
</script>
<style>
.progress-bar {
  /* display: inline-block; */
  overflow: hidden;
}

.progress-bar-fill {
  /* display: inline-block; */
  transition: width 0.5s;
}

.progress-bar-text {
  display: inline-block;
  margin-left: 10px;
}
</style>
