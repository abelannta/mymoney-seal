const IncomeCard = () => {
    return(
        <>
            <div className="card bg-white border-white p-2" style={{width: "18 rem", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body bg-white">
                    <div className="row">
                        <div className="col-8 bg-white">
                            <h5 className="card-title bg-white mb-3" style={{fontSize: 14, color: "#929EAE"}}>Pemasukan</h5>
                            <h5 className="card-title bg-white fw-bold m-0" style={{fontSize: 18, color: "#3CCC4B"}}>+0</h5>
                        </div>
                        <div className="col-4 bg-white">
                            <img className="bg-white float-end" src="/income-icon.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncomeCard