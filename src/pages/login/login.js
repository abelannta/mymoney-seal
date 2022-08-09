import { React, useState } from "react";
import { Container, Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../login/login.css"
import FormInput from "../../component/login/formInput"
import LOGOMYMONEY from "../../images/login/myMoneyLogo.png"

function Login() {
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
            name: "email",
            type: "email",
            placeholder: "Masukkan Email Anda",
            errorMessage:"Email tidak valid!",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "********",
            errorMessage:"Kata Sandi Salah",
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
        <Container className="LoginPage" fluid="true">
            <Form onSubmit={handleSubmit}>
                <img src={LOGOMYMONEY} className="brand-image" alt="Logo MyMoney" />
                <div className="title">
                <h1>Selamat Datang!</h1>
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

                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`checkbox`}
                            label={`Ingatkan saya`}
                        />
                        <Link style={styleLink} to="/" className="forgotPass">Lupa Kata Sandi?</Link>
                    </div>
                ))}



                <Button>Masuk</Button>
                
                <div className="footer">

                <p>Belum punya akun?<Link style={styleLink} to="/">Daftar sekarang</Link></p>

                </div>
            </Form>

        </Container>

    )
}

export default Login;