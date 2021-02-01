<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../config/routes'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    result: {},
  },
  mutations: {
    updataResult(state, newResult) {
      state.result = newResult;
    },
  },
})

export default {
  name: "App",
  router,
  store
};
</script>

<style>
body{
  margin: 0;
}
#app {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw !important;
}
</style>
