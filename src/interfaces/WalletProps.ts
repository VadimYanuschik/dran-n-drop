import {Currencies} from "../constants";
import React from "react";

export interface WalletProps {
    id: string,
    name: string,
    amount?: number,
    currency: Currencies,
    senderWalletID?: string | null,
    setSenderWalletID?: React.Dispatch<React.SetStateAction<string | null>>
}