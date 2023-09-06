<template>
  <div class="header">
    <div class="first not">
      <span class="weather not"><img src="./assets/img/天气.svg">多云&nbsp;&nbsp;23~34℃</span>
      <span class="windy not">东风八级</span>
      <!-- <span class="day not">2022.10.12&nbsp;&nbsp;星期三</span> -->
      <span class="day not">{{
        `${year}.${month}.${day}&nbsp;&nbsp;${week}`
      }}</span>
      <span class="not time">{{ nowTime.split(" ")[1] }}</span>
    </div>
    <div class="second not">
      <span class="title not">海南信义矿业智能矿山综合管控平台</span>
      <div class="trapezoid not" />
    </div>
  </div>
</template>

<script setup>
import useTime from "@/hooks/useTime"
const { year, month, day, week, hour, minute, second, nowTime } = useTime()
</script>

<style lang="scss" scoped>
.not.title {
  /* 海南信义矿业智能矿山综合管控平台 */
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translate(-50%);
  color: #d1e0ff;
  width: 507px;
  height: 38px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.12em;
}

.not.trapezoid {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-41px, 29px);
  box-sizing: content-box;
  border-bottom: 5px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  width: 70px;
  -webkit-filter: drop-shadow(0 0 15px #fff);
  filter: drop-shadow(0 0 10px #fff);
}

.not.weather {
  /* 多云23~34℃ */
  position: absolute;
  left: 20px;
  top: 30px;
  width: 130px;
  height: 18.72px;
  font-family: 思源黑体;
  font-size: 14px;
  color: #b7d6f7;
}

.windy.not {
  /* 东风三级 */

  position: absolute;
  left: 169px;
  top: 30px;
  width: 56px;
  height: 18.72px;
  font-family: 思源黑体;
  font-size: 14px;
  color: #b7d6f7;
}

.not.day {
  /* 2022.10.12星期三 */

  position: absolute;
  right: 142px;
  top: 30px;
  width: 142px;
  height: 18px;
  font-family: 思源黑体;
  font-size: 14px;

  color: #b7d6f7;
}

.not.time {
  /* 17:24:53 */
  position: absolute;
  right: 24px;
  top: 15px;
  width: 106px;
  height: 35px;
  font-family: 思源黑体;
  font-size: 24px;
  font-weight: bold;
  color: #ccddff;
}

// @media screen and (max-width: 1920px) {
.not.first {
  position: absolute;
  height: 65px;
  width: 100%;
  background-size: cover;
  background: linear-gradient(359deg, #003bcc 0%, rgba(0, 0, 0, 0) 51%, #003bcc 100%),
    linear-gradient(178deg, #204295 -27%, #000d20 136%);
  border: 2px solid;
  border-image: linear-gradient(0deg, rgba(104, 232, 252, 0) 7%, rgba(56, 164, 255, 0.8) 100%);
}

.not.second {
  height: 73px;
  // width: 1920px;
  margin: 0 auto;
  position: absolute;
  position: relative;
  background: url("./assets/img/header2.png") no-repeat;
  background-position: center;
}
</style>