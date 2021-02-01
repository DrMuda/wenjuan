<template>
  <div>
    <div class="title">读书房入学测评</div>

    <div
      :questionList="questionList"
      v-for="question in questionList"
      :key="question.index"
    >
      <div v-if="question.index === 0" class="tips">前10道题目由学生作答</div>
      <div v-if="question.index === 10" class="tips">后10道题目由家长作答</div>

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
      <el-button class="submit" v-on:click="submit">提交问卷</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Radio, Button, message } from "element-ui";
import { questionList } from "./data";
import SingleChoice from "./component/SingleChoice";
import MultipleChoice from "./component/MultipleChoice";
import MultipleChoice2 from "./component/MultipleChoice2";
import { addResult } from "../../services/config";

Vue.use(Radio);
Vue.use(Button);

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
    console.log(this.$route);
  },
  methods: {
    onChange: function (index, score, answer) {
      // 记录分数，以题号作为键名，方便后续使用题号进行计算
      scoreList[index + 1] = score;
      answerList[index + 1] = answer;
    },
    submit: async function () {
      let complete = true; // 验证是否作答完整
      for (let i = 1; i <= 20; i += 1) {
        if (!scoreList[i]) {
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
        const knowledgeSystemIndex = s[1] * 0.35 + s[2] * 0.65;
        // 阅读环境指数
        const readingEnvironmentIndex =
          s[7] * 0.2 + s[8] * 0.1 + s[9] * 0.4 + s[10] * 0.3;

        // 好奇心
        const curiosity = s[13];
        // 创造力
        const creativeAbility = s[14] * 0.6 + s[15] * 0.4;
        // 专注力
        const focus = s[16];
        // 社交沟通能力
        const socialCommunicationSkills = s[17];
        // 自信度
        const confidence = s[18] * 0.6 + s[19] * 0.4;
        // 逻辑分析能力
        const logicalAnalysisAbility = s[20];

        // 阅读素养指数
        const readingLiteracyIndex =
          s[13] * 0.25 +
          (s[14] * 0.6 + s[15] * 0.4) * 0.1 +
          s[16] * 0.2 +
          s[17] * 0.1 +
          (s[18] * 0.6 + s[19] * 0.4) * 0.15 +
          s[20] * 0.2;

        // 学生阅读习惯指数(不记录)
        const stuReadingHabitIndex =
          (s[3] * 0.15 + s[4] * 0.5 + s[6] * 0.35) * s[5];
        // 家长阅读习惯指数(不记录)
        const parentReadingHabitIndex = s[11] * s[12];
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

        const { query } = this.$route;
        const result = {
          ...query,
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
        message({
          message: "正在提交结果，请稍等",
          type: "info",
        });
        document.getElementsByClassName("")
        const submitResult = await addResult(result);
        message.close();
        if (submitResult.data.status) {
          this.$router.push({
            path: "/SuccessTip",
            query,
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