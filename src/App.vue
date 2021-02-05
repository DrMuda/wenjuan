<template>
  <div id="app">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../config/routes'


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
