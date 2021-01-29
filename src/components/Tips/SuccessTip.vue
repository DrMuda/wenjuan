<template>
  <div class="content">
    <span class="title">读书房入学测评</span>
    <i class="el-icon-circle-check" />
    <span class="tips">提交成功，可点击查看测评报告</span>
    <el-button class="button" type="primary" @click="toResult"
      >查看测评报告</el-button
    >
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "element-ui";

Vue.use(Button);

export default {
  name: "SuccessTip",
  methods: {
    toResult: function () {
      const { query } = this.$route;
      this.$router.push({
        path: "/Result",
        query,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  text-align: center;
}
.title {
  display: block;
  font-size: 5vw;
  margin: 10vw auto;
}
.el-icon-circle-check {
  display: block;
}
.el-icon-circle-check::before {
  font-size: 30vw;
  color:#52c41a;
}
.tips {
  display: block;
  font-size: 3vw;
}
.button {
  width: 30vw;
  font-size: 3vw;
  margin: 24px;
}
</style>