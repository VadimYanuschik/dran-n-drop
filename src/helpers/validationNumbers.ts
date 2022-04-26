export function validationNumbers(senderInput: string = '0', recipientInput: string = '0') : boolean {
    return isNaN(Number(senderInput)) || isNaN(Number(recipientInput)) || Number(senderInput) < 0 || Number(recipientInput) < 0
}