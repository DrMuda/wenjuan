<template>
  <div class="content">
    <span class="title">读书房入学测评</span>
    <i class="el-icon-warning-outline" />
    <span class="tips">您已提交过该测评，可点击查看测评报告</span>
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
  name: "RepeatTip",
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
.el-icon-warning-outline {
  display: block;
}
.el-icon-warning-outline::before {
  font-size: 30vw;
  color: rgb(251, 186, 56);
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