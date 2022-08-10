const IncomeCard = () => {
    return(
        <>
            <div className="card p-2 card-shadow" style={{width: "18 rem", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <h5 className="card-title mb-3" style={{fontSize: 14, color: "#929EAE"}}>Pemasukan</h5>
                            <h5 className="card-title fw-bold m-0" style={{fontSize: 18, color: "#3CCC4B"}}>+0</h5>
                        </div>
                        <div className="col-4">
                            <img className="float-end" src="/income-icon.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncomeCard