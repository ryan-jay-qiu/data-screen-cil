<template>
  <ElCascader v-model="value" clearable placeholder="设备选择" :options="options" :show-all-levels="false" />
</template>

<script setup>
import { ElCascader } from "element-plus";

const value = ref([])

const props = {
  expandTrigger: 'hover',
}

const options = [{
  value: 'A区域',
  label: 'A区域',
  children: [{
    value: 'A区域矿山3号监控',
    label: 'A区域矿山3号监控',
  },
  {
    value: 'A区域矿山5号监控',
    label: 'A区域矿山5号监控',
  }],
},
{
  value: 'B区域',
  label: 'B区域',
  children: [{
    value: 'B区域矿山1号监控',
    label: 'B区域矿山1号监控',
  },
  {
    value: 'B区域矿山3号监控',
    label: 'B区域矿山3号监控',
  },
  {
    value: 'B区域矿山5号监控',
    label: 'B区域矿山5号监控',
  },],
},]
</script>

<style lang="scss">
.el-cascader-node__postfix {
  display: none;
}

.el-cascader-menu {
  width: fit-content;
}

.el-cascader-menu__wrap.el-scrollbar__wrap {
  height: auto !important;
}

.el-input__wrapper {
  border-radius: inherit !important;
  box-shadow: none !important;
  width: fit-content;
}

// .el-cascader-menu__list {

//   background: none !important;
//   background-color: none !important;
// }

.el-cascader__dropdown {
  background: rgba(0, 61, 135, 0.8) !important;
  backdrop-filter: blur(15px) !important;
}

.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  background: rgba(0, 61, 135, 0.6) !important;
}

.el-input__inner {
  font-family: 思源黑体;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0em;
  color: #FFFFFF;
}

.el-input__inner::-webkit-input-placeholder {
  color: #ffffff !important;
}

.el-input .el-input__icon {
  margin-left: 0px !important
}

.el-cascader .el-input .icon-arrow-down {
  font-size: 12px !important;
  color: #fff;
}

.el-input__suffix {
  display: none !important;
}
</style>
