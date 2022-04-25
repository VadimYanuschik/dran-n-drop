import {createAction, createReducer} from "@reduxjs/toolkit";
import {Currencies} from "../../constants";

const initialState = {
    wallets: [
        {
            id: 0,
            amount: 100,
            currency: Currencies.BYN,
            name: Currencies.BYN
        },
        {
            id: 1,
            amount: 100,
            currency: Currencies.EUR,
            name: Currencies.EUR
        },
        {
            id: 2,
            amount: 100,
            currency: Currencies.RUB,
            name: 'Рублики'
        }
    ]
}

export default createReducer(initialState, {})