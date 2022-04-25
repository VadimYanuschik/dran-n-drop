import React from 'react';
import Wallet from "../Wallet/Wallet";
import {useAppSelector} from "../../redux/hooks";
import {WalletsGridWrapper} from "./WalletsGridStyles";

const WalletsGrid = () => {
    const wallets = useAppSelector(state => state.wallet.wallets)
    return (
        <WalletsGridWrapper>
            {wallets.map(wallet => (
                <Wallet
                    key={wallet.id}
                    name={wallet.name}
                    amount={wallet.amount}
                    currency={wallet.currency}/>
            ))}
        </WalletsGridWrapper>
    );
};

export default WalletsGrid;
