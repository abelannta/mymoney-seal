import React from 'react'

export default function Navbar({route, userData}) {
  return (
    <>
        <div className='navbar-container'>
            <div className='wrapper-navbar'>
                <div className='navbar-title text-capitalize'>
                    {route}
                </div>
                <div className='menu-account'>
                    <div className='notification'>
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className='menu-profile'>
                        <div className='profile-img'>
                            <img src='avatar.png' alt='img' />
                        </div>
                        <div className='profile-name'>{userData?.name}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
