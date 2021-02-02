<template>
  <div class="home">
    <div style="height: 18vw">
      <span class="header_title">读书房入学测评报告</span>
    </div>
    <!-- 基本信息 -->
    <div class="base_info">
      <div class="base">
        <i class="el-icon-user"></i><span class="title">基本信息</span>
      </div>
      <div class="content">
        <ul>
          <li>
            学生姓名:<span>{{ $store.state.result.studentName }}</span>
          </li>
          <li>
            就读学校:<span>{{ $store.state.result.school }}</span>
          </li>
          <li>
            学生年龄:<span>{{ age }}岁</span>
          </li>
          <li>
            就读年级:<span>{{ $store.state.result.grade }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 测评背景 -->
    <EvaluationBackground></EvaluationBackground>
    <!-- 现状分析 -->
    <CurrentAnalysis></CurrentAnalysis>
    <!-- 测评建议 -->
    <div class="current_analysis">
      <div class="base">
        <i class="el-icon-edit-outline"></i><span class="title">测评建议</span>
      </div>
      <span class="lt">近期行动建议</span>
      <ul style="margin-top: 3vw; width: 79%">
        <li>在2~3周内，着手改善家庭阅读环境；</li>
        <li>
          选择适合孩子的图书，扩展其基础认知范围，后期兴趣激发、习惯培养打下知识结构基础；
        </li>
      </ul>
      <span class="lt">长期阅读规划</span>
      <ul style="margin-top: 3vw; width: 79%">
        <li>
          坚持长期阅读，在拓展认知范围、培养阅读习惯的基础上，完成价值观的塑造以及人格的养成。
        </li>
      </ul>
    </div>
    <!-- 结语 -->
    <div class="current_analysis">
      <div class="base">
        <i class="el-icon-collection-tag"></i><span class="title">结语</span>
      </div>
      <div style="padding-left: 6vw; font-size: 4vw; padding-top: 3vw">
        <span>{{ $store.state.result.studentName }}妈妈/爸爸，你好：</span>
        <ul
          style="
            list-style: none;
            padding: 0;
            text-indent: 8vw;
            width: 95%;
            margin-left: 0;
          "
        >
          <li v-for="item in epilogue" :key="item" style="margin-bottom: 2vw">
            {{ item }}
          </li>
        </ul>
        <span
          style="margin: 5vw 0; display: block; text-indent: 2rem; width: 95%"
          >那时，请记此时此刻，来自书房最诚挚的问候与祝福。</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import EvaluationBackground from "./component/EvaluationBackground";
import CurrentAnalysis from "./component/CurrentAnalysis";
import moment from "moment";
export default {
  data() {
    return {
      age: "",
      epilogue: [
        "相信你，对孩子的期望，绝不仅仅是好成绩、好大学、好工作,而是一个人格完善、心理过硬、思想深邃、格局远大的人。不管环境如何变化，走到哪里，都不可替代，也总能脱颖而出。实现这个目标，我们需要的，是一个丰富的精神世界，滋养灵魂，提供源源不断的动力。",
        "如果说构建精神世界，有捷径，那就是阅读。沉浸在书海的孩子，不管认识了更多的字，对学习产生了兴趣，变得更加专注、更自信；还是在成绩优秀的基础上，思想更深刻，逻辑更清晰，悟性越来越强——他都收获了来自阅读最美好的祝福！",
        "而实现这一切，当下，只需要打开一本合适的书，找到合适的领路人，一直读下去，不经意间，已走到精神的沃土。",
      ],
    };
  },
  methods: {},
  components: {
    EvaluationBackground,
    CurrentAnalysis,
  },
  computed: {},
  mounted() {
    console.log("@@", this.$store.state.result);
    //计算年龄
    let day = moment().diff(moment(this.$store.state.result.birthday), "years");
    this.age = day;
  },
};
</script>

<style lang="less" scoped>
@size: 6vw;
/deep/ .el-divider--horizontal {
  height: 2px;
  width: 90%;
  margin: 4vw auto;
}

.header_title {
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 100;
  text-align: center;
  font-weight: bold;
  font-size: @size;
  // font-size: (@size / 2);
  padding: 5vw 0;
}
@media screen and (min-width: 1025px) {
  .home {
    padding: 0 18%;
  }
  .header_title {
    width: 70% ;
    // width: 70% !important;
    // font-size: (@size / 2) !important;
    font-size: (@size / 2);
  }
  
}
.home {
  i {
    font-size: 8vw;
    float: left;
    color: white;
    margin-left: 5vw;
    line-height: 8vw;
  }
  .title {
    display: inline-block;
    font-size: 5vw;
    line-height: 8vw;
    color: white;
  }
  .content_title {
    display: block;
    text-align: center;
    font-size: 6vw;
  }
  img {
    width: 90%;
    display: block;
    margin: 0 auto;
  }
}

.base {
  background-color: #409eff;
  padding: 2vw 0;
  height: 8vw;
}
.base_info {
  .content {
    ul {
      padding: 0;
      margin: 5vw 0;
      li {
        margin-left: 24vw;
        list-style: none;
        font-size: 4vw;
        margin-top: 1.5vw;
        span {
          color: black;
          margin-left: 3vw;
          font-size: 4vw;
        }
      }
    }
  }
}

.lt {
  font-size: 4.5vw;
  display: block;
  margin-top: 5vw;
  margin-left: 5vw;
  font-weight: bolder;
}

.current_analysis {
  ul {
    font-size: 4.5vw;
    margin-left: 5vw;
    margin-top: 1vw;
    width: 85%;
    li {
      font-size: 4vw;
    }
  }
}
</style>