<template>
  <div class="info">
    <span class="title">读书房入学测评</span>
    <span class="tips">前10道题由学生作答，</span>
    <span class="tips">后10道题由家长作答。</span>
    <div class="form">
      <div class="item">
        <div class="label"><span class="required">*</span>学生姓名：</div>
        <div class="inputInfo" id="studentName">
          <el-input placeholder="请输入" v-model="studentName" />
        </div>
      </div>

      <div class="item">
        <div class="label"><span class="required">*</span>就读学校：</div>
        <div class="inputInfo" id="school">
          <el-input placeholder="请输入" v-model="school" />
        </div>
      </div>

      <div class="item">
        <div class="label"><span class="required">*</span>出生日期：</div>
        <div class="inputInfo" id="birthday">
          <el-date-picker
            placeholder="请输入"
            v-model="birthday"
            type="date"
            :picker-options="pickerOptions"
          />
        </div>
      </div>

      <div class="item">
        <div class="label"><span class="required">*</span>就读班级：</div>
        <div class="inputInfo" id="grade">
          <el-input placeholder="请输入" v-model="grade" />
        </div>
      </div>

      <el-button
        class="submit"
        @click="submit()"
        type="primary"
        :disabled="disabled"
        >进入问卷</el-button
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Input, Button, DatePicker, message } from "element-ui";
import { mapActions } from "vuex";
import { isExits, checkLinedIsInvalid } from "../../services/config";

Vue.use(Input);
Vue.use(Button);
Vue.use(DatePicker);

export default {
  name: "BackgroundInfo",
  data() {
    return {
      disabled: false,
      studentName: "",
      school: "",
      birthday: "",
      grade: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() >= Date.now();
        },
      },
    };
  },
  async mounted() {
    const result = await checkLinedIsInvalid();
    if (!result.data.status) {
      this.$router.push({
        path: "/Error",
      });
    } else if (result.data.code !== 200) {
      this.$router.push({
        path: "/Error",
      });
    }
  },
  methods: {
    ...mapActions(['updateResult']),
    submit: async function () {
      const query = {
        studentName: this.$data.studentName,
        school: this.$data.school,
        birthday: this.$data.birthday.toLocaleString().split(" ")[0].replace(/\//g,"-"),
        grade: this.$data.grade,
      };
      let complete = true; // 验证是否填写完整
      for (let field in query) {
        if (!query[field].replace(/(^\s*)|(\s*$) /g, "")) {
          complete = false;
          const el = document.getElementById(field);
          const className = el.className;
          el.className = `${className} redBorder`;
          setTimeout(() => {
            el.className = `${className} null`;
          }, 1000);
        }
      }

      if (complete) {
        // 验证是否重复填写问卷
        message({
          message: "请稍等...",
          type: "info",
        });
        this.$data.disabled = true;
        let result = await isExits(query);
        this.$data.disabled = false;

        result = result.data;

        if (result.status) {
          if (!result.data) {
            this.$router.push({
              path: "/Question",
            });
           this.updateResult(query)
          } else {
            result = {
              ...query,
              scoreList: result?.data?.[0],
              answerList: result?.data?.[1],
              statistics: {
                knowledgeSystemIndex: result?.data?.[2]?.knowledge,
                readingEnvironmentIndex: result?.data?.[2]?.readEnvironment,
                curiosity: result?.data?.[2]?.inquisitive,
                creativeAbility: result?.data?.[2]?.creativity,
                focus: result?.data?.[2]?.concentrate,
                socialCommunicationSkills: result?.data?.[2]?.expression,
                confidence: result?.data?.[2]?.confidence,
                logicalAnalysisAbility: result?.data?.[2]?.analyse,
                readingLiteracyIndex: result?.data?.[2]?.readMoral,
                readingInterestIndex: result?.data?.[2]?.readInterest,
                readingHabitsIndex: result?.data?.[2]?.readHabit,
                readingIndex: result?.data?.[2]?.readIndex,
              },
            };
            this.$router.push({
              path: "/RepeatTip",
            });
            this.updateResult(result)
          }
        } else {
          message({
            message: "网络出错，请稍候再次尝试",
            type: "error",
          });
          this.updateResult(result)
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

.info {
  box-sizing: border-box;
  width: 100vw;
  text-align: center;
  /deep/ .title {
    display: block;
    font-size: @fontSize1;
    padding: 10vw;
  }
  /deep/ .tips {
    display: block;
    font-size: @fontSize2;
  }
   .form {
    margin: @fontSize1 auto 0;
    width: 80vw;
    min-width: 320px;
     * {
      font-size: @fontSize3 !important;
    }
     .item {
      display: -webkit-box;
      display: -webkit-box;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      margin-bottom: 8px;
    }
     .label {
      width: 6em;
      text-align: right;
       .required {
        color: red;
      }
    }
     .inputInfo {
      flex: auto;
      height: @fontSize1 !important;
      min-height: 30px;
      /deep/ .el-input {
        width: 100% !important;
        height: 100% !important;
        /deep/ .el-input__inner {
          width: 100% !important;
          height: 100% !important;
          padding-left: @fontSize1 * (3.5 / 4);
          padding-right: @fontSize1 * (3 / 4);
        }
        /deep/ .el-input__prefix {
          height: @fontSize1;
          width: @fontSize1 * (3 / 4);
        }
        /deep/ .el-input__suffix {
          height: @fontSize1;
          width: @fontSize1 * (3 / 4);
        }
        /deep/ .el-input__icon {
          width: 100%;
          line-height: @fontSize1;
        }
      }
    }
    /deep/ .submit {
      display: inline-block;
      margin: 0 auto;
      margin-top: 8px;
      width: 50vw;
    }
  }
}

.redBorder /deep/ input {
  border-color: #f5222d;
}
.null {
  transition: 2s;
}
</style>