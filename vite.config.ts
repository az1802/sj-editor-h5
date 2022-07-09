import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve} from 'path'

function resolveApp(dir){
  return resolve(__dirname,dir)
}

// https://vitejs.dev/config/
export default defineConfig(()=>{

  return {
    plugins: [vue()],
    resolve:{
      alias:{
        "@":resolveApp("src"),
        "@assets":resolveApp("src/assets"),
        "@styles":resolveApp("src/styles"),
        "@views":resolveApp("src/views"),
        "@components":resolveApp("src/components"),
        "@router":resolveApp("src/router"),
        "@store":resolveApp("src/store"),
        "@utils":resolveApp("src/utils"),
        "@apis":resolveApp("src/apis"),
      }
    },
    server:{
      port:3001,
      // strictPort:true,
      // open:true
    }
  }
})
