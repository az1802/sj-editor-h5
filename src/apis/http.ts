import axios, { AxiosRequestConfig } from 'axios';
import store from "@/store";
import {message} from "ant-design-vue"


axios.defaults.baseURL = 'http://test.sunj.com:3002/api/';
axios.interceptors.request.use(config=>{
  console.log('config: ', config);
  return config

})
axios.interceptors.response.use(resp=>{

  if(resp.status==200){
    if(resp.data.errno!=0){
      message.error(resp.data.message)
    }
    return resp
  }else{
  }
},e=>{

})

let token = window.localStorage.getItem('token')
if(token){
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}


export default axios;