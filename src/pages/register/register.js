import { React, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../register/register.css"
import FormInput from "../../component/login/formInput"
import LOGOMYMONEY from "../../images/login/myMoneyLogo.png"
import { FiArrowLeft } from "react-icons/fi";

function Register() {
    const styleLink = {
        textDecoration: 'none',
        color: '#000000',
        fontWeight: 'bold'
    }

    const [alert, setAlert] = useState("")
    const [redirect, setRedirect] = useState(false)

    const [values, setValues] = useState({

        name: "",
        email: "",
        password: "",
    });

    const submitSignUp = () => {
        const data = values
        axios.post('https://be-money-management.herokuapp.com/api/register', data).then(result => {
            if (result) {
                if (result.data) {
                    setValues('')
                    setAlert(result.data.message)
                    setTimeout(() => {
                        setAlert('')
                    }, 3000)
                    setRedirect(true)
                }
            }
        })
    }

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Namaku Namamu",
            errorMessage: "Nama tidak boleh kosong",
            label: "Nama Lengkap",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "example@gmail.com",
            errorMessage: "Email tidak valid!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "**********",
            errorMessage: "Panjangnya minimal harus 8 karakter!",
            label: "Kata Sandi",
            required: true,
        }
    ];

    const onRegister = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <Container className="RegisterPage" fluid="true">
            <Form onSubmit={onRegister}>
                {
                    alert && (
                        <div className="alert alert-primary">
                            <p>User berhasil bisa didaftarkan!</p>
                        </div>
                    )
                }
                {/* {
                    redirect && (
                        <Navigate to="/" />
                    )
                } */}
                <div className="back-button">
                    <Link style={styleLink} to="/">
                        <FiArrowLeft /> Masuk
                    </Link>
                </div>
                <img src={LOGOMYMONEY} className="brand-image" alt="Logo MyMoney" />
                <div className="title">
                    <h1>Buat Akun Baru</h1>
                    <p>Selamat datang! Silahkan masukkan detail Anda</p>
                </div>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <Button onClick={submitSignUp}>Daftar</Button>


            </Form>

        </Container>

    )
}

export default Register;