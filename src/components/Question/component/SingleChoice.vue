<template>
  <div class="question">
    <span class="qTitle">{{
      `${question.index + 1}.\t${question.question}(单选)`
    }}</span>
    <div class="options">
      <el-radio
        class="option"
        v-model="choice"
        v-for="option in question.optionList"
        :key="option.text"
        :label="option.label"
        v-on:change="onchange(question.index, option.score, option.label)"
        >{{ option.text }}
      </el-radio>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card, Radio } from "element-ui";

Vue.use(Card);
Vue.use(Radio);

export default {
  name: "SingleChoice",
  props: ["question", "onChange"],
  data() {
    return {
      choice:'',
    };
  },
  methods: {
    onchange: function (index, score) {
      this.$props.onChange(index, score, [this.$data.choice]);
    },
  },
};
</script>

<style lang="less" scoped>
@fontSize: 3vw;
.question {
  width: 100vw;
  box-sizing: border-box;
  font-size: @fontSize;
  padding: 16px;
  border-bottom: 1px #ddd solid;
  /deep/ * {
    font-size: @fontSize;
  }
  /deep/ .options {
    padding: 16px;
    /deep/ .option {
      display: block !important;
      margin: 8px;
    }
    /deep/ .el-radio__inner {
      width: @fontSize;
      height: @fontSize;
    }
    /deep/ .el-radio__inner::after {
      @height:@fontSize * ( 4 / 14 );
      height: @height;
      width: @height;

      // width: 4px;
      // height: 4px;
    }
  }
}
</style>