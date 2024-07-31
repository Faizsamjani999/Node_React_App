import { legacy_createStore } from "redux"
import { registerReducer } from "../RegisterReducer/registerReducer";


export const store = legacy_createStore(registerReducer)