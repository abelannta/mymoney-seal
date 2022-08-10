import MyWallet from "../../component/wallet/my-wallet";
import WalletSetting from "../../component/wallet/wallet-setting";

const Wallet = () => {
    return (
        <>
            <div style={{backgroundColor: "#F0F0F0", minHeight: "100vh"}}>
                <div className="container">
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
        </>
    )
}

export default Wallet