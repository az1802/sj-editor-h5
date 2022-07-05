import {
  Router,
  RouteRecordRaw,
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router';


import Index from "@views/Index.vue";
import Editor from "@views/Editor.vue";
import Home from "@views/Home.vue";
import Login from "@views/Login.vue";
import TemplateDetail from "@views/TemplateDetail.vue";

const routes:RouteRecordRaw[] = [
  {
    path:"/",
    component:Index,
    children: [
      {
        name: 'home',
        path: '',
        component: Home,
        meta: { withHeader: true, title: '欢迎来到网页生成器' },
      },
      {
        name: 'templateDetail',
        path: '/template/:id',
        component: TemplateDetail,
        meta: {
          title: '模板详情',
        },
      },
    ]
  },
  {
    path:"/editor",
    component:Editor,
    children: [
    ],
    meta:{
      title:"模板设计"
    }
  },
  {
    path:"/login",
    component:Login,
    children: [
    ],
    meta:{
      title:"登录页面"
    }
  },


]


const router = createRouter({
  history:createWebHashHistory(),
  routes,
});



export default router
