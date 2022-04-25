import React, {DragEvent} from 'react';
import {WalletCircle, WalletCircleCurrency, WalletName, WalletWrapper} from "./WalletStyles";
import {WalletProps} from "../../interfaces/WalletProps";

function Wallet({id, name, amount, currency} : WalletProps) {
    function dragOverHandler(e: React.DragEvent<HTMLDivElement>, id: string) {
        e.stopPropagation();
        e.preventDefault();
    }


    function dropHandler(e: React.DragEvent<HTMLDivElement>, id: string) {
        console.log('drop', id);
    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, id: string) {
        console.log('drag', id);
    }

    return (
        <WalletWrapper
            onDragStart={e => dragStartHandler(e, id)}
            onDragOver={e => dragOverHandler(e, id)}
            onDrop={e => dropHandler(e, id)}
            draggable={true}
        >
            <WalletCircle
                color={currency}>
                <WalletCircleCurrency>{currency}</WalletCircleCurrency>
            </WalletCircle>
            <WalletName>{name}</WalletName>
        </WalletWrapper>
    );
}

export default Wallet;