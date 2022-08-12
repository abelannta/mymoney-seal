import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./transaction.css";
import { DatePicker } from 'rsuite';

export default function ModalTransaction({lgShow, setLgShow}) {
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
            <form className='p-0 form-modal'>
                <div className='row'>
                    <div className='col'>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Jenis Transaksi</label>
                            <select className="form-control form-trans">
                                <option>Pemasukan</option>
                                <option>Pengeluaran</option>
                            </select>
                        </div>
                    </div>
                    <div className='col'>
                        <label for="exampleInputEmail1">Tanggal</label>
                        {/* <input className="form-control form-trans" type="text" placeholder="dd/mm/yyyy"></input> */}
                        <DatePicker />
                    </div>
                    <div className='col'>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Kategori</label>
                            <select className="form-control form-trans">
                                <option>Makanan & Minuman</option>
                                <option>Kesehatan</option>
                                <option>Keluarga</option>
                                <option>Pendidikan</option>
                                <option>Hiburan</option>
                                <option>Kado</option>
                                <option>Gaji</option>
                            </select>
                        </div>
                    </div>
                    <div className='col'>
                        <label for="exampleInputEmail1">Keterangan</label>
                        <input className="form-control form-trans" type="text" placeholder="Tulis Keterangan"></input>
                    </div>
                    <div className='col'>
                        <label for="exampleInputEmail1">Jumlah</label>
                        <input className="form-control form-trans" type="text" placeholder="Jumlah Transaksi"></input>
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer style={{border: 0, background: "#F4F4F4"}}>
            <button type='button' className='add-btn' onClick={() => setLgShow(false)}>
                Simpan Perubahan
            </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
