<template>
  <div class="aside-memu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    > 
       
      <el-menu-item v-for="item in noChildren" :key="item.path" :index="item.path" @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu  v-for="item in hasChildren" :key="item.path" :index="item.path">
        <template slot="title" >
            <i :class="`el-icon-${item.icon}`"></i>
             <span>{{item.label}}</span>
        </template>
        <el-menu-item-group >
          <el-menu-item @click="clickMenu(subitem)" v-for="subitem in item.children" :key="subitem.path" :index="subitem.path">{{ subitem.label }}</el-menu-item>
        </el-menu-item-group>  
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data(){
    return{
        menuData:[
            {
                path:'/',
                name:"home",
                label:'首页',
                icon:'s-home',
                url:'Home/Home'
            },
            {
                path:'/user',
                name:"user",
                label:'用户管理',
                icon:'user-solid',
                url:'User/User'
            },
            {
                label:'其他',
                icon:'user-solid',
                children:[{
                    path:'/page1',
                    name:"page1",
                    label:'页面一',
                    icon:'user-solid',
                    url:'other/PageOne'
                },{
                    path:'/page2',
                    name:"page2",
                    label:'页面一',
                    icon:'user-solid',
                    url:'other/PageOne'
                }]
            }
        ]
    }
  },
  methods: {
    clickMenu(item){
      if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path ==='/'))){
        this.$router.push(item.path)
     
      }
      
    }

},
    computed:{
        noChildren(){
            return this.menuData.filter(item=>!item.children)
        },
        hasChildren(){
            return this.menuData.filter(item=>item.children)
        }
    }


};
</script>
<style lang="less" scoped>
.aside-memu{
    .el-menu{
        height:100vh;
    }

}
</style>
