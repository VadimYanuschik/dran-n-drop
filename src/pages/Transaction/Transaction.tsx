import React from 'react';
import {ArrowRight, TransactionWrapper, WalletsTransactionBox} from "./TransactionStyles";
import Wallet from "../../components/Wallet/Wallet";
import {Currencies} from "../../constants";
import {useAppSelector} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";

const Transaction = () => {
    const navigate = useNavigate();
    const {sender, recipient} = useAppSelector(state => state.wallet)

    React.useEffect(() => {
        if(!sender || !recipient) {
            navigate('/');
        }
    }, []);


    return (
        <TransactionWrapper>
            {(sender && recipient)
                ? (
                    <WalletsTransactionBox>
                        <Wallet id={sender.id} name={sender.name} amount={sender.amount} currency={sender.currency}/>
                        <ArrowRight> {'>'} </ArrowRight>
                        <Wallet id={recipient.id} name={recipient.name} amount={recipient.amount} currency={recipient.currency}/>
                    </WalletsTransactionBox>
            )
            : null}

        </TransactionWrapper>
    );
};

export default Transaction;
