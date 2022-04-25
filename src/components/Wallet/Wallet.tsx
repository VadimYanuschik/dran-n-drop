import React from 'react';
import {WalletCircle, WalletCircleCurrency, WalletName, WalletWrapper} from "./WalletStyles";
import {WalletProps} from "../../interfaces/WalletProps";

function Wallet({name, amount, currency} : WalletProps) {
    return (
        <WalletWrapper>
            <WalletCircle color={currency}>
                <WalletCircleCurrency>{currency}</WalletCircleCurrency>
            </WalletCircle>
            <WalletName>{name}</WalletName>
        </WalletWrapper>
    );
}

export default Wallet;