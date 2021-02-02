<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../config/routes'


// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     result: {},
//   },
//   mutations: {
//     updataResult(state, newResult) {
//       state.result = newResult;
//     },
//   },
// })

export default {
  name: "App",
  router,
  // store
};
</script>

<style>
body{
  margin: 0;
}
@media screen and (min-width: 1025px){
  /* html{
    padding: 0 25% !important;
    background-color: red;
  } */
  /* body{
    background-color: blue;
  } */
}
#app {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw !important;
}
</style>
