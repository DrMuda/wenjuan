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
.invalid {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  text-align: center;
  justify-content: center;
  align-items: center;
  .el-icon-warning {
    color: red;
    font-size: 30vw;
  }
  span {
    font-size: 6vw;
  }
}
</style>