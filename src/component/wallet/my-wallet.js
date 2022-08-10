const MyWallet = () => {
    return (
        <>
            <div className="card p-2 card-shadow"
                 style={{width: "100%", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body">
                    <p className="card-title mb-2" style={{fontSize: 14, color: "#929EAE"}}>Dompetku</p>
                    <div className="row">
                        <div className="col-5">
                            <h5 className="card-title fw-bold m-0" style={{fontSize: 18, color: "#1F1F1F"}}>Rp
                                0</h5>
                        </div>
                        <div className="col-7">
                            <div className="d-flex justify-content-between">
                                <div className="mx-4">
                                    <p style={{color: "#3CCC4B"}}><i className="fa-solid fa-arrow-up"></i> 0%</p>
                                </div>
                                <div className="mx-4">
                                    <p style={{color: "#FF4343"}}><i className="fa-solid fa-arrow-down"></i> 0%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-danger border-2 border-top"/>
                    <p className="card-title mb-1" style={{fontSize: 14, color: "#929EAE"}}>Mata Uang</p>
                    <h5 className="card-title m-0" style={{fontSize: 14, color: "#1F1F1F"}}>IDR/Rupiah</h5>
                </div>
            </div>
        </>
    )
}

export default MyWallet