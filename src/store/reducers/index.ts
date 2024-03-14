import { combineReducers } from "redux";
import { userReducer } from "./useReducer";

export const rootReducer = combineReducers({
    users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>