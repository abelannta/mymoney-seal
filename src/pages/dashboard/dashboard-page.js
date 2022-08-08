import IncomeCard from "../../component/dashboard/income-card";
import ExpenseCard from "../../component/dashboard/expense-card";
import WalletCard from "../../component/dashboard/wallet-card";
import FinancialChart from "../../component/dashboard/financial-chart";
import LastTransaction from "../../component/dashboard/last-transaction";

const DashboardPage = () => {
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

export default DashboardPage