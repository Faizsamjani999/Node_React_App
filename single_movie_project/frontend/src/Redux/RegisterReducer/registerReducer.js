import { ERROR, LOADING, SUCCESS } from "./actionType";

const initial = {
    load : false,
    msg : "",
    error : false,
}

export const registerReducer = (state=initial,action)=>{
    switch(action.type)
    {
        case LOADING :
            return{
                ...state,
                load : true
            }
        case SUCCESS :
            return{
                ...state,
                load : false,
                msg : action.payload
            };
        case ERROR :
            return{
                ...state,
                load : false,
                error : true
            };
    }
}