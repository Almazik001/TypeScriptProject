import { combineReducers } from "redux";
import { userReducer } from "./useReducer";

export const rootReducer = combineReducers({
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>