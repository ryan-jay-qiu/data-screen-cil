<template>
  <headerTime />
  <router-view></router-view>

</template>
<script setup>
import headerTime from './components/headerTime';


</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 977px;
  width: 1128px;
  display: flex;
  white-space: nowrap;
}
</style>
