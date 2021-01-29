

<template>
  <!-- 一般的多选题 -->
  <div class="question">
    <span class="qTitle">{{
      `${question.index + 1}.\t${question.question}(多选)`
    }}</span>
    <div class="options">
      <el-checkbox
        class="option"
        v-model="choice"
        v-for="option in question.optionList"
        :key="option.text"
        :label="option.label"
        v-on:change="onchange()"
        >{{ option.text }}
      </el-checkbox>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Card, Checkbox } from "element-ui";

Vue.use(Card);
Vue.use(Checkbox);

export default {
  name: "MultipleChoice",
  props: ["question", "onChange"],
  data() {
    return {
      choice: [],
    };
  },
  methods: {
    onchange: function () {
      let score = 0;
      // 选多少个得多少分
      switch (this.$data.choice.length) {
        case 1: {
          score = 55;
          break;
        }
        case 2: {
          score = 60;
          break;
        }
        case 3: {
          score = 70;
          break;
        }
        case 4: {
          score = 80;
          break;
        }
        case 5: {
          score = 80;
          break;
        }
      }
      this.$props.onChange(
        this.$props.question.index,
        score,
        this.$data.choice
      );
    },
  },
};
</script>

<style lang="less" scoped>
@fontSize: 3vw;
.question {
  font-size: @fontSize;
  padding: 24px;
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
    /deep/ .el-checkbox__inner {
      // width: 14px;
      // height: 14px;
      width: @fontSize;
      height: @fontSize;
    }
    /deep/ .el-checkbox__inner::after {
      @height:@fontSize * ( 7 / 14 );
      height: @height;
      width: @height * (3 / 7);
      left: @height * (4 / 7);
      top: @height * (1 / 7);
      border-width: @height * (1 / 7);

      // height: 7px;
      // left: 4px;
      // top: 1px;
      // width: 3px;
    }
  }
}
</style>