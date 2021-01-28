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
        <el-col class="inputInfo">
          <el-input placeholder="请输入" v-model="studentName" />
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="item">
        <el-col class="label">
          <span class="required">*</span>就读学校：</el-col
        >
        <el-col class="inputInfo">
          <el-input placeholder="请输入" v-model="school" />
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="item">
        <el-col class="label">
          <span class="required">*</span>学生年龄：</el-col
        >
        <el-col class="inputInfo">
          <el-input placeholder="请输入" v-model="studentAge" />
        </el-col>
      </el-row>

      <el-row type="flex" justify="center" class="item">
        <el-col class="label">
          <span class="required">*</span>就读年级：</el-col
        >
        <el-col class="inputInfo">
          <el-input placeholder="请输入" v-model="studyAge" />
        </el-col>
      </el-row>

      <el-button class="submit" @click="submit()">进入问卷</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, FormItem, Input, Button, Row, Col } from "element-ui";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);

export default {
  name: "BackgroundInfo",
  data() {
    return {
      studentName: "",
      school: "",
      studentAge: "",
      studyAge: "",
    };
  },
  methods: {
    submit: function () {
      console.log(
        this.$data.studentName,
        this.$data.school,
        this.$data.studentAge,
        this.$data.studyAge
      );
      this.$router.push("/Question");
    },
  },
};
</script>

<style lang="less">
.info {
  width: 100vw;
  text-align: center;
  overflow-y: scroll;
  .title {
    display: block;
    font-size: 5vw;
    margin: 10vw auto;
  }
  .tips {
    display: block;
    font-size: 4vw;
  }
  .form {
    margin-top: 5vw;
    * {
      font-size: 3vw !important;
    }
    .item {
      margin-bottom: 8px;
    }
    .label {
      display: inline-block;
      width: 21vw;
      text-align: right;
      .required {
        color: red;
      }
    }
    .inputInfo {
      display: inline-block;
      width: 39vw;
      height: 5vw !important;
      min-height: 30px;
      .el-input {
        width: 100% !important;
        height: 100% !important;
        .el-input__inner {
          width: 100% !important;
          height: 100% !important;
        }
      }
    }
    .submit {
      display: inline-block;
      margin: 0 auto;
      margin-top: 8px;
      width: 50vw;
    }
  }
}
</style>