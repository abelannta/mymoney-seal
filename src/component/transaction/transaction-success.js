import React from 'react'

export default function TransactionSuccess() {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center'>
            <div className='wrapper d-flex flex-column justify-content-center'>
                <img className='img-trans-success' src='trans-success.png' alt='zero-transcation' />
                <div className='trans-subtitle'>Saldo berhasil ditambahkan</div>
                <div className='trans-params'>Pantau terus pengeluaran yang kamu lakukan dalam aplikasi</div>
            </div>
        </div>
    </>
  )
}
