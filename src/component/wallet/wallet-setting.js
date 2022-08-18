import axios from "axios";
import {useEffect, useState} from "react";

const WalletSetting = () => {
    const [dataWallet, setDataWallet] = useState([])

    const getWallet = async () => {
        try {
            await axios({
                method: 'GET',
                url: 'https://be-money-management.herokuapp.com/api/wallets',
                headers: {Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).token}`},
            }).then((res) => {
                setDataWallet(res.data.data[(res.data.data).length - 1])
                console.log(res.data.data[(res.data.data).length - 1])
            });
        } catch (error) {

        }
    };

    const postWallet = async () => {
        try {
            await axios({
                method: 'POST',
                url: 'https://be-money-management.herokuapp.com/api/wallets/store',
                headers: {Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).token}`},
                data: {name: dataWallet.name, initialbalance: dataWallet.initialbalance},
            }).then((res) => {
                window.location.reload()
            });
        } catch (error) {
            alert("Nama Dompet harus diisi!")
        }
    };

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        setDataWallet({...dataWallet, [name]: typeOfValue})
    }

    const handleWalletSubmit = () => {
        postWallet()
    }

    useEffect(() => {
        getWallet()
    }, [])

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
                                    <input onChange={handleChange} value={dataWallet?.name} name="name" type="text"
                                           className="form-control"
                                           style={{borderRadius: 4, backgroundColor: "#FAFAFA"}}/>
                                </div>
                            </div>
                            <div className="col-6"/>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-3" style={{fontSize: 14, color: "#A6A6A6"}}>
                                        Saldo Awal
                                    </h5>
                                    <input onChange={handleChange} value={dataWallet?.initialbalance}
                                           name="initialbalance" type="text" className="form-control"
                                           style={{borderRadius: 4, backgroundColor: "#FAFAFA"}}/>
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
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-default" onClick={handleWalletSubmit}
                                    style={{
                                        backgroundColor: "#3F8DFD",
                                        height: 44,
                                        color: "white",
                                        borderRadius: 4,
                                        width: "100%"
                                    }}>
                                Simpan Pengaturan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WalletSetting