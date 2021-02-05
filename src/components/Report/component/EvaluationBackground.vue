<template>
  <div class="EvaluationBackground">
    <img src="@/pictures/b1.png" alt="pic"  class="biaoti"/>
    <div class="content">
      <span class="lt">数据来源</span>
      <span class="re">本报告所采用数据如下：</span>
      <ul>
        <li>
          石家庄约读书房<span class="color_red">5230名</span>学员学习数据；
        </li>
        <li>
          共计<span class="color_red">1260份</span
          >《石家庄约读书房阅读情况调查问卷》（注：学术型社会调查问卷要求为600份）；
        </li>
        <li>
          石家庄约读书房<span class="color_red">1090节</span>公益课反馈数据：
        </li>
        <li>石家庄市<span class="color_red">37所</span>小学反馈数据库；</li>
        <li>
          以及测试者所填写的<span style="font-weight: bold"
            >《石家庄约读书房入学测评》</span
          >。
        </li>
        <li>
          报告图表中“在书房学习超过1年、3年的学员”均指<span class="color_red"
            >“到课率超过85%”</span
          >的学员。
        </li>
      </ul>
      <span class="lt">处理算法</span>
      <div class="third">
        测评报告内所呈现图表，为数值型数据经过“偏度修正”及
        “有偏估计调整”后，依据“BD-信息原子模型”处理后所得。
      </div>
    </div>
    <el-divider></el-divider>
    <div class="habby_compare">
      <span class="content_title">阅读习惯对比图</span>
      <span class="explain">入书房之前学员数据</span>
      <img src="@/pictures/read1.png" alt="入书房之前学员数据" />
      <img src="@/pictures/read2.png" alt="说明" />
      <span class="explain">在书房学习超过1年的学员数据</span>
      <img src="@/pictures/read3.png" alt="在书房学习超过1年的学员数据" />
      <img src="@/pictures/read2.png" alt="说明" />
      <span class="summary"
        >孩子读书的频率和场景是反应阅读主动性的最主要依据！</span
      >
    </div>
    <el-divider></el-divider>
    <div class="grade_change">
      <span class="content_title">学习成绩变化图</span>
      <span class="content_title" 
        >（以四年级数据为例）</span
      >
      <img src="@/pictures/read4.png" alt="在校成绩变化图" />
      <img src="@/pictures/read5.png" alt="说明" />
      <span class="summary"
        >在保证持续阅读情况下，阅读能力对成绩提升促进作用。</span
      >
    </div>
    <el-divider></el-divider>
    <div class="effect_compare">
      <span class="content_title">阅读行为模式对比图</span>
      <img src="@/pictures/read12.png" alt="阅读效果对比图" />
      <img src="@/pictures/read13.png" alt="阅读效果对比图" />
      <span class="summary"
        >书籍的选择，阅读环境的构建，正确的引导，是激励孩子持续阅读的重要因素。
      </span>
    </div>
    <el-divider></el-divider>
    <div class="time_change">
      <span class="content_title">阅读时长增长图</span>
      <img src="@/pictures/read8.png" alt="阅读时长增长图" />
      <span class="summary"
        >随着阅读习惯的建立、知识内化，学员在每日阅读时间、专注度稳步提升。
      </span>
    </div>
    <el-divider></el-divider>
    <div class="speed_change">
      <span class="content_title">阅读速度提升图</span>
      <img src="@/pictures/read9.png" alt="阅读速度提升图" />
      <span class="summary"
        >随着阅读习惯建立，学员信息处理能力提升、理解角度多样化，深度加深。
      </span>
    </div>
    <el-divider></el-divider>
    <div class="read_accumulation">
      <span class="content_title">阅读量累计图</span>
      <img src="@/pictures/read10.png" alt="阅读量累计图" />
      <img src="@/pictures/beizhu.png" alt="备注" />
      <img
        src="@/pictures/read11.png"
        alt="阅读量累计图"
        style="margin-bottom: 3vw"
      />
      <span class="summary"
        >随阅读能力（专注时长、阅读速度）的提升，学员在阅读量上的优势越发明显。
      </span>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
i {
  font-size: 8vw;
  float: left;
  color: white;
  margin-left: 5vw;
  line-height: 8vw;
}
.base {
  background-color: #409eff;
  padding: 2vw 0;
  height: 8vw;
}
.content_title {
  display: block;
  text-align: center;
  font-size: 6vw;
}
.title {
  display: inline-block;
  font-size: 5vw;
  line-height: 8vw;
  color: white;
}
img {
  width: 90%;
  display: block;
  margin: 0 auto;
}
.content {
  font-size: 4vw;
  .lt {
    font-size: 4.5vw;
    display: block;
    margin-top: 5vw;
    margin-left: 5vw;
    font-weight: bolder;
  }
  .re {
    margin-left: 5vw;
    display: block;
    margin-top: 2vw;
  }
  .third {
    margin-left: 5vw;
    margin-top: 2vw;
    width: 90%;
  }
  ul {
    margin-left: 5vw;
    margin-top: 1vw;
    .color_red {
      color: red;
      font-weight: bolder;
    }
    li {
      width: 85%;
    }
  }
}

.habby_compare {
  .explain {
    display: block;
    text-align: center;
    font-size: 4vw;
    margin-top: 5vw;
  }
}
.summary {
  display: block;
  padding: 3vw 7%;
  font-size: 4vw;
  margin: 5vw auto;
  width: 72%;
  background-color: #a4bec7;
  color:white;
  border-radius: 6vw;
}
.biaoti{
  width: 100% !important;
}

@import url("../css/evaluationbackground.less");

</style>