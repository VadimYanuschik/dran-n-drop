import {Currencies} from "../constants";

export interface WalletProps {
    id: string,
    name: string,
    amount: number,
    currency: Currencies
}