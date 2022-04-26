import {calculatePerOneUnitCurrency} from "./calculatePerOneUnitCurrency";

export function calculateTransaction(isSenderInputChange: boolean, amount: number, senderCurrency: string, recipientCurrency: string) {
    let perOneUnitCurrency = calculatePerOneUnitCurrency(senderCurrency, recipientCurrency);

    if(isSenderInputChange) {
        return (amount / perOneUnitCurrency).toFixed(2)
    } else {
        return (perOneUnitCurrency / amount).toFixed(2);
    }
}