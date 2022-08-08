const WalletCard = () => {
    return (
        <>
            <div className="card bg-white border-white p-2"
                 style={{width: "18 rem", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body bg-white">
                    <img className="bg-white mx-auto d-block mb-4" src="/wallet-img.png" alt=""/>
                    <h5 className="card-title bg-white mb-2 fw-bold text-center"
                        style={{fontSize: 16, color: "#3F8DFD"}}>Belum ada saldo di dompet!</h5>
                    <h5 className="card-title bg-white mb-4 fw-bold text-center" style={{fontSize: 16}}>Yuk isi
                        saldomu...</h5>
                    <div className="d-grid gap-2 col-8 mx-auto">
                        <button className="btn btn-primary border-0 d-block"
                                style={{backgroundColor: "#3F8DFD", height: 44}} type="button">
                            <img className="mx-1"
                                 style={{backgroundColor: "#3F8DFD"}}
                                 src="/plus-icon.png"
                                 alt=""
                            />
                            Tambahkan Saldo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WalletCard