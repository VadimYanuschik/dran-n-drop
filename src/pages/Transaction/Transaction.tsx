import React from 'react';
import {
    ArrowRight,
    ConversationRate,
    Input,
    Submit,
    TransactionBox,
    TransactionForm,
    TransactionWrapper,
    WalletsTransactionBox
} from "./TransactionStyles";
import Wallet from "../../components/Wallet/Wallet";
import {useAppSelector} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";
import {conversationRate} from "../../helpers/conversationRate";

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
                    <TransactionBox>
                        <WalletsTransactionBox>
                            <Wallet id={sender.id} name={sender.name} amount={sender.amount} currency={sender.currency}/>
                            <ArrowRight> {'>'} </ArrowRight>
                            <Wallet id={recipient.id} name={recipient.name} amount={recipient.amount} currency={recipient.currency}/>
                        </WalletsTransactionBox>
                        <TransactionForm>
                            <Input type="number"/>
                            <Input type="number"/>
                            <ConversationRate>Курс конвертации: {conversationRate(sender.currency, recipient.currency)}</ConversationRate>
                            <Submit>Подтвердить</Submit>
                        </TransactionForm>
                    </TransactionBox>
            )
            : null}
        </TransactionWrapper>
    );
};

export default Transaction;
