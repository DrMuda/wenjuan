<template>
  <div class="repeat_tip">
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
      this.$router.push({
        path: "/Report",
      });
    },
  },
};
</script>

<style lang="less">
.fun(100vw);
@media (min-width: 1080px) {
  .fun(1080px);
}

.fun(@basewidth) {
  @fontSize1: 6 * 0.01 * @basewidth;
  @fontSize2: 5 * 0.01 * @basewidth;
  @fontSize3: 4 * 0.01 * @basewidth;

  .repeat_tip {
    text-align: center;
    .title {
      display: block;
      font-size: @fontSize1;
      margin: 10 * 0.01 * @basewidth auto;
    }
    .el-icon-warning-outline {
      display: block;
    }
    .el-icon-warning-outline::before {
      font-size: 30 * 0.01 * @basewidth;
      color: rgb(251, 186, 56);
    }
    .tips {
      display: block;
      font-size: @fontSize3;
    }
    .button {
      font-size: @fontSize3;
      margin: 24px;
    }
  }
}
</style>