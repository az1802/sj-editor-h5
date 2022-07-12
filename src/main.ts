import { createApp } from 'vue'
import App from './App.vue'
import Lego from 'lego-components'
import 'lego-components/dist/lego-components.css'

import router from "@router"
import store from "@store"
import "@styles/index.css"
import axios from "@apis/https";

import GlobalComponentRegister from "./GlobalComponentRegister"

// import "tailwindcss/tailwind.css"
const app = createApp(App);
app.config.performance = true;
app.config.globalProperties.foo = 'bar'

  app.use(GlobalComponentRegister).use(Lego)
  .use(router)
  .use(store)
  .mount('#app')


  // generating different urls based on env
let baseBackendURL = ''
let baseH5URL = ''
let baseStaticURL = ''

if (process.env.NODE_ENV === 'development' || process.env.VUE_APP_IS_STAGING) {
  // 这里是本地的请求 URL
  // staging 也就是测试环境 URL
  baseBackendURL = 'http://182.92.168.192:8081'
  baseH5URL = 'http://182.92.168.192:8082'
  baseStaticURL = 'http://182.92.168.192:8080'
} else {
  // 生产环境 URL
  baseBackendURL = 'https://api.imooc-lego.com'
  baseH5URL = 'https://h5.imooc-lego.com'
  baseStaticURL = 'https://statistic-res.imooc-lego.com'
}

export { baseBackendURL, baseH5URL, baseStaticURL }