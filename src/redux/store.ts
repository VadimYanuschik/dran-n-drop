import {configureStore, combineReducers} from "@reduxjs/toolkit";
import wallet from "./reducers/wallet";

const rootReducer = combineReducers({
    wallet: wallet
})

export const store = configureStore({
    reducer: rootReducer
})