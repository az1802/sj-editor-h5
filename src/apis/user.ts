import http from "./http"
import {message} from "ant-design-vue"


export async function genVeriCode(data={},config={}){
  let res = await http.post('/users/genVeriCode',data,config);

  return res.errno==0&&res.data.code
}


export async function loginByPhoneNumber(data={},config={}) {
    data.veriCode=String(data.veriCode)
    let res = await http.post('/users/loginByPhoneNumber',data,config);
    return res.errno==0&&res.data.token
}