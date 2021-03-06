import React from 'react';
import {
    Alert,
    ArrowRight,
    ConversationRate, FormBox,
    Input,
    Submit,
    TransactionBox,
    TransactionForm,
    TransactionWrapper,
    WalletsTransactionBox
} from "./TransactionStyles";
import Wallet from "../../components/Wallet/Wallet";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";
import {conversationRate} from "../../helpers/conversationRate";
import {calculateTransaction} from "../../helpers/calculateTransaction";
import {validationNumbers} from "../../helpers/validationNumbers";
import {isBiggerThanAmount} from "../../helpers/isBiggerThanAmount";
import {makeTransaction} from "../../redux/reducers/wallet";

const Transaction = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {sender, recipient} = useAppSelector(state => state.wallet)
    const [isErrorShow, setIsErrorShow] = React.useState<boolean>(false);
    const [senderInput, setSenderInput] = React.useState<string>('');
    const [recipientInput, setRecipientInput] = React.useState<string>('');

    React.useEffect(() => {
        if(!sender || !recipient) {
            navigate('/');
        }
    }, []);


    function handleSubmit() {
        if(validationNumbers(senderInput, recipientInput) || isBiggerThanAmount(senderInput, recipientInput, sender?.amount, recipient?.amount)) {
            setIsErrorShow(true);
        } else {
            setIsErrorShow(false);

            let senderAmount = Number(senderInput);
            let recipientAmount = Number(recipientInput);

            dispatch(makeTransaction({senderAmount, recipientAmount}));
            navigate('/');
        }
    }

    function handleSenderChange(e: React.ChangeEvent<HTMLInputElement>) {
        if(sender && recipient) {
            let value = Number(e.target.value);
            let recipientAmount = calculateTransaction(true, value, sender.currency, recipient.currency)

            setSenderInput(e.target.value)
            setRecipientInput(recipientAmount);
        }
    }

    function handleRecipientChange(e: React.ChangeEvent<HTMLInputElement>) {
        if(sender && recipient) {
            let value = Number(e.target.value);
            let senderAmount = calculateTransaction(false, value, sender.currency, recipient.currency)

            setRecipientInput(e.target.value)
            setSenderInput(senderAmount);
        }
    }

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
                            <FormBox>
                                <label htmlFor="#senderInput">{sender.currency}</label>
                                <Input id={'senderInput'} type="text" value={senderInput} onChange={e => handleSenderChange(e)}/>
                            </FormBox>
                            <FormBox>
                                <label htmlFor="#recipientInput">{recipient.currency}</label>
                                <Input id={'recipientInput'} type="text" value={recipientInput} onChange={e => handleRecipientChange(e)}/>
                            </FormBox>
                            <ConversationRate>???????? ??????????????????????: {conversationRate(sender.currency, recipient.currency)}</ConversationRate>
                            {isErrorShow ? <Alert>?????????????????? ?????????????????? ????????????!</Alert> : null}
                            <Submit onClick={handleSubmit}>??????????????????????</Submit>
                        </TransactionForm>
                    </TransactionBox>
            )
            : null}
        </TransactionWrapper>
    );
};

export default Transaction;
