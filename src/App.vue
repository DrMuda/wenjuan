<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../config/routes'

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
