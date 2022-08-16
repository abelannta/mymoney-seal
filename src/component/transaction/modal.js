import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import "./transaction.css";
import { DatePicker } from 'rsuite';
import moment from "moment";
import axios from 'axios';
import TransactionSuccess from './transaction-success';

export default function ModalTransaction({lgShow, setLgShow, userToken, isSubmit, setSubmit}) {
    const [jenis, setJenis] = useState("pemasukan");
    const [tanggal, setTanggal] = useState("");
    const [kategori, setKategori] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [jumlah, setJumlah] = useState("");

    const [transSuccess, setTransSuccess] = useState(false);

    const [listCategories, setListCategories] = useState([]);
    const getCategories = (jenis) => {
        axios.get(`https://be-money-management.herokuapp.com/api/categories?type=${jenis}`)
        .then(res => {
            console.log(res.data);
            setListCategories(res.data.data);
        })
    }

    useEffect(() => {
        if (jenis === "pemasukan") {
            setKategori("1");
        };

        if (jenis === "pengeluaran") {
            setKategori("4");
        }
    }, [jenis]);

    const config = {
        headers: { Authorization: `Bearer ${userToken.token}` }
    };

    const data = {
        category: kategori,
        type: jenis,
        date: tanggal,
        note: keterangan,
        amount: jumlah,
    }

    const handleSubmitTransaction = () => {
        axios.post(
            'https://be-money-management.herokuapp.com/api/transcations/store', data, config
        ).then(result => {
            if(result) {
                console.log(result);
                setSubmit(!isSubmit);
                setTransSuccess(true);
                setTimeout(() => {
                    setLgShow(false);
                    setTransSuccess(false);
                }, 5000);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCategories(jenis);
    }, [jenis]);

  return (
    <>
    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{border: 0, background: "#F4F4F4"}}>
          <Modal.Title id="example-modal-sizes-title-lg" style={{fontWeight: 600, fontSize: 20}}>
            Transaksi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{border: 0, background: "#F4F4F4"}}>
            {transSuccess ? <TransactionSuccess /> : (
                <form className='p-0 form-modal'>
                    <div className='row'>
                        <div className='col'>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Jenis Transaksi</label>
                                <select className="form-control form-trans" value={jenis} onChange={(e) => setJenis(e.target.value)}>
                                    <option value="pemasukan">Pemasukan</option>
                                    <option value="pengeluaran">Pengeluaran</option>
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <label for="exampleInputEmail1">Tanggal</label>
                            {/* <input className="form-control form-trans" type="text" placeholder="dd/mm/yyyy"></input> */}
                            <DatePicker format="dd-MM-yyyy" onChange={(e) => setTanggal(moment(e).format("YYYY-MM-DD"))}/>
                        </div>
                        <div className='col'>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Kategori</label>
                                <select className="form-control form-trans" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                                    {listCategories?.map((categories, idx) => (
                                        <option value={categories.id}>{categories.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <label for="exampleInputEmail1">Keterangan</label>
                            <input className="form-control form-trans" type="text" placeholder="Tulis Keterangan" onChange={(e) => setKeterangan(e.target.value)}></input>
                        </div>
                        <div className='col'>
                            <label for="exampleInputEmail1">Jumlah</label>
                            <input className="form-control form-trans" type="number" placeholder="Jumlah Transaksi" onChange={(e) => setJumlah(e.target.value)}></input>
                        </div>
                    </div>
                </form>
            )}
        </Modal.Body>
        {!transSuccess && 
            <Modal.Footer style={{border: 0, background: "#F4F4F4"}}>
                <button type='button' className='add-btn' onClick={() => handleSubmitTransaction()}>
                    Simpan Perubahan
                </button>
            </Modal.Footer>
        }
      </Modal>
    </>
  )
}
