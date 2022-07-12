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
import Test from "@views/Test.vue";
import TemplateDetail from "@views/TemplateDetail.vue";
import MyWork from "@views/MyWork.vue";
import Setting from "@views/Setting.vue";

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
      { path: 'mywork', name: 'MyWork', component: MyWork, meta: { requiredLogin: true, title: '我的设计列表' } },
      { path: 'setting', name: 'Setting', component: Setting, meta: { requiredLogin: true, title: '我的信息' } },
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
    path: '/editor/:id',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "editor" */ '../views/Editor.vue'),
    meta: { requiredLogin: true, title: '编辑我的设计' }
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
  {
    path:"/test",
    component:Test,
    children: [
    ],
    meta:{
      title:"测试页面"
    }
  },


]


const router = createRouter({
  history:createWebHashHistory(),
  routes,
});



export default router
