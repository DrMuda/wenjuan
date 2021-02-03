<template>
  <div class="invalid">
    <div>
      <i class="el-icon-warning"></i>
      <br />
      <span>链接失效</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "element-ui";

Vue.use(Button);

export default {
  name: "Invalid",
};
</script>

<style lang="less">
.fun(100vw);
@media (min-width: 1080px) {
  .fun(1080px);
}

.fun(@basewidth) {
  .invalid {
    display: flex;
    height: 100vh;
    width: 100 * 0.01 * @basewidth;
    overflow: hidden;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    .el-icon-warning {
      color: red;
      font-size: 30 * 0.01 * @basewidth;
    }
    span {
      font-size: 6 * 0.01 * @basewidth;
    }
  }
}
</style>