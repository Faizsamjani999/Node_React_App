import { ERROR, LOADING, SECCESS } from "./actionType";

const initial = {
    load : false,
    data : [],
    error : false
}

export const movieReducer = (state=initial,action)=>{
    switch(action.type)
    {
        case LOADING:
            return{
                ...state,
                load : true
            };
        case SECCESS:
            return{
                ...state,
                load : false,
                data : action.payload
            };
        case ERROR:
            return{
                ...state,
                load : false,
                error : true
            };
        default : return state;
    }
}

