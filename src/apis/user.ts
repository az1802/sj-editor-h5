import http from "./http"


export async function getAuthCode(data,config={}){
  let code = await http.post('/users/genVeriCode',data,config);
  if(code=="")
  return code
}