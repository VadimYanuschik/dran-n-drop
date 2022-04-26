export function isBiggerThanAmount(senderInput : string = '0', recipientInput : string = '0', senderAmount: number = 0, recipientAmount: number = 0) : boolean {
    return Number(senderInput) > senderAmount || Number(recipientInput) > recipientAmount;
}