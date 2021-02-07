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
      <span class="content_title" style="margin-top: 2vw; font-size: 5vw"
        >您必须了解的阅读习惯培养阶段</span
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
      <span style="margin-top: 2vw; font-size: 5vw" class="content_title"
        >测评建议|具体措施</span
      >
      <span class="summary" style="color: black; background: rgb(255, 250, 76)"
        >根据测评结果及约读书房大数据库，测试者所属阅读习惯培养阶段为：<span
          style="font-weight: bold"
          >{{ tester_period }}</span
        ></span
      >
      <span class="lt">近期行动建议</span>
      <ul>
        <li
          class="li2"
          v-for="(item, index) in suggested_content"
          :key="index"
          v-html="item"
        ></li>
      </ul>
      <span class="lt">长期阅读规划</span>
      <ul>
        <li class="li2">
          {{long_term_plan}}
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
      <img src="@/pictures/last.png" alt="last" style="width: 100%" />
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
  computed: {
    tester_period: function () {
      let grade = this.$store.state.result.statistics.readingIndex;
      if (grade <= 70) {
        return "探索期";
      } else if (grade > 70 && grade <= 80) {
        return "扩展期";
      } else if (grade > 80 && grade <= 85) {
        return "他律期";
      } else if (grade > 85 && grade <= 90) {
        return "自律期";
      } else if (grade > 90 && grade <= 95) {
        return "习惯期";
      } else if (grade > 95 && grade <= 100) {
        return "发展期";
      }
    },
    suggested_content: function () {
      let content = [];
      let data = [
        {
          period: "阅读环境",
          grade: this.$store.state.result.statistics.readingEnvironmentIndex,
        },
        {
          period: "阅读习惯",
          grade: this.$store.state.result.statistics.readingHabitsIndex,
        },
        {
          period: "知识体系",
          grade: this.$store.state.result.statistics.knowledgeSystemIndex,
        },
        {
          period: "阅读兴趣",
          grade: this.$store.state.result.statistics.readingInterestIndex,
        },
      ];
      let min_grade_1 = 111,
        min_grade_2 = 111,
        min_period_1 = "",
        min_period_2 = "";
      data.map((val) => {
        if (val.grade < min_grade_1) {
          min_grade_1 = val.grade;
          min_period_1 = val.period;
        }
      });
      data.map((val) => {
        if (val.period !== min_period_1) {
          if (val.grade < min_grade_2) {
            min_grade_2 = val.grade;
            min_period_2 = val.period;
          }
        }
      });

      if (min_period_1 === "阅读环境" || min_period_2 === "阅读环境") {
        if (min_period_1 === "阅读环境") {
          if (min_grade_1 <= 65) {
            content.push(
              "结合家长课及“如何做好家庭延伸阅读”线上课，在2~3周内，从营造室内孩子专属阅读区域、增加亲子阅读时间及频率、减少电子产品干扰等方面着手改善家庭阅读环境；"
            );
          } else if (min_grade_1 > 65 && min_grade_1 <= 80) {
            content.push(
              "结合家长课及“如何做好家庭延伸阅读”线上课，明确家庭延伸阅读的重要性，在1周内，在阅读环境营造方面与全家达成共识，进一步改善家庭阅读配套设施，为激发孩子阅读兴趣营造正向环境；"
            );
          }
        } else {
          if (min_grade_2 <= 65) {
            content.push(
              "结合家长课及“如何做好家庭延伸阅读”线上课，在2~3周内，从营造室内孩子专属阅读区域、增加亲子阅读时间及频率、减少电子产品干扰等方面着手改善家庭阅读环境；"
            );
          } else if (min_grade_2 > 65 && min_grade_2 <= 80) {
            content.push(
              "结合家长课及“如何做好家庭延伸阅读”线上课，明确家庭延伸阅读的重要性，在1周内，在阅读环境营造方面与全家达成共识，进一步改善家庭阅读配套设施，为激发孩子阅读兴趣营造正向环境；"
            );
          }
        }
      }
      if (min_period_1 === "阅读习惯" || min_period_2 === "阅读习惯") {
        if (min_period_1 === "阅读习惯") {
          if (min_grade_1 <= 70) {
            content.push(
              "结合老师课上反馈及当前所处阶段，在不损害孩子的阅读体验基础上，以“微量改变”起步，并辅之以持续到课、专业指导，启动习惯培养计划，并进行阅读习惯培养初步心理建设。"
            );
          } else if (min_grade_1 > 70) {
            content.push(
              "根据孩子现有阅读习惯基础上，持续到课，结合老师建议及知识结构、阅读能力，制定每天30分钟，为期21天、100天、365天等高标准打卡计划，并严格执行，为进入下一阅读阶段打下坚实基础。"
            );
          }
        } else {
          if (min_grade_2 <= 70) {
            content.push(
              "结合老师课上反馈及当前所处阶段，在不损害孩子的阅读体验基础上，以“微量改变”起步，并辅之以持续到课、专业指导，启动习惯培养计划，并进行阅读习惯培养初步心理建设。"
            );
          } else if (min_grade_2 > 70) {
            content.push(
              "根据孩子现有阅读习惯基础上，持续到课，结合老师建议及知识结构、阅读能力，制定每天30分钟，为期21天、100天、365天等高标准打卡计划，并严格执行，为进入下一阅读阶段打下坚实基础。"
            );
          }
        }
      }
      if (min_period_1 === "知识体系" || min_period_2 === "知识体系") {
        if (min_period_1 === "知识体系") {
          if (min_grade_1 <= 80) {
            content.push(
              '整理家中藏书，以孩子兴趣为出发点，补充<span style="font-weight:bold">5~10</span>本，与孩子当前阅读习惯阶段难度及趣味性匹配度达到<span style="font-weight:bold">85%</span>的书籍，配合阅读课激发孩子阅读兴趣，为完善知识体系积累良好阅读体验。'
            );
          } else if (min_grade_1 > 80) {
            content.push(
              "在专业指导下，从题材、文化背景、时代、涉及领域等维度丰富阅读书籍，并通过阅读、电影、旅行等活动，探讨并涉猎广泛的社会话题和成长话题，使得孩子的知识结构体系同时具有广度及层次。"
            );
          }
        } else {
          if (min_grade_2 <= 80) {
            content.push(
              '整理家中藏书，以孩子兴趣为出发点，补充<span style="font-weight:bold">5~10</span>本，与孩子当前阅读习惯阶段难度及趣味性匹配度达到<span style="font-weight:bold">85%</span>的书籍，配合阅读课激发孩子阅读兴趣，为完善知识体系积累良好阅读体验。'
            );
          } else if (min_grade_2 > 80) {
            content.push(
              "在专业指导下，从题材、文化背景、时代、涉及领域等维度丰富阅读书籍，并通过阅读、电影、旅行等活动，探讨并涉猎广泛的社会话题和成长话题，使得孩子的知识结构体系同时具有广度及层次。"
            );
          }
        }
      }
      if (min_period_1 === "阅读兴趣" || min_period_2 === "阅读兴趣") {
        if (min_period_1 === "阅读兴趣") {
          if (min_grade_1 <= 65) {
            content.push(
              "发现孩子的兴趣，放大兴趣点。增加孩子与书籍接触机会，锁定其潜在兴趣点及认知范围，选择合适契机，将选好的书本当做礼物送给他。并作为共同话题去探讨和实践。"
            );
          } else if (min_grade_1 > 65) {
            content.push(
              "在专业阅读机构老师的的指导下，通过科学讲解和解析，通过悬念设置、思维引导等方式，进一步激发孩子对其他不熟悉领域的探索欲望与好奇心，并将书籍转化为满足好奇心的工具。形成“懂得越多”——“求知欲越强”——“懂得更多”良性循环。"
            );
          }
        } else {
          if (min_grade_2 <= 65) {
            content.push(
              "发现孩子的兴趣，放大兴趣点。增加孩子与书籍接触机会，锁定其潜在兴趣点及认知范围，选择合适契机，将选好的书本当做礼物送给他。并作为共同话题去探讨和实践。"
            );
          } else if (min_grade_2 > 65) {
            content.push(
              "在专业阅读机构老师的的指导下，通过科学讲解和解析，通过悬念设置、思维引导等方式，进一步激发孩子对其他不熟悉领域的探索欲望与好奇心，并将书籍转化为满足好奇心的工具。形成“懂得越多”——“求知欲越强”——“懂得更多”良性循环。"
            );
          }
        }
      }

      // console.log("min1", min_period_1, min_grade_1);
      // console.log("min2", min_period_2, min_grade_2);
      // console.log("@@content", content);
      return content;
    },
    long_term_plan:function(){
      let content='';
      let data=[
        {
          accomplishment:'好奇心',
          grade:this.$store.state.result.statistics.curiosity
        },
        {
          accomplishment:'创造力',
          grade:this.$store.state.result.statistics.creativeAbility
        },
        {
          accomplishment:'专注度',
          grade:this.$store.state.result.statistics.focus
        },
        {
          accomplishment:'自信度',
          grade:this.$store.state.result.statistics.confidence
        },
        {
          accomplishment:'社交沟通力',
          grade:this.$store.state.result.statistics.socialCommunicationSkills
        },
        {
          accomplishment:'逻辑分析力',
          grade:this.$store.state.result.statistics.logicalAnalysisAbility
        }
      ];
      let min_name='',min_grade=111
      data.map(val=>{
        if(val.grade<min_grade){
          min_name=val.accomplishment;
          min_grade=val.grade;
        }
      })
      if(min_name==='好奇心'){
        if(min_grade<=65){
          content='通过专业老师不同领域书籍的引导课，根据举手、回答问题等课上反馈，全面捕捉孩子的兴趣点，并通过针对性引导激发其好奇心，打造良好的初步阅读体验。'
        }
        else{
          content='通过书房不同领域的书籍内容，不断扩展其认知范围、阅读领域，使孩子获得内在、自觉且持久的探索激情，为今后积累核心竞争力打造感性基础。'
        }
      }
      else if(min_name==='创造力'){
        if(min_grade<=65){
          content='通过持续阅读，初步接触大量幻想小说和童话，逐步开启孩子发散思维的意识，初步培养面对问题的灵活性，以及最基本的抗压能力。'
        }
        else{
          content='通过更为丰富的国内外经典作品中的典型场景，以及专业思维引导，开启多领域想象空间，深层锻炼其应用所学知识，解决复杂问题的能力。'
        }
      }
      else if(min_name==='专注度'){
        if(min_grade<=65){
          content='根据课堂反馈，逐渐增加独立阅读一本书的时间，逐步提升专注力，降低阅读难度，初步理解持续阅读的理念。'
        }
        else{
          content='通过长期阅读的方式，进一步提升专注深度、持续时长，为今后从事高强度、高密度的脑力工作，以及领导力和创造团队化价值打造习惯基础。'
        }
      }
      else if(min_name==='自信度'){
        if(min_grade<=65){
          content='结合孩子的性格特点，在其完善知识体系，增强其对书房课堂内容的理解深度过程中，挖掘孩子个性化优势，并在合适场景下予以高效激励，辅助其在学习过程中积累积极体验，变得自信。'
        }
        else{
          content='坚持长期阅读，并从中获得知识获取的成就感，形成无条件自我认同，凭借在书房长期阅读过程中，相较于同龄人所积累的优势，进一步积累内在自信，为今后克服困难提供精神助力。'
        }
      }
      else if(min_name==='社交沟通力'){
        if(min_grade<=65){
          content='通过在课上发言后所获得的良好体验，培养孩子敢于表达张口说话的勇气，及时鼓励孩子表达自我，初步增强孩子分享、沟通意愿，以及对文字、语言有比较准确的输出。'
        }
        else{
          content='坚持长期阅读，在口语表达流利，观点清晰的基础上，锻炼孩子在实际生活中解读“非语言信息”的能力，并能以此为基础，通过共情、引导逐步掌握更加成熟的社交能力。'
        }
      }
      else if(min_name==='逻辑分析力'){
        if(min_grade<=65){
          content='通过多角度、多层次引导提问，锻炼孩子对真实环境中问题的还原及决策能力，进而逐步提升其逻辑分析能力，理解多线索并进的叙述方式。'
        }
        else{
          content='坚持长期阅读，培养思维的深度、广度及辩证性。激发孩子对社会现象的深层次认知，深度锻炼其把握事物发展本质规律的洞察力以及对规律的运用能力。'
        }
      }
      // console.log('min',min_name,min_grade);
      return content;
    }
  },
  mounted() {
    // console.log("@@", this.$store.state.result);
    //计算年龄
    let day = moment().diff(
      moment(this.$store.state.result.birthday, "YYYY-MM-DD"),
      "years"
    );
    this.age = day;

    // console.log("store", this.$store.state.result.statistics);
    // console.log("content", this.suggested_content);
    // console.log('plan content',this.long_term_plan);
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