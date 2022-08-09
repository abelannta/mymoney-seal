import { React, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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

    const [values, setValues] = useState({

        email: "",
        password: "",
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Namaku Namamu",
            errorMessage:"",
            label: "Nama Lengkap",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "example@gmail.com",
            errorMessage:"Email tidak valid!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "**********",
            errorMessage:"Panjangnya minimal harus 8 karakter!",
            label: "Kata Sandi",
            required: true,
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <Container className="RegisterPage" fluid="true">
            <Form onSubmit={handleSubmit}>
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

                <Button>Daftar</Button>

                
            </Form>

        </Container>

    )
}

export default Register;