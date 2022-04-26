import {ExchangeRate} from "../constants";

export function calculatePerOneUnitCurrency(senderCurrency: string, recipientCurrency: string) : number {
    let senderCurrencyRate : number = 0;
    let recipientCurrencyRate : number = 0;

    Object.keys(ExchangeRate).forEach(function (key) {
        if(key === senderCurrency) {
            senderCurrencyRate = ExchangeRate[key as keyof typeof ExchangeRate];
        }
        if(key === recipientCurrency) {
            recipientCurrencyRate = ExchangeRate[key as keyof typeof ExchangeRate];
        }
    })
    return Number((senderCurrencyRate / recipientCurrencyRate).toFixed(2));
}