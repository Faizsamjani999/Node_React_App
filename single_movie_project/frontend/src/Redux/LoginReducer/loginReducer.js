import { ERROR, Loading, Success } from "./actionType";

const initial = {
    load : false,
    isLogin : false,
    msg : "",
    err: false
}

export const loginReducer = (state = initial,action)=>{
    switch(action.type)
    {
        case Loading :
            return{
                ...state,
                load : true
            };
        case Success :
            return{
                ...state,
                load : false,
                isLogin : true,
                msg : action.payload
            };
        case ERROR :
            return{
                ...state,
                load : false,
                err : true
            };
        default : return state;
    }
}