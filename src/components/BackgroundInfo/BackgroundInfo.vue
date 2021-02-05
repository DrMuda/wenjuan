<template>
  <div class="background_info" style="width: 100 * 0.01 * @basewidth">
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
      <div class="item">
        <div class="label">
          <el-button
            class="verifyCodePic"
            @click="changeVerifyCode()"
            :disabled="changeVerifyCodeDisabled"
            v-loading="changeVerifyCodeLoading"
          />
        </div>
        <div class="inputInfo" id="verifyCode">
          <el-input placeholder="请输入验证码" v-model="verifyCode" />
        </div>
      </div>

      <el-button class="submit" @click="submit()" type="primary"
        >进入问卷</el-button
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Input, Button, DatePicker, Loading, message } from "element-ui";
import { mapActions } from "vuex";
import {
  checkLinedIsInvalid,
  createVerify,
  verify,
} from "../../services/config";

Vue.use(Input);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(Loading);

export default {
  name: "BackgroundInfo",
  data() {
    return {
      changeVerifyCodeDisabled: false,
      changeVerifyCodeLoading: false,
      studentName: "",
      school: "",
      birthday: "",
      grade: "",
      verifyCode: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() >= Date.now();
        },
      },
    };
  },
  async mounted() {
    this.updateResult({});
    const result = await checkLinedIsInvalid();
    if (!result.data.status) {
      this.$router.push({
        path: "/Invalid",
      });
    } else if (result.data.code !== 200) {
      this.$router.push({
        path: "/Invalid",
      });
    }else{
      this.changeVerifyCode();
    }
  },
  methods: {
    ...mapActions(["updateResult"]),
    submit: async function () {
      const query = {
        studentName: this.$data.studentName,
        school: this.$data.school,
        birthday: this.$data.birthday
          .toLocaleString()
          .split(" ")[0]
          .replace(/\//g, "-"),
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

      if (!this.$data.verifyCode.replace(/(^\s*)|(\s*$) /g, "")) {
        complete = false;
        const el = document.getElementById("verifyCode");
        console.log(el.className);
        const className = `${el.className}`;
        el.className = `${className} redBorder`;
        setTimeout(() => {
          el.className = `${className} null`;
        }, 1000);
      }

      if (complete) {
        // 验证 验证码
        const result = await verify(`${this.$data.verifyCode}`);
        if (result.data.status) {
          this.$router.push({
            path: "/Question",
          });
          this.updateResult(query);
        } else {
          message({
            message: "验证码错误",
            type: "error",
            center:true
          });
        }
      }
    },
    async changeVerifyCode() {
      this.$data.changeVerifyCodeDisabled = true;
      this.$data.changeVerifyCodeLoading = true;
      const verifyCodePicEle = document.getElementsByClassName(
        "verifyCodePic"
      )[0];

      const verifyImage = await createVerify();
      if (verifyImage.status === 200 && verifyImage?.data) {
        // const img = window.URL.createObjectURL(verifyImage.data);
        const img =
          "data:image/png;base64," +
          btoa(
            new Uint8Array(verifyImage.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
        verifyCodePicEle.style.backgroundImage = `url(${img})`;
      } else {
        message({
          message: "网络出错，请稍后再次尝试",
          type: "error",
            center:true
        });
      }
      this.$data.changeVerifyCodeLoading = false;
      this.$data.changeVerifyCodeDisabled = false;
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
  .background_info {
    box-sizing: border-box;
    width: 100 * 0.01 * @basewidth;
    text-align: center;
    margin: 0 auto;
    .title {
      display: block;
      font-size: @fontSize1;
      padding: 10 * 0.01 * @basewidth;
    }
    .tips {
      display: block;
      font-size: @fontSize2;
    }
    .form {
      margin: @fontSize1 auto 0;
      width: 80 * 0.01 * @basewidth;
      min-width: 320px;
      * {
        font-size: @fontSize3 !important;
      }
      .item {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        -webkit-justify-content: space-between;
        -webkit-align-items: center;
        height: @fontSize1 !important;
        min-height: 30px;
        margin-bottom: 16px;
        .label {
          flex: 2;
          text-align: right;
          width: 100%;
          height: 100%;
          border: 0px;
          .required {
            color: red;
          }
          .verifyCodePic {
            display: block;
            width: 100%;
            height: 100%;
            // background-image:url(../../pictures/verifyCodePic.jpeg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin: 0 auto !important;
            border: 0px;
          }
        }
        .inputInfo {
          flex: 4;
          height: @fontSize1 !important;
          min-height: 30px;
          .el-input {
            width: 100% !important;
            height: 100% !important;
            .el-input__inner {
              width: 100% !important;
              height: 100% !important;
              padding-left: @fontSize1 * (3.5 / 4);
              padding-right: @fontSize1 * (3 / 4);
            }
            .el-input__prefix {
              height: @fontSize1;
              min-height: 30px;
              width: @fontSize1 * (3 / 4);
            }
            .el-input__suffix {
              height: @fontSize1;
              min-height: 30px;
              width: @fontSize1 * (3 / 4);
            }
            .el-input__icon {
              width: 100%;
              min-height: 30px;
              line-height: @fontSize1;
            }
          }
        }
      }
      .submit {
        display: inline-block;
        margin: 0 auto;
        margin-top: 8px;
        width: 50 * 0.01 * @basewidth;
      }
    }

    .redBorder input {
      border-color: #f5222d;
    }
    .null {
      transition: 2s;
    }
  }
}
</style>