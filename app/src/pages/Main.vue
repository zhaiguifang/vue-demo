<template>
  <div>
    <el-container>
      <el-header class="bg-sky-500">Header</el-header>
      <el-container>
        <el-aside> 
            <Menu/>
        </el-aside>
        <el-main>
            <router-view></router-view> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "Main",
  components: {
    Menu,
  },
};
</script>
<style lang="less" scoped>
.el-aside {
  height: 100%;
}
.el-container {
  color: #000305;
}
</style>
