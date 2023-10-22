import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
//引用路由组件
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Main from '@/pages/Main.vue'
import User from '@/pages/User.vue'
import PageOne from '@/pages/PageOne.vue'
import PageTwo from '@/pages/PageTwo.vue'
//配置路由
export default new VueRouter({
    routes:[
        
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/home',
            component:Main,
            children:[
                {
                    path:'home',
                    component:Home
                },
                {
                    path:'user',
                    component:User
                },
                {
                    path:'page1',
                    component:PageOne
                },
                {
                    path:'page2',
                    component:PageTwo
                }
            ]
        },
        
    ]

})
