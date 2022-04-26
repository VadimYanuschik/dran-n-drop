import {ExchangeRate} from "../constants";

export function conversationRate(senderCurrency: string, recipientCurrency: string) : string {
    let senderCurrencyRate : string = '';
    let recipientCurrencyRate : string = '';

    Object.keys(ExchangeRate).forEach(function (key) {
        if(key === senderCurrency) {
            senderCurrencyRate = ExchangeRate[key as keyof typeof ExchangeRate] + ` ${key}`;
        }
        if(key === recipientCurrency) {
            recipientCurrencyRate = ExchangeRate[key as keyof typeof ExchangeRate] + ` ${key}`;
        }
    })
    return `${senderCurrencyRate}  - ${recipientCurrencyRate}`;
}