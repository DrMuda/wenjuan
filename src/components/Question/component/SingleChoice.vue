<template>
  <div class="question">
    <span class="qTitle">{{
      `${this.$props.question.index + 1}.\t${
        this.$props.question.question
      }(单选)`
    }}</span>
    <div class="options">
      <el-radio
        class="option"
        v-model="choice"
        v-for="option in this.$props.question.optionList"
        :key="option.text"
        :label="option.label"
        v-on:change="onchange(option.score)"
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

let choice = "";
export default {
  name: "SingleChoice",
  props: ["question","onChange"],
  data() {
    return {
      choice,
    };
  },
  methods: {
    onchange: function(index,score){
      this.$props.onChange(index,score)
    },
  },
};
</script>

<style lang="less">
@fontSize:3vw;
.question {
  font-size: @fontSize;
  padding: 24px;
  border-bottom: 1px #ddd solid;
  *{
    font-size: @fontSize;
  }
  .options {
    padding: 16px;
    .option {
      display: block !important;
      margin: 8px;
    }
    .el-radio__inner{
      width:@fontSize;
      height: @fontSize;
    }
  }
}
</style>