import {createAction, createReducer} from "@reduxjs/toolkit";
import {Currencies} from "../../constants";

const ininialState = {
    wallets: {
        0: {
            id: 0,
            amount: 100,
            currency: Currencies.BYN
        },
        1: {
            id: 1,
            amount: 100,
            currency: Currencies.EUR
        },
        2: {
            id: 2,
            amount: 100,
            currency: Currencies.RUB
        }
    }
}

export default createReducer(ininialState, {})