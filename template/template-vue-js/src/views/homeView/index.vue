<template>
  <transition-group tag="div" class="animation" appear name="fade-in-down">
    <component
      v-for="item in componentsLeft"
      :key="item.name"
      :is="item.component"
      class="left-item"
      :class="item.name"
    >
      {{ item.name }}
    </component>
  </transition-group>
  <transition-group tag="div" class="animation" appear name="fade-in-down-right">
    <component
      v-for="item in componentsRight"
      :key="item.name"
      :is="item.component"
      class="right-item"
      :class="item.name"
    >
      {{ item.name }}
    </component>
  </transition-group>
</template>

<script setup>
import right from './components/securityMonitoring'
import warnInfo from './components/securityMonitoring'
const componentsLeft = shallowRef([{ name: 'warnInfo', component: warnInfo }])
const componentsRight = shallowRef([{ name: 'safeChart', component: right }])
</script>
<style lang="scss" scoped>
.animation {
  .left-item {
    &:nth-child(2) {
      transition-delay: 0.2s;
    }
  }
  .right-item {
    &:nth-child(1) {
      transition-delay: 0.2s;
    }
  }
}
.left-item {
  @include bgIndex;
  left: 0;
  width: 326px;
  height: 636px;
}
.right-item {
  @include bgIndex;
  right: 0;
  width: 326px;
  height: 636px;
}
</style>
