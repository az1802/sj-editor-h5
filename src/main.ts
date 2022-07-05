import { createApp } from 'vue'
import App from './App.vue'

import router from "@router"
import "@styles/index.css"

import GlobalComponentRegister from "./GlobalComponentRegister"

// import "tailwindcss/tailwind.css"

createApp(App)
  .use(GlobalComponentRegister)
  .use(router)
  .mount('#app')
