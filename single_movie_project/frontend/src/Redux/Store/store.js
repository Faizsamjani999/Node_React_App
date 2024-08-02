import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { registerReducer } from "../RegisterReducer/registerReducer";
import { loginReducer } from "../LoginReducer/loginReducer";
import { thunk } from "redux-thunk";
import { movieReducer } from "../SearchMovieReducer/movieReducer";

const combineAll = combineReducers({
    registerReducer,
    loginReducer,
    movieReducer
})


export const store = legacy_createStore(combineAll,applyMiddleware(thunk)) 