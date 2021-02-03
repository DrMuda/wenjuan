<template>
  <el-card class="question_single_chioce">
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

<style lang="less">
@fontSize1: 6vw;
@fontSize2: 5vw;
@fontSize3: 4vw;

.question_single_chioce {
  width: 100vw;
  margin: 0px;
  box-sizing: border-box;
  font-size: @fontSize3;
  border-bottom: 1px #ddd solid;
  color: inherit;
  * {
    font-size: @fontSize3;
  }
  .qTitle {
    color: inherit;
  }
  .el-radio__label {
    text-overflow: ellipsis;
    white-space: normal;
    vertical-align: middle;
    display: inline-block;
  }
  .options {
    padding: 16px;
    .option {
      display: block !important;
      margin: 16px;
      line-height: @fontSize3 * 1.5;
    }
    .el-radio__inner {
      width: @fontSize3;
      height: @fontSize3;
    }

    .el-radio__inner::after {
      @height:@fontSize3 * ( 4 / 14 );
      height: @height;
      width: @height;

      // width: 4px;
      // height: 4px;
    }
  }
}
</style>