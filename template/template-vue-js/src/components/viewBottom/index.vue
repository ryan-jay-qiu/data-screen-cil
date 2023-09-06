<template>
  <div class="detail">
    <div class="left">
      <!-- <div class="bc"></div> -->
      <img :src="imgUrl" alt="">
      <div class="right-flex">
        <span>设备总量:</span>
        <div>{{ 387 }}个</div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <img src="./assets/images/normal.png" alt="">
        <div class="right-flex">
          <span class="font-title">正常:</span>
          <div class="font-num">
            {{ 340 }}
          </div>
        </div>
      </div>
      <div class="bottom">
        <img src="./assets/images/broken.png" alt="">


        <div class="right-flex">
          <span class="font-title">损坏:</span>
          <div class="font-num">
            {{ 27 }}
          </div>
        </div>
      </div>
    </div>
    <div class="last">
      <img src="./assets/images/bg4.png" alt="">
      <span class="last-text">报警:{{ 21 }}</span>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const imgUrl = ref(null);
let props = defineProps({
  type: {
    type: String,
    default: "1",
    require: false,
  },
});
onMounted(() => {
  imgUrl.value = new URL(`./assets/images/${props.type}.png`, import.meta.url)();
});
</script>
<style scoped lang="scss">
.detail {
  display: flex;
  margin-top: 5px;

  .left {
    background: url("./assets/images/bg2.png") no-repeat;
    background-size: contain;
    ;
    position: relative;
    display: flex;
    width: 140px;
    height: 83px;

    // .bc {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     opacity: 0.3;
    //     height: 100%;
    //     background: rgba(216, 216, 216, 0.2);
    //     box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.302), inset 0px 0px 2px 0px rgba(255, 255, 255, 0.5);
    //     border: 0px solid;
    //     border-image: radial-gradient(circle, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0)) 0 0;
    // }

    img {
      width: 50px;
      height: 65px;
      margin-top: 10px;
      vertical-align: text-top;
      margin-left: 12px;
    }

    span:first-child {
      font-weight: 400;
      font-size: 14px;
      margin-left: 6px;
    }

    :last-child {
      /* 387个 */
      font-weight: 700;
      font-size: 20px;
    }

    ::after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 0;
      height: 0;
      border-left: 0px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid #0074ff;
      transform: rotate();
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    height: 83px;
    flex: 1;
    margin-left: 5px;

    img {
      vertical-align: text-top;
      width: 22px;
      height: 24px;
    }

    .top {
      background: url("./assets/images/little.png") no-repeat;
      display: flex;
      background-size: cover;
      width: 77px;
      padding-right: 10px;
      align-items: center;
      justify-content: space-around;
      height: 39px;
    }

    .bottom {
      margin-top: 5px;
      padding-right: 10px;
      background: url("./assets/images/little.png") no-repeat;
      display: flex;
      background-size: cover;
      align-items: center;
      justify-content: space-around;
      width: 77px;
      height: 39px;
    }
  }

  .last {
    padding: 2px;
    display: flex;
    width: 77px;
    height: 83px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: url("./assets/images/bg5.png") no-repeat;
    background-size: contain;
    ;

    img {
      width: 42px;
      height: 42px;
    }

    .last-text {
      font-family: 思源黑体;
      font-size: 12px;
      font-weight: normal;
      letter-spacing: 0px;

      /* 白色文字 */
      color: #d1e0ff;
    }
  }
}

.font-title {
  /* 正常: */
  color: #d1e0ff;
  font-weight: 290;
  font-size: 12px;
}

.font-num {
  /* 正常: */
  color: #fff;
  font-weight: 700;
  font-size: 14px;
}

.right-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
</style>
