import { React, useState } from "react";
import { Container, Form, Button} from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../login/login.css"
import FormInput from "../../component/login/formInput"
import LOGOMYMONEY from "../../images/login/myMoneyLogo.png"

function Login() {
    const styleLink1 = {
        textDecoration: 'none',
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: '80px'
    }
    const styleLink = {
        textDecoration: 'none',
        color: '#000000',
        fontWeight: 'bold',
    }

    const [redirect, setRedirect] = useState(false)
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    // State Data User
  const [user, setUser] = useState(localStorage.getItem('user') || []);

    const submitLogin = () => {
        const data = values
        axios.post('https://be-money-management.herokuapp.com/api/login', data).then(result => {
            if(result){
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('user', JSON.stringify(result.data.user));
                setRedirect(true)
            }
        })
    }

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
            {
                redirect && (
                    <Navigate to="/dashboard"/>
                )
            }
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

                        <div className="forgotPass"><Link style={styleLink1} to="/" >Lupa Kata Sandi?</Link></div>
                    </div>
                ))}



                <Button onClick={submitLogin}>Masuk</Button>
                
                <div className="footer">

                <p>Belum punya akun?<Link style={styleLink} to="/register">Daftar sekarang</Link></p>

                </div>
            </Form>

        </Container>

    )
}

export default Login;