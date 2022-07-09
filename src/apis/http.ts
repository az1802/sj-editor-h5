import axios, { AxiosRequestConfig } from 'axios';
import store from "@/store";

axios.defaults.baseURL = 'http://test.sunj.com:3002/api';

axios.interceptors.response.use(resp=>{
  if(resp.status==200){
    if(resp.data.data.errno!=0){

    }else{
      return resp.data.data
    }
  }
},e=>{

})


export default axios;