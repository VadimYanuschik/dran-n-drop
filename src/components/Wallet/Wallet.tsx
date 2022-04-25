import React from 'react';
import {WalletCircle, WalletCircleCurrency, WalletName, WalletWrapper} from "./WalletStyles";
import {WalletProps} from "../../interfaces/WalletProps";
import {useNavigate} from "react-router-dom";
import {transactionWallets} from "../../redux/reducers/wallet";
import {useAppDispatch} from "../../redux/hooks";
import {WalletAmount} from "../../pages/Transaction/TransactionStyles";

function Wallet({id, name, amount, currency, senderWalletID, setSenderWalletID}: WalletProps) {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, id: string) {
        if (setSenderWalletID) {
            setSenderWalletID(id);
        }
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>, recipientWalletID: string) {
        e.stopPropagation();
        e.preventDefault();

        if (senderWalletID) {
            dispatch(transactionWallets({sender: senderWalletID, recipient: recipientWalletID}));
        }

        navigate(`/transaction`);
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {}

    return (
        <WalletWrapper
            onDragStart={e => dragStartHandler(e, id)}
            onDragLeave={e => dragEndHandler(e)}
            onDragEnd={e => dragEndHandler(e)}
            onDragOver={e => dragOverHandler(e)}
            onDrop={e => dropHandler(e, id)}
            draggable={true}
        >
            <WalletCircle
                color={currency}>
                <WalletCircleCurrency>{currency}</WalletCircleCurrency>
            </WalletCircle>
            <WalletName>{name}</WalletName>
            {amount && <WalletAmount>{amount}</WalletAmount>}
        </WalletWrapper>
    );
}

export default Wallet;