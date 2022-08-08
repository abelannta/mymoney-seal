import React from 'react';
import "./navigation.css";

export default function Sidebar() {
  return (
    <>
        <div className='sidebar-container'>
            <div className='wrapper'>
                <div className='logo-icon'>
                    <img src='mymoney.png' />
                </div>
                <div className='menu-container'>
                    <div className='list-menu'>
                        <div className='menu-box'>
                            <div className='menu-icon'>
                                <i className="fas fa-house"></i>
                            </div>
                            <div className='menu-title'>Dashboard</div>
                        </div>
                        <div className='menu-box'>
                            <div className='menu-icon'>
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className='menu-title'>Transaksi</div>
                        </div>
                        <div className='menu-box'>
                            <div className='menu-icon'>
                                <i className="fas fa-wallet"></i>
                            </div>
                            <div className='menu-title'>Dompet</div>
                        </div>
                        <div className='menu-box'>
                            <div className='menu-icon'>
                                <i className="fas fa-gear"></i>
                            </div>
                            <div className='menu-title'>Pengaturan</div>
                        </div>
                    </div>
                    <div className='support-menu'>
                        <div className='menu-box'>
                            <div className='menu-icon'>
                                <i className="fas fa-message"></i>
                            </div>
                            <div className='menu-title'>Help</div>
                        </div>
                        <div className='menu-box'>
                            <div className='menu-icon'>
                                <i className="fas fa-right-from-bracket"></i>
                            </div>
                            <div className='menu-title'>Log Out</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
