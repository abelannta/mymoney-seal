import "./profile.css";
import {DatePicker} from "rsuite";
import React from "react";

const ProfileCard = () => {

    const handleProfileSubmit = (e) => {
        alert('Fitur belum tersedia');
        e.preventDefault();
    }

    return (
        <>
            <div className="card p-2 card-shadow"
                 style={{width: "100%", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body">
                    <h5 className="card-title fw-bold m-0 mb-4" style={{fontSize: 18}}>Profil Lengkap</h5>
                    <div className="row align-items-center">
                        <div className="col-2 mb-4">
                            <img src="/profile-img.png" alt=""/>
                        </div>
                        <div className="col-9">
                            <button type="submit" className="btn btn-default px-4 mb-3"
                                    style={{backgroundColor: "#3F8DFD", height: 44, color: "white", borderRadius: 4}}>
                                Upload Foto
                            </button>
                            <p className="card-title mb-2" style={{fontSize: 12, color: "#929EAE"}}>*Ukuran gambar
                                minimal harus 150px, dan kurang dari 500kb. File yang diizinkan .png dan .jpg</p>
                        </div>
                    </div>
                    <h5 className="card-title fw-bold m-0 mb-4" style={{fontSize: 18}}>Informasi Pribadi</h5>
                    <form className="p-0 mt-1" style={{backgroundColor: "#FAFAFA"}} onSubmit={handleProfileSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Nama Lengkap
                                    </h5>
                                    <input type="text" className="form-control profile-input"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Email
                                    </h5>
                                    <input type="text" className="form-control profile-input"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Tanggal Lahir
                                    </h5>
                                    <DatePicker appearance="subtle" className="form-control profile-input"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        No Telepon
                                    </h5>
                                    <input type="text" className="form-control profile-input"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Kata Sandi
                                    </h5>
                                    <input type="password" className="form-control profile-input"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Konfirmasi Kata Sandi
                                    </h5>
                                    <input type="password" className="form-control profile-input"/>
                                </div>
                            </div>
                            <div className="col-6"/>
                            <div className="col-6">
                                <div className="d-grid gap-2 mt-2">
                                    <button type="submit" className="btn btn-default"
                                            style={{backgroundColor: "#3F8DFD", height: 41, color: "white", borderRadius: 4}}>
                                        Simpan Profil
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileCard