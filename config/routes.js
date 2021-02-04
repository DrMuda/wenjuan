import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/BackgroundInfo",
  },
  {
    name: "BackgroundInfo",
    path: "/BackgroundInfo",
    component: "/BackgroundInfo/BackgroundInfo.vue",
  },
  {
    name: "Question",
    path: "/Question",
    component: "/Question/Question.vue",
  },
  {
    name: "RepeatTip",
    path: "/RepeatTip",
    component: "/Tips/RepeatTip.vue"
  },
  {
    name: "SuccessTip",
    path: "/SuccessTip",
    component: "/Tips/SuccessTip.vue"
  },
  {
    name: "Report",
    path: "/Report",
    component: "/Report/Report.vue"
  },
  {
    name: "Invalid",
    path: "/Invalid",
    component: "/Tips/Invalid.vue"
  }
];


const router = new VueRouter({
  // 部署到服务器的文件夹名
  base: '/wenjuan/',
  mode: 'hash',
  routes: routes.map((route) => {
    return {
      ...route,
      component: () => {
        try {
          const component = import(`../src/components${route.component}`)
          if (component) {
            return component
          }
          return undefined
        } catch (e) {
          console.error(e)
          return undefined
        }
      }
    }
  })
});
export default router