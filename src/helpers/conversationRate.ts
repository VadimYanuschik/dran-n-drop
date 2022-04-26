import {calculatePerOneUnitCurrency} from "./calculatePerOneUnitCurrency";

export function conversationRate(senderCurrency: string, recipientCurrency: string) : string {
    let perOneUnitCurrency = calculatePerOneUnitCurrency(senderCurrency, recipientCurrency);

    return `${perOneUnitCurrency} ${senderCurrency} -  1 ${recipientCurrency}`;
}