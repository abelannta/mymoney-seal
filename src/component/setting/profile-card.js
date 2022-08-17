import "./profile.css";
import {DatePicker} from "rsuite";
import React, {useEffect, useState} from "react";
import axios from "axios";

const ProfileCard = (props) => {
    const [dataProfile, setDataProfile] = useState([])
    const [sizeError, setSizeError] = useState(false);
    let formdata = new FormData()

    const getProfile = async () => {
        try {
            await axios({
                method: 'GET',
                url: 'https://be-money-management.herokuapp.com/api/profile',
                headers: {Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).token}`},
            }).then((res) => {
                setDataProfile(res.data.data)
                console.log(res.data.data)
            });
        } catch (error) {

        }
    };

    const changeProfile = async (formData) => {
        try {
            await axios({
                method: 'PUT',
                url: 'https://be-money-management.herokuapp.com/api/profile',
                headers: {Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token')).token}`},
                data: formData,
            }).then((res) => {
                console.log("berhasil")
            });
        } catch (error) {

        }
    };

    useEffect(() => {
        getProfile()
    }, [])

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        formdata.append(name, typeOfValue)
        setDataProfile({...dataProfile, [name]: typeOfValue})
    }

    const handleChangeDate = (date) => {
        const dateString = new Date(date).toLocaleDateString("en-CA")
        let name = "tglahir"
        formdata.append('tglahir', dateString)

        setDataProfile({...dataProfile, [name]: dateString})
    }

    const onImageChange = (event) => {
        let size = event.target.files[0].size;

        if (size > 524288) {
            setSizeError(true)
        } else if (event.target.files && event.target.files[0]) {
            setSizeError(false)
            let img = event.target.files[0];
            formdata.append('photo', img)

            setDataProfile({...dataProfile, photo: URL.createObjectURL(img)})
        }
    }

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
        changeProfile(formdata)
    }

    return (
        <>
            <div className="card p-2 card-shadow"
                 style={{width: "100%", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body">
                    <h5 className="card-title fw-bold m-0 mb-4" style={{fontSize: 18}}>Profil Lengkap</h5>
                    <div className="row align-items-center">
                        <div className="col-2 mb-4">
                            <img src={dataProfile.photo === null ? "/profile-img.png" : dataProfile.photo}
                                 alt="profile-picture"
                                 style={{
                                     width: 144,
                                     height: 144,
                                     objectFit: "cover",
                                     borderRadius: 99999,
                                     boxShadow: "0 0 0 1px #CED4DA"
                                 }}/>
                        </div>
                        <div className="col-9">
                            <input type="file" name="myImage" onChange={onImageChange} title=""/>
                            {/*<button type="submit" className="btn btn-default px-4 mb-3"*/}
                            {/*        style={{backgroundColor: "#3F8DFD", height: 44, color: "white", borderRadius: 4}}>*/}
                            {/*    Upload Foto*/}
                            {/*</button>*/}
                            <p className="card-title mb-2 mx-3" style={{fontSize: 12, color: "#929EAE"}}>*Ukuran gambar
                                minimal harus 150px, dan kurang dari 500kb. File yang diizinkan .png dan .jpg</p>
                            {
                                sizeError === true &&
                                <p className="card-title mb-2 mx-3" style={{fontSize: 12, color: "#EA3A3A"}}>*Ukuran
                                    foto melebihi 500 KB!</p>
                            }
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
                                    <input onChange={handleChange} name="name" type="text"
                                           className="form-control profile-input" value={dataProfile.name}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Email
                                    </h5>
                                    <input onChange={handleChange} type="text" className="form-control profile-input"
                                           value={dataProfile.email}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Tanggal Lahir
                                    </h5>
                                    <DatePicker onChange={handleChangeDate} placeholder="Tanggal Lahir"
                                                dateFormat="yyyy-mm-dd"
                                                appearance="subtle" className="form-control profile-input" block/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        No Telepon
                                    </h5>
                                    <input onChange={handleChange} name="notelp" type="text"
                                           className="form-control profile-input" value={dataProfile.notelp}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Kata Sandi
                                    </h5>
                                    <input onChange={handleChange} name="password" type="password"
                                           className="form-control profile-input" value={dataProfile.password}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-4">
                                    <h5 className="card-title m-0 mb-2" style={{fontSize: 14, color: "#1B212D"}}>
                                        Konfirmasi Kata Sandi
                                    </h5>
                                    <input name="password2" type="password" className="form-control profile-input"/>
                                </div>
                            </div>
                            <div className="col-6"/>
                            <div className="col-6">
                                <div className="d-grid gap-2 mt-2">
                                    <button type="submit" className="btn btn-default"
                                            style={{
                                                backgroundColor: "#3F8DFD",
                                                height: 41,
                                                color: "white",
                                                borderRadius: 4
                                            }}>
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