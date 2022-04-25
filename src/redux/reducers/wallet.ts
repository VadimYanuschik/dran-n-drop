import {createAction, createReducer} from "@reduxjs/toolkit";
import {Currencies} from "../../constants";
import {WalletProps} from "../../interfaces/WalletProps";

interface WalletReducerProps {
    wallets: WalletProps[],
    sender: WalletProps | undefined | null,
    recipient: WalletProps | undefined | null
}

const initialState : WalletReducerProps = {
    wallets: [
        {
            id: '0',
            amount: 100,
            currency: Currencies.BYN,
            name: Currencies.BYN
        },
        {
            id: '1',
            amount: 100,
            currency: Currencies.EUR,
            name: Currencies.EUR
        },
        {
            id: '2',
            amount: 100,
            currency: Currencies.RUB,
            name: 'Рублики'
        }
    ],
    sender: undefined,
    recipient: undefined
}

export const transactionWallets = createAction<{sender: string, recipient: string}>('transactionWallets')


export default createReducer(initialState, (builder) => {
    builder.addCase(transactionWallets, (state, action) => {
        state.sender = state.wallets.find(wallet => wallet.id === action.payload.sender)
        state.recipient = state.wallets.find(wallet => wallet.id === action.payload.recipient)
    })
})