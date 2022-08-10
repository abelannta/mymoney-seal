import MyWallet from "../../component/wallet/my-wallet";
import WalletSetting from "../../component/wallet/wallet-setting";

const Wallet = () => {
    return (
        <>
            <div className="transaction-container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-4">
                                <MyWallet/>
                            </div>
                            <div className="col-6">
                                <WalletSetting/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet