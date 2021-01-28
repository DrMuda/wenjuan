<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import Question from "./components/Question/Question.vue";
import BackgroundInfo from "./components/BackgroundInfo/BackgroundInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/BackgroundInfo",
  },
  {
    name: "背景信息",
    path: "/BackgroundInfo",
    component: BackgroundInfo,
  },
  {
    name: "作答问题",
    path: "/Question",
    component: Question,
  },
];
const router = new VueRouter({
  routes,
});

export default {
  name: "App",
  router,
};
</script>

<style>
#app {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw !important;
}
</style>
