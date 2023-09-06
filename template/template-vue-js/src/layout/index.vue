<template>
  <headerTime />
  <router-view></router-view>
  <footMenu class="footer" :default-active="active" @change="routerChange" />
</template>
<script setup>
// import footMenu from "./components/footMenu";
// import headerTime from './components/headerTime';
import { ref, onMounted, onBeforeMount, nextTick } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const active = ref(null);
onBeforeMount(() => {
  active.value = window.location.pathname;
});
const routerChange = (val) => {
  router.push(val);
};
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