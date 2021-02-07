<template>
  <div class="current_analysis">
    <img src="@/pictures/b2.png" alt="pic" class="biaoti" />
    <!-- <span class="content_title" style="margin-top: 3vw"
      >阅读综合指数对比图</span
    > -->
    <div class="yueduzs">
      <span class="lt">阅读指数</span>
      <ul>
        <li>
          阅读指数由阅读习惯指数、阅读环境指数、阅读兴趣指数、阅读素养指数、知识体系指数组成；
        </li>
        <li>
          为分析测试者培养阅读习惯的难易程度、培养周期以及学习潜力等方面提供数据化支持。
        </li>
      </ul>
    </div>

    <span class="content_title">阅读综合指数一年对比图</span>
    <span class="explain">阅读综合指数对比进入书房1年以上学员</span>
    <div id="chart_two" class="chart_style"></div>

    <span class="content_title" style="margin-top: 5vw"
      >阅读综合指数三年对比图</span
    >
    <span class="explain">阅读综合指数对比进入书房3年以上学员</span>
    <div id="chart_one" class="chart_style"></div>

    <div class="grade_list">
      <span>测试者得分列表</span>
      <el-table
        :data="testData1"
        class="eltable"
        :row-style="{ height: '5vw' }"
        :cell-style="bebold"
        stripe
      >
        <el-table-column prop="timu" label="" align="center"> </el-table-column>
        <el-table-column prop="grade" label="" align="center">
        </el-table-column>
      </el-table>
    </div>

    <el-divider></el-divider>
    <span class="content_title">阅读素养一年对比图</span>
    <span class="explain">阅读素养对比进入书房1年以上学员</span>
    <div id="chart_four" class="chart_style"></div>

    <span class="content_title" style="margin-top: 5vw"
      >阅读素养三年对比图</span
    >
    <span class="explain">阅读素养对比进入书房3年以上学员</span>
    <div id="chart_three" class="chart_style2"></div>
    <div class="grade_list">
      <img src="@/pictures/read14.png" alt="" style="margin-bottom: 3vw" />
      <span>测试者得分列表</span>
      <el-table
        :data="testData2"
        class="eltable"
        :row-style="{ height: '5vw' }"
        :cell-style="bebold2"
        stripe
      >
        <el-table-column prop="timu" label="" align="center"> </el-table-column>
        <el-table-column prop="grade" label="" align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Vue from "vue";
import { Divider, Table, TableColumn } from "element-ui";
Vue.use(Divider);
Vue.use(Table);
Vue.use(TableColumn);
export default {
  data() {
    return {
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
      testData1: [
        {
          timu: "阅读习惯",
          grade: this.$store.state.result.statistics.readingHabitsIndex.toFixed(
            0
          ),
        },
        {
          timu: "阅读环境",
          grade: this.$store.state.result.statistics.readingEnvironmentIndex.toFixed(
            0
          ),
        },
        {
          timu: "阅读兴趣",
          grade: this.$store.state.result.statistics.readingInterestIndex.toFixed(
            0
          ),
        },
        {
          timu: "阅读素养",
          grade: this.$store.state.result.statistics.readingLiteracyIndex.toFixed(
            0
          ),
        },
        {
          timu: "知识体系",
          grade: this.$store.state.result.statistics.knowledgeSystemIndex.toFixed(
            0
          ),
        },
        {
          timu: "阅读总指数",
          grade: this.$store.state.result.statistics.readingIndex.toFixed(0),
        },
      ],
      testData2: [
        {
          timu: "好奇心",
          grade: this.$store.state.result.statistics.curiosity.toFixed(0),
        },
        {
          timu: "创造力",
          grade: this.$store.state.result.statistics.creativeAbility.toFixed(0),
        },
        {
          timu: "专注力",
          grade: this.$store.state.result.statistics.focus.toFixed(0),
        },
        {
          timu: "自信度",
          grade: this.$store.state.result.statistics.confidence.toFixed(0),
        },
        {
          timu: "社交沟通能力",
          grade: this.$store.state.result.statistics.socialCommunicationSkills.toFixed(
            0
          ),
        },
        {
          timu: "逻辑分析能力",
          grade: this.$store.state.result.statistics.logicalAnalysisAbility.toFixed(
            0
          ),
        },
        {
          timu: "阅读素养指数",
          grade: this.$store.state.result.statistics.readingLiteracyIndex.toFixed(
            0
          ),
        },
      ],
      dataset_label: {
        show: true,
        position: "top",
        fontSize:
          document.documentElement.clientWidth > 1024
            ? 23
            : (12 * document.documentElement.clientWidth) / 375,
      },
      text_style: ((13 * document.documentElement.innerWidth) / 450).toString(),
      timer: null,
    };
  },
  methods: {
    show_echart1() {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("chart_one")
      ); //有的话就获取已有echarts实例的DOM节点。
      if (myChart == null) {
        // 如果不存在，就进行初始化。
        myChart = echarts.init(document.getElementById("chart_one"));
      }
      let test_result = this.$store.state.result.statistics;
      let tester_grade = [
        test_result.readingInterestIndex.toFixed(0),
        test_result.readingEnvironmentIndex.toFixed(0),
        test_result.readingHabitsIndex.toFixed(0),
        test_result.readingLiteracyIndex.toFixed(0),
        test_result.knowledgeSystemIndex.toFixed(0),
      ];
      let three_grade = [96, 90, 95, 93, 97];
      var option = {
        legend: {
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
          y: "bottom",
        },
        tooltip: {
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
        },
        dataset: {
          // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
          // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
          dimensions: ["product", "测试者得分", "书房3年以上学员平均得分"],
          source: [
            {
              product: "阅读习惯指数",
              测试者得分: tester_grade[0],
              书房3年以上学员平均得分: three_grade[0],
              label: this.dataset_label,
            },
            {
              product: "阅读环境指数",
              测试者得分: tester_grade[1],
              书房3年以上学员平均得分: three_grade[1],
              label: this.dataset_label,
            },
            {
              product: "阅读兴趣指数",
              测试者得分: tester_grade[2],
              书房3年以上学员平均得分: three_grade[2],
              label: this.dataset_label,
            },
            {
              product: "阅读素养指数",
              测试者得分: tester_grade[3],
              书房3年以上学员平均得分: three_grade[3],
              label: this.dataset_label,
            },
            {
              product: "知识体系指数",
              测试者得分: tester_grade[4],
              书房3年以上学员平均得分: three_grade[4],
              label: this.dataset_label,
            },
          ],
        },
        grid: {
          bottom: (100 * document.documentElement.clientWidth) / 375,
          left: (50 * document.documentElement.clientWidth) / 375,
          top: (40 * document.documentElement.clientWidth) / 375,
          right: (30 * document.documentElement.clientWidth) / 375,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 40,
            fontSize: (function () {
              if (document.documentElement.clientWidth >= 1024) {
                return "23";
              } else {
                return (
                  (13 * document.documentElement.clientWidth) /
                  450
                ).toString();
              }
            })(),
          },
        },
        yAxis: {
          max: 100,
          axisLabel: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              color: "red",
              // color:"rgb(200,20,20)"
            },
          },
          {
            type: "bar",
            itemStyle: {
              color: "rgb(102,205,255)",
              // color: "rgb(64,129,143)",
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    show_echart2() {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("chart_two")
      ); //有的话就获取已有echarts实例的DOM节点。
      if (myChart == null) {
        // 如果不存在，就进行初始化。
        myChart = echarts.init(document.getElementById("chart_two"));
      }
      let test_result = this.$store.state.result.statistics;
      let tester_grade = [
        test_result.readingInterestIndex.toFixed(0),
        test_result.readingEnvironmentIndex.toFixed(0),
        test_result.readingHabitsIndex.toFixed(0),
        test_result.readingLiteracyIndex.toFixed(0),
        test_result.knowledgeSystemIndex.toFixed(0),
      ];
      let one_grade = [76, 78, 65, 75, 78];
      var option = {
        legend: {
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
          y: "bottom",
        },
        tooltip: {
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
        },
        dataset: {
          dimensions: ["product", "测试者得分", "进入书房1年学员平均得分"],
          source: [
            {
              product: "阅读习惯指数",
              测试者得分: tester_grade[0],
              进入书房1年学员平均得分: one_grade[0],
              label: this.dataset_label,
            },
            {
              product: "阅读环境指数",
              测试者得分: tester_grade[1],
              进入书房1年学员平均得分: one_grade[1],
              label: this.dataset_label,
            },
            {
              product: "阅读兴趣指数",
              测试者得分: tester_grade[2],
              进入书房1年学员平均得分: one_grade[2],
              label: this.dataset_label,
            },
            {
              product: "阅读素养指数",
              测试者得分: tester_grade[3],
              进入书房1年学员平均得分: one_grade[3],
              label: this.dataset_label,
            },
            {
              product: "知识体系指数",
              测试者得分: tester_grade[4],
              进入书房1年学员平均得分: one_grade[4],
              label: this.dataset_label,
            },
          ],
        },
        grid: {
          left: (50 * document.documentElement.clientWidth) / 375,
          top: (40 * document.documentElement.clientWidth) / 375,
          right: (30 * document.documentElement.clientWidth) / 375,
          bottom: (100 * document.documentElement.clientWidth) / 375,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 40,
            fontSize: (function () {
              if (document.documentElement.clientWidth >= 1024) {
                return "23";
              } else {
                return (
                  (13 * document.documentElement.clientWidth) /
                  450
                ).toString();
              }
            })(),
          },
        },
        yAxis: {
          max: 100,
          axisLabel: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              // color: "rgb(205,30,0)",
              color: "rgb(255,50,0)",
            },
          },
          {
            type: "bar",
            itemStyle: {
              color: "rgb(205,255,104)",
              // color: "rgb(180,255,80)",
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    show_echart3() {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("chart_three")
      ); //有的话就获取已有echarts实例的DOM节点。
      if (myChart == null) {
        // 如果不存在，就进行初始化。
        myChart = echarts.init(document.getElementById("chart_three"));
      }
      var option;
      let test_result = this.$store.state.result.statistics;
      option = {
        tooltip: {
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 18
                : this.text_style,
          },
        },
        legend: {
          data: ["测试者得分", "书房3年以上学员平均得分"],
          y:
            document.documentElement.clientWidth > 1024
              ? 0
              : (330 * document.documentElement.clientWidth) / 375,
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 18
                : this.text_style,
          },
        },
        textStyle: {
          fontSize: this.compute_radar(),
        },
        radar: {
          // shape: 'circle',
          center: ["51%", "50%"],
          splitLine: {
              //配置雷达图的每一圈的网格线颜色
              lineStyle: {
                color: "orange",
              },
            },
          radius:
            document.documentElement.clientWidth > 1024
              ? 280
              : (document.documentElement.clientWidth / 375) * 112,
          axisName: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          indicator: [
            {
              name: "好奇心",
              max: 100,
              color: "black",
            },
            { name: "逻辑分析能力", max: 100, color: "black" },
            { name: "社交沟通能力", max: 100, color: "black" },
            { name: "自信度", max: 100, color: "black" },
            { name: "专注力", max: 100, color: "black" },
            { name: "创造力", max: 100, color: "black" },
          ],
        },
        series: [
          {
            type: "radar",
            
            data: [
              {
                value: [95, 98, 93, 92, 97, 86],
                name: "书房3年以上学员平均得分",
                label: {
                  show: true,
                },
                itemStyle: {
                  color: "rgb(255,234,145)",
                },
                areaStyle: {
                  color: "rgb(255,234,145)",
                },
              },
              {
                value: [
                  test_result.curiosity.toFixed(0),
                  test_result.logicalAnalysisAbility.toFixed(0),
                  test_result.socialCommunicationSkills.toFixed(0),
                  test_result.confidence.toFixed(0),
                  test_result.focus.toFixed(0),
                  test_result.creativeAbility.toFixed(0),
                ],
                name: "测试者得分",
                label: {
                  show: true,
                },
                itemStyle: {
                  color: "rgb(225,89,14)",
                },
                areaStyle: {
                  color: "rgb(225,89,14)",
                },
              },
            ],
            lineStyle: {
              // color:'red'
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    show_echart4() {
      let myChart = echarts.getInstanceByDom(
        document.getElementById("chart_four")
      ); //有的话就获取已有echarts实例的DOM节点。
      if (myChart == null) {
        // 如果不存在，就进行初始化。
        myChart = echarts.init(document.getElementById("chart_four"));
      }
      let test_result = this.$store.state.result.statistics;
      let tester_grade = [
        test_result.curiosity.toFixed(0),
        test_result.logicalAnalysisAbility.toFixed(0),
        test_result.socialCommunicationSkills.toFixed(0),
        test_result.confidence.toFixed(0),
        test_result.focus.toFixed(0),
        test_result.creativeAbility.toFixed(0),
      ];
      let one_grade = [72, 68, 75, 73, 68, 64];
      var option = {
        legend: {
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
          y: "bottom",
        },
        tooltip: {
          textStyle: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
        },
        dataset: {
          dimensions: ["product", "测试者得分", "进入书房1年学员平均分"],
          source: [
            {
              product: "好奇心",
              测试者得分: tester_grade[0],
              进入书房1年学员平均分: one_grade[0],
              label: this.dataset_label,
            },
            {
              product: "逻辑分析能力",
              测试者得分: tester_grade[1],
              进入书房1年学员平均分: one_grade[1],
              label: this.dataset_label,
            },
            {
              product: "社交沟通能力",
              测试者得分: tester_grade[2],
              进入书房1年学员平均分: one_grade[2],
              label: this.dataset_label,
            },
            {
              product: "自信度",
              测试者得分: tester_grade[3],
              进入书房1年学员平均分: one_grade[3],
              label: this.dataset_label,
            },
            {
              product: "专注力",
              测试者得分: tester_grade[4],
              进入书房1年学员平均分: one_grade[4],
              label: this.dataset_label,
            },
            {
              product: "创造力",
              测试者得分: tester_grade[5],
              进入书房1年学员平均分: one_grade[5],
              label: this.dataset_label,
            },
          ],
        },
        grid: {
          bottom: (100 * document.documentElement.clientWidth) / 375,
          left: (50 * document.documentElement.clientWidth) / 375,
          right: (30 * document.documentElement.clientWidth) / 375,
          top: (40 * document.documentElement.clientWidth) / 375,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 40,
            fontSize: (function () {
              if (document.documentElement.clientWidth >= 1024) {
                return "23";
              } else {
                return (
                  (13 * document.documentElement.clientWidth) /
                  450
                ).toString();
              }
            })(),
          },
        },
        yAxis: {
          max: 100,
          axisLabel: {
            fontSize:
              document.documentElement.clientWidth > 1024
                ? 23
                : this.text_style,
          },
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              color: "rgb(206,189,99)",
            },
          },
          {
            type: "bar",
            itemStyle: {
              color: "rgb(7,108,130)",
            },
          },
        ],
      };
      myChart.setOption(option);
    },

    initEcharts() {
      this.show_echart1();
      this.show_echart2();
      this.show_echart3();
      this.show_echart4();
    },

    resetEcharts() {
      let myChart1 = echarts.getInstanceByDom(
        document.getElementById("chart_one")
      );
      let myChart2 = echarts.getInstanceByDom(
        document.getElementById("chart_two")
      );
      let myChart3 = echarts.getInstanceByDom(
        document.getElementById("chart_three")
      );
      let myChart4 = echarts.getInstanceByDom(
        document.getElementById("chart_four")
      );
      myChart1.resize();
      myChart2.resize();
      myChart3.resize();
      myChart4.resize();
    },
    compute_radar() {
      if (document.documentElement.innerWidth <= 1024) {
        return (document.documentElement.innerWidth / 375) * 11;
      } else if (document.documentElement.innerWidth > 1009) {
        return "14";
      }
    },
    bebold({ row, rowIndex }) {
      if (rowIndex == 5) {
        return "font-weight:bolder";
      }
    },
    bebold2({ row, rowIndex }) {
      if (rowIndex == 6) {
        return "font-weight:bolder";
      }
    },
  },
  mounted() {
    this.initEcharts();
    window.onresize = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.resetEcharts();
        this.initEcharts();
      }, 250);
    };
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-table {
  margin-bottom: 10vw;
  .cell {
    line-height: 7vw;
  }
}
img {
  width: 95%;
  display: block;
  margin: 3vw auto;
}

.base {
  background-color: #409eff;
  padding: 2vw 0;
  height: 8vw;
}
.title {
  display: inline-block;
  font-size: 5vw;
  line-height: 8vw;
  color: white;
}
.lt {
  font-size: 4.5vw;
  display: block;
  margin-top: 5vw;
  margin-left: 5vw;
  font-weight: bolder;
}
i {
  font-size: 8vw;
  float: left;
  color: white;
  margin-left: 5vw;
  line-height: 8vw;
}
.reading_habits,
.stage_analysis,
.yueduzs {
  ul {
    font-size: 4.5vw;
    margin-left: 5vw;
    margin-top: 1vw;
    margin-bottom: 9vw;
    width: 79%;
    li {
      font-size: 4vw;
    }
  }
}
.content_title {
  display: block;
  text-align: center;
  font-size: 6vw;
}
.explain {
  display: block;
  text-align: center;
  font-size: 4vw;
  margin-top: 8vw;
  margin-bottom: -3vw;
}

.bebold {
  font-weight: bold;
}
.grade_list {
  position: relative;
  width: 80%;
  margin-top: 5vw;
  padding: 0 10%;
  span {
    position: absolute;
    z-index: 10;
    text-align: center;
    font-size: 5vw;
    width: 80%;
    height: 12vw;
    line-height: 12vw;
    background-color: #ebebeb;
  }
}
.eltable {
  font-size: 4vw;
}
.chart_style {
  width: 100%;
  height: 90vw;
}
.chart_style2 {
  width: 100%;
  height: 98vw;
}

.biaoti {
  width: 100% !important;
}
@import url("../css/currentanalysis.less");
</style>