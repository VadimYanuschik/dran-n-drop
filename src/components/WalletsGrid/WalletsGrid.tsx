import React from 'react';
import Wallet from "../Wallet/Wallet";
import {useAppSelector} from "../../redux/hooks";
import {WalletsGridWrapper} from "./WalletsGridStyles";

const WalletsGrid = () => {
    const wallets = useAppSelector(state => state.wallet.wallets);
    const [senderWalletID, setSenderWalletID] = React.useState<string | null>(null);
    return (
        <WalletsGridWrapper>
            {wallets.map(wallet => (
                <Wallet
                    key={wallet.id}
                    id={wallet.id}
                    name={wallet.name}
                    amount={wallet.amount}
                    currency={wallet.currency}
                    senderWalletID={senderWalletID}
                    setSenderWalletID={setSenderWalletID}
                />
            ))}
        </WalletsGridWrapper>
    );
};

export default WalletsGrid;
