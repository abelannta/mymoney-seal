import IncomeCard from "./component/income-card";
import ExpenseCard from "./component/expense-card";
import WalletCard from "./component/wallet-card";
import FinancialChart from "./component/financial-chart";
import LastTransaction from "./component/last-transaction";

const DashboarPage = () => {
    return(
        <>
            <div style={{backgroundColor: "#F0F0F0"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="row gy-4">
                                <div className="col-6">
                                    <IncomeCard/>
                                </div>
                                <div className="col-6">
                                    <ExpenseCard/>
                                </div>
                                <div className="col-12">
                                    <FinancialChart/>
                                </div>
                                <div className="col-12">
                                    <LastTransaction/>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <WalletCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboarPage