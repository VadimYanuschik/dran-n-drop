import {Currencies} from "../constants";

export interface WalletProps {
    name: string,
    amount: number,
    currency: Currencies
}