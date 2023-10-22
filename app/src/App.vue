<template>
  <div id="app">
     <!-- 路由出口 -->
     <router-view></router-view>  
  </div>
</template>

<script>
import Main from "@/pages/Main.vue";

export default {
  name: "App",
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #030b1b;
}
</style>
