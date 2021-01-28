<template>
  <div>
      <div :questionList="questionList" v-for="question in questionList" :key="question.index">
          <div v-if="question.index===0">
              多选1
          </div>
          <div v-else-if="question.index===1">
              多选2
          </div>
          <div v-else>
              <SingleChoice :question="question" :onChange="onChange" />
          </div>
      </div>

  </div>
</template>

<script>
import Vue from "vue";
import { Card, Radio } from "element-ui";
import { questionList } from './data'
import SingleChoice from './component/SingleChoice'

Vue.use(Card);
Vue.use(Radio);


export default {
  name: "Question",
  components:{
      SingleChoice
  },
  data(){
      return {
        questionList:questionList.map((question,index)=>{
            return {
                index,
                ...question
            }
        })
      }
  },
  methods:{
      onChange:function(index,score){
          console.log(index,score)
      }
  }
};

</script>

<style>
</style>