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
      this.$router.push({
        path: "/Report",
      });
    },
  },
  mounted(){
    console.log(this.$store.state.result);
  }
};
</script>

<style lang="less" scoped>
@fontSize1: 6vw;
@fontSize2: 5vw;
@fontSize3: 4vw;

.content {
  text-align: center;
}
.title {
  display: block;
  font-size: @fontSize1;
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
  font-size: @fontSize3;
}
.button {
  width: 30vw;
  font-size: @fontSize3;
  margin: 24px;
}
</style>