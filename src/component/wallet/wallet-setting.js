const WalletSetting = () => {
    return (
        <>
            <div className="card p-2 card-shadow"
                 style={{width: "100%", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body">
                    <h5 className="card-title fw-bold m-0 mb-4" style={{fontSize: 18, color: "#1F1F1F"}}>
                        Pengaturan Dompet
                    </h5>
                    <form className="p-0" style={{backgroundColor: "#FAFAFA"}}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-3" style={{fontSize: 14, color: "#A6A6A6"}}>
                                        Nama Dompet
                                    </h5>
                                    <input type="text" className="form-control" style={{borderRadius: 4, backgroundColor: "#FAFAFA"}}/>
                                </div>
                            </div>
                            <div className="col-6"/>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-3" style={{fontSize: 14, color: "#A6A6A6"}}>
                                        Saldo Awal
                                    </h5>
                                    <input type="text" className="form-control" style={{borderRadius: 4, backgroundColor: "#FAFAFA"}}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-3" style={{fontSize: 14, color: "#A6A6A6"}}>
                                        Mata Uang
                                    </h5>
                                    <input type="text" className="form-control"
                                           style={{borderRadius: 4, color: "#A6A6A6", backgroundColor: "#FAFAFA"}}
                                           value="IDR" disabled/>
                                </div>
                            </div>
                            <div className="col-6">
                                <button type="submit" className="btn btn-default"
                                        style={{backgroundColor: "#3F8DFD", height: 44, color: "white", borderRadius: 4}}>
                                    Simpan Pengaturan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default WalletSetting