import { ERROR, LOADING, SECCESS } from "./actionType"

export const fetchAction = (dispatch)=>(state)=>{
    dispatch({type : LOADING})
    fetch(`https://www.omdbapi.com/?t=${state}&apikey=8df46c2c`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type:SECCESS,payload:res})
        console.log(res);
    })
    .catch((err)=>{
        dispatch({type:ERROR})
        console.log(err);
    })
}

