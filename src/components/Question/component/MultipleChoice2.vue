

<template>
  <!-- 第二题的多选题 -->
  <el-card class="question_multiple_chioce">
    <span class=".qTitle">{{
      `${question.index + 1}.\t${question.question}(多选)`
    }}</span>
    <div class="options">
      <el-checkbox
        class="option"
        v-model="choice"
        v-for="(option, index) in question.optionList"
        :key="option.text"
        :label="String.fromCharCode(65 + index)"
        v-on:change="onchange(String.fromCharCode(65 + index))"
        :disabled="disabled[index]"
        >{{ String.fromCharCode(65 + index) }}.{{ option.text }}
      </el-checkbox>
    </div>
  </el-card>
</template>

<script>
import Vue from "vue";
import { Card, Checkbox } from "element-ui";

Vue.use(Card);
Vue.use(Checkbox);

export default {
  name: "MultipleChoice2",
  props: ["question", "onChange"],
  data() {
    return {
      choice: [],
      disabled: [],
    };
  },
  methods: {
    onchange: function (value) {
      let score = 0;
      // 选多少个得多少分
      // 如果不选H，正常评分
      if (value !== "H") {
        switch (this.$data.choice.length) {
          case 1: {
            score = 60;
            break;
          }
          case 2: {
            score = 70;
            break;
          }
          case 3: {
            score = 80;
            break;
          }
          case 4: {
            score = 90;
            break;
          }
          case 5: {
            score = 90;
            break;
          }
          case 6: {
            score = 90;
            break;
          }
          case 7: {
            score = 90;
            break;
          }
        }
      } else {
        // 选H后，禁用其他所有选项
        // 固定分数
        // 取消H后恢复选项
        if (this.$data.disabled[0]) {
          score = 0;
        } else {
          score = 50;
          this.$data.choice = ["H"];
        }
        for (let i = 0; i < 7; i++) {
          this.$data.disabled[i] = !this.$data.disabled[i];
        }
      }
      this.$props.onChange(
        this.$props.question.index,
        score,
        this.$data.choice.join("")
      );
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

  .question_multiple_chioce {
    width: 100 * 0.01 * @basewidth;
    margin: 0px;
    box-sizing: border-box;
    font-size: @fontSize3;
    // padding: 24px;
    border-bottom: 1px #ddd solid;
    color: inherit;
    margin: 0 auto;
    * {
      font-size: @fontSize3;
    }
    .qTitle {
      color: inherit;
    }
    .el-checkbox__label {
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
      .el-checkbox__inner {
        // width: 14px;
        // height: 14px;
        width: @fontSize3;
        height: @fontSize3;
      }
      .el-checkbox__inner::after {
        @height:@fontSize3 * ( 7 / 14 );
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
}
</style>