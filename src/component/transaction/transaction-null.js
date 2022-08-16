import React from 'react'

export default function TransactionNull() {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='wrapper d-flex flex-column justify-content-center'>
                <img className='img-trans' src='trans-null.png' alt='zero-transcation' />
                <div className='trans-subtitle'>Belum ada transaksi yang ditambahkan</div>
                <div className='trans-params'>Kamu belum melakukan pencatatan transaksi menggunakan MyMoney</div>
            </div>
        </div>
    </>
  )
}
