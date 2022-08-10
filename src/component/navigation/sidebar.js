import React from 'react';
import "./navigation.css";
import {Link} from 'react-router-dom';

export default function Sidebar({route}) {
  return (
    <>
        <div className='sidebar-container'>
            <div className='wrapper'>
                <div className='logo-icon'>
                    <img src='mymoney.png' alt='logo-icon' />
                </div>
                <div className='menu-container'>
                    <div className='list-menu'>
                        <Link style={{ textDecoration: 'none' }} to="/dashboard">
                        <div className={'menu-box ' + ((route === "dashboard") && "active")}>
                            <div className='menu-icon'>
                                <i className="fas fa-house"></i>
                            </div>
                            <div className='menu-title'>Dashboard</div>
                        </div>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/transaksi">
                        <div className={'menu-box ' + ((route === "transaksi") && "active")}>
                            <div className='menu-icon'>
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className='menu-title'>Transaksi</div>
                        </div>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/dompet">
                        <div className={'menu-box ' + ((route === "dompet") && "active")}>
                            <div className='menu-icon'>
                                <i className="fas fa-wallet"></i>
                            </div>
                            <div className='menu-title'>Dompet</div>
                        </div>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/pengaturan">
                        <div className={'menu-box ' + ((route === "pengaturan") && "active")}>
                            <div className='menu-icon'>
                                <i className="fas fa-gear"></i>
                            </div>
                            <div className='menu-title'>Pengaturan</div>
                        </div>
                        </Link>
                    </div>
                    <div className='support-menu'>
                        <div className={'menu-box ' + ((route === "help") && "active")}>
                            <div className='menu-icon'>
                                <i className="fas fa-message"></i>
                            </div>
                            <div className='menu-title'>Help</div>
                        </div>
                        <div className={'menu-box ' + ((route === "logout") && "active")}>
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
