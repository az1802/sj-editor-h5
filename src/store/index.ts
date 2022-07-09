import {createStore,Commit} from "vuex";

export interface GlobalStatus{
  loading: boolean;
  error:any;
  opName?:string;
}

export interface GlobalDataProps {
  status:GlobalStatus;
}

export default createStore<GlobalDataProps>({
 state:{
   status:{
    loading:1
  }
 }
})
