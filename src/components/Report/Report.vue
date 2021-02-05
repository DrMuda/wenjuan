<template>
  <div class="home">
    <div class="hei18">
      <span class="header_title">读书房入学测评报告</span>
    </div>
    <!-- 基本信息 -->
    <div class="base_info">
      <img src="@/pictures/b0.png" alt="pic" class="biaoti" />
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
      <img src="@/pictures/b3.png" alt="pic" class="biaoti" />
      <span class="content_title" style="margin-top: 2vw"
        >阅读习惯培养阶段</span
      >
      <div
        class="reading_habits"
        v-for="item in cultivationOfReading"
        :key="item.title"
      >
        <span class="lt">{{ item.title }}</span>
        <ul style="margin-top: 3vw; width: 79%">
          <li>{{ item.content }}</li>
        </ul>
      </div>
      <el-divider></el-divider>
      <span class="summary" style="color:black;background:#f1ed6c"
        >根据测评结果及约读书房大数据库，测试者所属阅读习惯培养阶段为：<span style="font-weight:bold">探索期</span></span
      >
      <span class="lt">近期行动建议</span>
      <ul>
        <li class="li2">在2~3周内，着手改善家庭阅读环境；</li>
        <li class="li2">
          选择适合孩子的图书，扩展其基础认知范围，后期兴趣激发、习惯培养打下知识结构基础；
        </li>
      </ul>
      <span class="lt">长期阅读规划</span>
      <ul>
        <li class="li2">
          坚持长期阅读，在拓展认知范围、培养阅读习惯的基础上，完成价值观的塑造以及人格的养成。
        </li>
      </ul>
    </div>
    <!-- 结语 -->
    <div class="current_analysis">
      <img src="@/pictures/b4.png" alt="pic" class="biaoti" />
      <div class="jieyu">
        <span>{{ $store.state.result.studentName }}妈妈/爸爸，你好：</span>
        <ul>
          <li v-for="item in epilogue" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
      <img src="@/pictures/last.png" alt="last" style="width:100%">
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
        "那时，请记此时此刻，来自书房最诚挚的问候与祝福。",
      ],
      cultivationOfReading: [
        {
          title: "01 探索期",
          content:
            "没有对读书展现出兴趣，也没有特定感兴趣的领域、方面，拿到一本书，只关注封皮、插图等内容，专注阅读时间不超过5分钟。",
        },
        {
          title: "02 扩展期",
          content:
            "开始对某些领域的某些问题产生好奇，拿到一本书后，不会从头开始读，挑着自己喜欢的部分进行略读、跳读，对于自己喜欢的部分、喜欢的一本书，能够反复朗读。",
        },
        {
          title: "03 他律期",
          content:
            "在外力引导、督促下，发生习惯上的改变，比如每天会定时看书，并且针对某种现象进行深入、辩证地思考，提出自己的看法。",
        },
        {
          title: "04 自律期",
          content:
            "阅读习惯趋于稳定，专注时长、专注度有稳步提升，在习惯上会有反复，表现还不够稳定，如外界引导消失，将迅速退化至习惯养成初期。",
        },
        {
          title: "05 习惯期",
          content:
            "阅读习惯基本养成，能够主动、定期阅读，文字信息处理速度提高，理解深度加深，且主要情节记忆准确。",
        },
        {
          title: "06 发展期",
          content:
            "阅读素养持续提升，学生视野变宽，格局持续放大，对社会、他人关注度增强，并进行深入思考，并伴随逻辑推断、洞察力的提升。",
        },
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
    // console.log("@@", this.$store.state.result);
    //计算年龄
    let day = moment().diff(
      moment(this.$store.state.result.birthday, "YYYY-MM-DD"),
      "years"
    );
    this.age = day;
  },
};
</script>

<style lang="less" scoped>
@size6: 6vw;
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
  font-size: @size6;
  padding: 5vw 0;
}

.hei18 {
  height: 18vw;
}
.jieyu {
  padding-left: 6vw;
  font-size: 4vw;
  padding-top: 3vw;
  ul {
    list-style: none;
    padding: 0;
    text-indent: 8vw;
    width: 95%;
    margin-left: 0;
  }
  li {
    margin-bottom: 2vw;
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
      margin-top: 3vw;
      width: 79%;
      li {
        margin-left: 33vw;
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
    .li2 {
      width: 85%;
    }
  }
}

.biaoti {
  width: 100% !important;
}
.summary {
  display: block;
  padding: 3vw 7%;
  font-size: 4vw;
  margin: 5vw auto;
  width: 72%;
  background-color: #a4bec7;
  color: white;
  border-radius: 6vw;
}

@import url("./css/report.less");
</style>