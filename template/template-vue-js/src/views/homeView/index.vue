<template>
    <transition-group tag="div" class="animation" appear name="fade-in-down">
      <component
			v-for="item in components"
			:key="item.name"
			:is="item.component"
			class="left-item"
			:class="item.name"
		>
			{{ item.name }}
		</component>
    </transition-group>
</template>

<script setup>
import securityMonitoring from './components/securityMonitoring'
const components = shallowRef([
	{ name: 'securityMonitoring', component: securityMonitoring },
])

</script>
<style lang="scss" scoped>
.animation{
  .left-item{
    &:nth-child(1){
      animation-duration: 10s
    }
  }
}
  .securityMonitoring {
    @include bgIndex;
    left: 16px;
    top: 73px;
    width: 326px;
    height: 636px;
  }
</style>
