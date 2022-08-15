import React, {useEffect, useState} from 'react';
import ModalTransaction from '../../component/transaction/modal';
import "./transaction.css";
import axios from 'axios';

export default function Transaction({userToken}) {
    const [lgShow, setLgShow] = useState(false);

    const config = {
        headers: { Authorization: `Bearer ${userToken.token}` }
    };
    const bodyParameters = {
        key: "value"
    };

    const getTransaction = () => {
        axios.get(
            'https://be-money-management.herokuapp.com/api/transcations', config
            ).then(result => {
                if(result) {
                    console.log(result);
                }
        })
    };

    useEffect(() => {
        getTransaction();
    }, [])

    const data = [
        {
            id: '1',
            category: "Makanan & Minuman",
            date: '07 Aug 2022',
            desc: 'Beli makanan warteg',
            total: '-Rp 100.000',
        },
        {
            id: '2',
            category: "Kesehatan",
            date: '07 Aug 2022',
            desc: 'Beli obat sakit kepala',
            total: '-Rp 250.000',
        },
        {
            id: '3',
            category: "Keluarga",
            date: '07 Aug 2022',
            desc: 'Langganan Netflix',
            total: '-Rp 500.000',
        },
        {
            id: '4',
            category: "Makanan & Minuman",
            date: '07 Aug 2022',
            desc: 'Beli makanan warteg',
            total: '-Rp 100.000',
        },
        {
            id: '5',
            category: "Kesehatan",
            date: '07 Aug 2022',
            desc: 'Beli obat sakit kepala',
            total: '-Rp 250.000',
        },
        {
            id: '6',
            category: "Keluarga",
            date: '07 Aug 2022',
            desc: 'Langganan Netflix',
            total: '-Rp 500.000',
        },
        {
            id: '7',
            category: "Makanan & Minuman",
            date: '07 Aug 2022',
            desc: 'Beli makanan warteg',
            total: '-Rp 100.000',
        },
        {
            id: '8',
            category: "Kesehatan",
            date: '07 Aug 2022',
            desc: 'Beli obat sakit kepala',
            total: '-Rp 250.000',
        },
        {
            id: '9',
            category: "Keluarga",
            date: '07 Aug 2022',
            desc: 'Langganan Netflix',
            total: '-Rp 500.000',
        },
    ];

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
                            <table className="table">
                                <tr>
                                    <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Kategori</td>
                                    <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Tanggal</td>
                                    <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Keterangan</td>
                                    <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Jumlah</td>
                                    <td className="bg-white fw-bold" style={{color: "#929EAE", fontSize: 8}}>Aksi</td>
                                </tr>
                                {data?.map((item) => (
                                    <>
                                        <tr>
                                            <td className='category-wrapper' style={{fontWeight: 600, fontSize: 10}}>
                                                <div className="logo-wrapper">
                                                    <i className="fas fa-bell"></i>
                                                </div>
                                                {item.category}
                                            </td>
                                            <td className="bg-white" style={{fontWeight: 600, color: "#1B212D", fontSize: 10}}>{item.date}</td>
                                            <td className="bg-white" style={{fontWeight: 600, color: "#1B212D", fontSize: 10}}>{item.desc}</td>
                                            <td className="bg-white" style={{fontWeight: 600, color: "#FF4343", fontSize: 10}}>{item.total}</td>
                                            <td className="bg-white btn-wrapper" style={{fontWeight: 600, color: "#000000", fontSize: 10}}>
                                                <div className='lihat trans-btn'>Lihat</div>
                                                <div className='hapus trans-btn'>Hapus</div>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
                {/* <div className='col-1'></div> */}
            </div>
        </div>
        <ModalTransaction lgShow={lgShow} setLgShow={setLgShow}/>
    </>
  )
}
