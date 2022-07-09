import { createApp } from 'vue'
import App from './App.vue'

import router from "@router"
import "@styles/index.css"
import axios from "@apis/https";

import GlobalComponentRegister from "./GlobalComponentRegister"

// import "tailwindcss/tailwind.css"
debugger;
const app = createApp(App);
app.config.performance = true;
app.config.globalProperties.foo = 'bar'

  app.use(GlobalComponentRegister)
  .use(router)
  .mount('#app')
