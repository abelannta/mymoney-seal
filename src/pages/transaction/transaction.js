import React, {useEffect, useState} from 'react';
import ModalTransaction from '../../component/transaction/modal';
import "./transaction.css";
import axios, { Axios } from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import TransactionNull from '../../component/transaction/transaction-null';

export default function Transaction({userToken}) {
    const [lgShow, setLgShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [listTransaction, setListTransaction] = useState([]);
    const [isSubmit, setSubmit] = useState(true);

    const config = {
        headers: { Authorization: `Bearer ${userToken.token}` }
    };
    const bodyParameters = {
        key: "value"
    };

    const getTransaction = () => {
        setLoading(true);
        axios.get(
            'https://be-money-management.herokuapp.com/api/transcations', config
        ).then(result => {
            if(result) {
                console.log(result)
                setListTransaction(result.data.data)
            }
        }).catch(err => {
            console.log(err)
        });
        setLoading(false);
    };

    const handleDeleteTransaction = (id_transaction) => {
        axios.delete(
            `https://be-money-management.herokuapp.com/api/transcations/destroy/${id_transaction}`
        ).then(result => {
            if(result) {
                console.log(result);
                setSubmit(!isSubmit);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    console.log(listTransaction);

    useEffect(() => {
        getTransaction();
    }, [isSubmit])

  return (
    <>
        <div className='transaction-container'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-10'>
                    <div className='d-flex justify-content-between'>
                        <input className="search-input mb-3" name="transaction" type="text" placeholder='Cari apa saja di Transaksi'/>
                        <button onClick={() => setLgShow(true)} type="button" className="add-btn mb-3" data-toggle="modal" data-target="#modalTransaksi">
                            <i className='fas fa-plus me-2'></i>
                            Tambah Transaksi
                        </button>
                    </div>
                    <div className="card bg-white border-white p-2"
                    style={{width: "18 rem", overflow: "hidden", borderRadius: 10}}>
                        <div className="card-body bg-white">
                            {(listTransaction.length === 0) && <TransactionNull />}
                            {(listTransaction.length !== 0) && <>
                                {loading ? (
                                    <div className="d-flex align-items-center justify-content-center my-5">
                                        <Spinner animation="border" variant="primary" />
                                    </div>
                                ) : (
                                <table className="table">
                                    <tr>
                                        <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Kategori</td>
                                        <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Tanggal</td>
                                        <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Keterangan</td>
                                        <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Jumlah</td>
                                        <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Aksi</td>
                                    </tr>
                                    {listTransaction?.map((item) => (
                                        <>
                                            <tr>
                                                <td className='category-wrapper' style={{fontWeight: 600, fontSize: 10}}>
                                                    <img src={`https://be-money-management.herokuapp.com${item.category.img}`} alt="" />
                                                    {item.category.name}
                                                </td>
                                                <td className="bg-white" style={{fontWeight: 600, color: "#1B212D", fontSize: 10}}>{item.date}</td>
                                                <td className="bg-white" style={{fontWeight: 600, color: "#1B212D", fontSize: 10}}>{item.note}</td>
                                                <td className="bg-white" style={{fontWeight: 600, color: (item.type === "pengeluaran") ? "#FF4343" : (item.type === "pemasukan") ? "#3CCC4B" : "", fontSize: 10}}>
                                                    {(item.type === "pengeluaran") ? `- Rp ${item.amount}` : (item.type === "pemasukan") ? `+ Rp ${item.amount}` : item.amount}
                                                </td>
                                                <td className="bg-white btn-wrapper" style={{fontWeight: 600, color: "#000000", fontSize: 10}}>
                                                    <div className='lihat trans-btn'>Lihat</div>
                                                    <div className='hapus trans-btn' onClick={() => handleDeleteTransaction(item.id)}>Hapus</div>
                                                </td>
                                            </tr>
                                        </>
                                    ))}
                                </table>
                                )}
                            </>}
                        </div>
                    </div>
                </div>
                {/* <div className='col-1'></div> */}
            </div>
        </div>
        <ModalTransaction 
            lgShow={lgShow} 
            setLgShow={setLgShow} 
            userToken={userToken} 
            isSubmit={isSubmit} 
            setSubmit={setSubmit}
        />
    </>
  )
}
