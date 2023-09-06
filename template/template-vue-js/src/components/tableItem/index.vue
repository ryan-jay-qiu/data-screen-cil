<template>
  <div class="container-table">
    <div v-for="(item, index) in data" :key="index" :class="style(item?.type)" class="item">
      <span>{{ "A区域16号监控" }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  dataSource: {
    type: Array,
    default: () => {
      return [
        {
          title: "A区域16号监控",
          type: 3
        },
        {
          title: "A区域16号监控",
          type: 1
        },
        {
          title: "A区域16号监控",
          type: 2
        },
        {
          title: "A区域16号监控",
          type: 1
        },
        {
          title: "A区域16号监控",
          type: 3
        },
        {
          title: "A区域16号监控",
          type: 1
        },
        {
          title: "A区域16号监控",
          type: 1
        },
        {
          title: "A区域16号监控",
          type: 1
        },
        {
          title: "A区域16号监控",
          type: 1
        },
      ]
    }
  }
})
const data = computed(() => props.dataSource.sort((a, b) => a.type - b.type))
const style = (type = 'red') => {
  // return item.type == 'red' ? 'red' : item.type == 'blue' ? 'blue' : 'orange'
  return type == 1 ? 'red' : type == 2 ? 'orange' : 'blue'
}

// const props = defineProps([{
//     value: {
//         type: Array
//     }
// }])
</script>
<style scoped lang="scss">
.container-table {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
}

.item {
  width: 134px;
  height: 40px;
  padding-top: 5px;
  padding-left: 30px;

  span {
    font-size: 12px;
    // -webkit-text-fill-color: rgba(13, 154, 255, .8);
  }

  &.blue {
    background: url("./assets/images/blue.png") no-repeat;
    background-size: contain;

    span {
      background: linear-gradient(133deg, #29ACFF 26%, #0D9AFF 57%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &.red {
    background: url("./assets/images/red.png") no-repeat;
    background-size: contain;

    span {
      background: linear-gradient(133deg, #FF7A4D 29%, #FF6A2F 56%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &.orange {
    background: url("./assets/images/orange.png") no-repeat;
    background-size: contain;

    span {
      // background-image: -webkit-linear-gradient(top, #bc2f08, #d75d10, #de6912);
      // background-clip: text;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      color: #FFCF37;
    }
  }
}
</style>