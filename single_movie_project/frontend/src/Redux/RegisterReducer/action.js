import axios from "axios"

export const registerAction = (dispatch,obj)=>{
    dispatch({type : "LOADING"})
    axios.post("http://localhost:9999/registerData",obj)
    .then((res)=>{
        dispatch({type : "SUCCESS",payload:res.data.msg})
    })
    .catch((err)=>{
        dispatch({type : "ERROR"})
    })
}