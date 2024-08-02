import axios from "axios"



export const loginAction = (obj)=>(dispatch)=>{
    dispatch({type : "Loading"})
     return axios.post("http://localhost:9999/registerLogin",obj)
    .then((res)=>{
        dispatch({type:"Success",payload:res.data.msg})
        console.log(res);
        return {isLogin : true,...res}
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type:"ERROR"})
        return {isLogin : false}
    })
}
