import Vue from "vue";
import VueRouter from "vue-router";

import Question from "../src/components/Question/Question.vue";
// import BackgroundInfo from "../src/components/BackgroundInfo/BackgroundInfo.vue";
import RepeatTip from '../src/components/Tips/RepeatTip.vue';
import SuccessTip from '../src/components/Tips/SuccessTip.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/BackgroundInfo",
  },
  {
    name: "BackgroundInfo",
    path: "/BackgroundInfo",
    component: () => import("../src/components/BackgroundInfo/BackgroundInfo.vue"),
  },
  {
    name: "Question",
    path: "/Question",
    component: Question,
  },
  {
    name: "RepeatTip",
    path: "/RepeatTip",
    component: RepeatTip
  },
  {
    name:"SuccessTip",
    path:"/SuccessTip",
    component:SuccessTip
  }
];


const router = new VueRouter({
  routes,
});
export default router