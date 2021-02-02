<template>
  <div class="info">
    <span class="title">读书房入学测评</span>
    <span class="tips">前10道题由学生作答，</span>
    <span class="tips">后10道题由家长作答。</span>
    <div class="form">
      <el-row type="flex" justify="center" class="item">
        <el-col class="label">
          <span class="required">*</span>学生姓名：</el-col
        >
        <el-col class="inputInfo" id="studentName">
          <el-input placeholder="请输入" v-model="studentName" />
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="item">
        <el-col class="label">
          <span class="required">*</span>就读学校：</el-col
        >
        <el-col class="inputInfo" id="school">
          <el-input placeholder="请输入" v-model="school" />
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="item">
        <el-col class="label">
          <span class="required">*</span>出生日期：</el-col
        >
        <el-col class="inputInfo" id="birthday">
          <el-date-picker
            placeholder="请输入"
            v-model="birthday"
            type="date"
            :picker-options="pickerOptions"
          />
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="item">
        <el-col class="label">
          <span class="required">*</span>就读班级：</el-col
        >
        <el-col class="inputInfo" id="grade">
          <el-input placeholder="请输入" v-model="grade" />
        </el-col>
      </el-row>

      <el-button class="submit" @click="submit()">进入问卷</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";

import {
  Form,
  FormItem,
  Input,
  Button,
  Row,
  Col,
  DatePicker,
} from "element-ui";
import { isExits } from "../../services/config";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(DatePicker);


export default {
  name: "BackgroundInfo",
  data() {
    return {
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
  methods: {
    ...mapActions(['updateResult']),
    submit: async function () {
      const query = {
        studentName: this.$data.studentName,
        school: this.$data.school,
        birthday: this.$data.birthday.toLocaleString().split(" ")[0],
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
        let result = await isExits(query);
        result = result.data;
        if (!result.data) {
          this.$router.push({
            path: "/Question",
          });
          // this.$store.commit("updataResult",query)
          this.updateResult(query)
        } else {
          this.$router.push({
            path: "/RepeatTip",
          });
          this.updateResult(result)
          // this.$store.commit("updataResult",result)
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
  /deep/ .form {
    margin-top: @fontSize1;
    /deep/ * {
      font-size: @fontSize3 !important;
    }
    /deep/ .item {
      margin-bottom: 8px;
    }
    /deep/ .label {
      display: inline-block;
      width: @fontSize3 * 6;
      text-align: right;
      /deep/ .required {
        color: red;
      }
    }
    /deep/ .inputInfo {
      display: inline-block;
      width: 50vw;
      height: @fontSize1 !important;
      min-height: 30px;
      /deep/ .el-input {
        width: 100% !important;
        height: 100% !important;
        /deep/ .el-input__inner {
          width: 100% !important;
          height: 100% !important;
          padding-left: @fontSize1 * (3 / 4);
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