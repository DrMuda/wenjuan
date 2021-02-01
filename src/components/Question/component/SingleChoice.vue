<template>
  <el-card class="question">
    <span class="qTitle">{{
      `${question.index + 1}.\t${question.question}(单选)`
    }}</span>
    <div class="options">
      <el-radio
        class="option"
        v-model="choice"
        v-for="(option, index) in question.optionList"
        :key="option.text"
        :label="String.fromCharCode(65 + index)"
        v-on:change="
          onchange(
            question.index,
            option.score,
            String.fromCharCode(65 + index)
          )
        "
        >{{ String.fromCharCode(65 + index) }}.{{ option.text }}
      </el-radio>
    </div>
  </el-card>
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
      choice: "",
    };
  },
  methods: {
    onchange: function (index, score) {
      this.$props.onChange(index, score, this.$data.choice);
    },
  },
};
</script>

<style lang="less" scoped>
@fontSize1: 6vw;
@fontSize2: 5vw;
@fontSize3: 4vw;

/deep/ .el-radio__label {
  text-overflow: ellipsis;
  white-space: normal;
  vertical-align: middle;
  display: inline-block;
}
.question {
  width: 100vw;
  margin: 0px;
  box-sizing: border-box;
  font-size: @fontSize3;
  // padding: 16px;
  border-bottom: 1px #ddd solid;
  /deep/ * {
    font-size: @fontSize3;
  }
  /deep/ .options {
    padding: 16px;
    /deep/ .option {
      display: block !important;
      margin: 8px;
    }
    /deep/ .el-radio__inner {
      width: @fontSize3;
      height: @fontSize3;
    }
    /deep/ .el-radio__inner::after {
      @height:@fontSize3 * ( 4 / 14 );
      height: @height;
      width: @height;

      // width: 4px;
      // height: 4px;
    }
  }
}
</style>