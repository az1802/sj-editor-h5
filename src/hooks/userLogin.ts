import * as UserService from "@apis/user"
import {message} from "ant-design-vue"
import {reactive,computed} from "vue";
import {useStore} from "vuex"


export function userLogin() {
  const store = useStore();
    console.log(store)

 const loginInfo = reactive({
  phoneNumber: '17688479248',
  veriCode: "7443",
});
  async function getVeriCode() {
    let veriCode = await UserService.genVeriCode({
      phoneNumber: loginInfo.phoneNumber,
    });
    if(veriCode){
      message.success('已成功发送验证码');
      loginInfo.veriCode = veriCode;
    }

    return veriCode

  }

  async function login() {
    let token = await UserService.loginByPhoneNumber({
      phoneNumber: loginInfo.phoneNumber,
      veriCode: String(loginInfo.veriCode),
    });
    store.commit("user/setToken",token);
    localStorage.setItem('token',token)
    return token;
  }

  return {
    loginInfo,
    getVeriCode,
    login
  }
}