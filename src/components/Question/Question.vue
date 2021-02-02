<template>
  <div>
    <el-card class="title">读书房入学测评</el-card>

    <div
      :questionList="questionList"
      v-for="question in questionList"
      :key="question.index"
    >
      <el-card v-if="question.index === 0" class="tips"
        >前10道题目由学生作答</el-card
      >
      <el-card v-if="question.index === 10" class="tips"
        >后10道题目由家长作答</el-card
      >

      <div v-if="question.index === 0" :id="`Q${question.index}`">
        <MultipleChoice :question="question" :onChange="onChange" />
      </div>
      <div v-else-if="question.index === 1" :id="`Q${question.index}`">
        <MultipleChoice2 :question="question" :onChange="onChange" />
      </div>
      <div v-else :id="`Q${question.index}`">
        <SingleChoice :question="question" :onChange="onChange" />
      </div>
    </div>
    <div>
      <el-button type="primary" class="submit" v-on:click="submit"
        >提交问卷</el-button
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import { Radio, Button, message, Card } from "element-ui";
import { questionList } from "./data";
import SingleChoice from "./component/SingleChoice";
import MultipleChoice from "./component/MultipleChoice";
import MultipleChoice2 from "./component/MultipleChoice2";
import { addResult } from "../../services/config";

Vue.use(Radio);
Vue.use(Button);
Vue.use(Card);

let scoreList = {};
let answerList = {};

export default {
  name: "Question",
  components: {
    SingleChoice,
    MultipleChoice,
    MultipleChoice2,
  },
  data() {
    return {
      questionList: questionList.map((question, index) => {
        return {
          index,
          ...question,
        };
      }),
    };
  },
  mounted() {
  },
  computed:{
    },
  methods: {
    ...mapActions(['updateResult']),
    onChange: function (index, score, answer) {
      // 记录分数，以题号作为键名，方便后续使用题号进行计算
      scoreList[`score_${index + 1}`] = score;
      answerList[`answer_${index + 1}`] = answer;
    },
    submit: async function () {
      let complete = true; // 验证是否作答完整
      for (let i = 1; i <= 20; i += 1) {
        if (!scoreList[`score_${i}`]) {
          const el = document.getElementById(`Q${i - 1}`);
          const { offsetLeft, offsetTop } = el;
          window.scrollTo(offsetLeft, offsetTop);

          el.className = "redFont";
          setTimeout(() => {
            el.className = "blackFont";
          }, 500);
          complete = false;
          break;
        }
      }
      if (complete) {
        const s = scoreList;
        // 知识体系指数
        const knowledgeSystemIndex = s["score_1"] * 0.35 + s["score_2"] * 0.65;
        // 阅读环境指数
        const readingEnvironmentIndex =
          s["score_7"] * 0.2 +
          s["score_8"] * 0.1 +
          s["score_9"] * 0.4 +
          s["score_10"] * 0.3;

        // 好奇心
        const curiosity = s["score_13"];
        // 创造力
        const creativeAbility = s["score_14"] * 0.6 + s["score_15"] * 0.4;
        // 专注力
        const focus = s["score_16"];
        // 社交沟通能力
        const socialCommunicationSkills = s["score_17"];
        // 自信度
        const confidence = s["score_18"] * 0.6 + s["score_17"] * 0.4;
        // 逻辑分析能力
        const logicalAnalysisAbility = s["score_20"];

        // 阅读素养指数
        const readingLiteracyIndex =
          s["score_13"] * 0.25 +
          (s["score_14"] * 0.6 + s["score_15"] * 0.4) * 0.1 +
          s["score_16"] * 0.2 +
          s["score_17"] * 0.1 +
          (s["score_18"] * 0.6 + s["score_19"] * 0.4) * 0.15 +
          s["score_20"] * 0.2;

        // 学生阅读习惯指数(不记录)
        const stuReadingHabitIndex =
          (s["score_3"] * 0.15 + s["score_4"] * 0.5 + s["score_6"] * 0.35) *
          s["score_5"];
        // 家长阅读习惯指数(不记录)
        const parentReadingHabitIndex = s["score_11"] * s["score_12"];
        // 阅读习惯指数
        const readingHabitsIndex = Math.min(
          stuReadingHabitIndex,
          parentReadingHabitIndex
        );
        // 阅读兴趣指数
        const readingInterestIndex =
          knowledgeSystemIndex -
          (200 - readingHabitsIndex - readingEnvironmentIndex) / 8;

        // 阅读指数
        const readingIndex =
          knowledgeSystemIndex * 0.1 +
          readingInterestIndex * 0.1 +
          readingEnvironmentIndex * 0.3 +
          readingLiteracyIndex * 0.3 +
          readingHabitsIndex * 0.2;

        const bgInfo = this.$store.state.result;
        const result = {
          ...bgInfo,
          answerList,
          scoreList,
          statistics: {
            knowledgeSystemIndex,
            readingEnvironmentIndex,
            curiosity,
            creativeAbility,
            focus,
            socialCommunicationSkills,
            confidence,
            logicalAnalysisAbility,
            readingLiteracyIndex,
            readingInterestIndex,
            readingHabitsIndex,
            readingIndex,
          },
        };
        //Vuex修改提交这里！！！！！！
        // this.$store.commit("updataResult", result);
        // this.$store.dispatch('updateResult',result)
        await this.updateResult(result)

        message({
          message: "正在提交结果，请稍等",
          type: "info",
        });
        document.getElementsByClassName("");
        const submitResult = await addResult(result);
        message.close();
        if (submitResult.data.status) {
          this.$router.push({
            path: "/SuccessTip",
          });
        } else {
          message({
            message: submitResult.data.message,
            type: "error",
          });
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
@fontSize1: 6vw;
@fontSize2: 5vw;
@fontSize3: 4vw;

.title {
  font-size: @fontSize1;
  text-align: center;
  border-bottom: 1px #ccc solid;
  padding: 16px;
}
.tips {
  font-size: @fontSize3;
  text-align: center;
  border-bottom: 1px #ccc solid;
  padding: 8px;
}
.submit {
  display: block;
  font-size: @fontSize3;
  margin: 0 auto;
  margin-top: 36px;
  margin-bottom: 36px;
  width: 50vw;
}
.redFont {
  color: #f5222d;
}
.blackFont {
  transition: 0.5s;
}
</style>