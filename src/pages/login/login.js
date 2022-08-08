import React from "react";
import { Container, Form } from "react-bootstrap";
import "../login/login.css"
import FormInput from "../../component/login/formInput"
import LOGOMYMONEY from "../../images/login/myMoneyLogo.png"

function Login() {
    return (
        <Container className="LoginPage">
            <form>
                <img src={LOGOMYMONEY} className="brand-image" alt="Logo MyMoney" />
                <h1>Welcome back</h1>
                <p>Welcome back! Please enter your details</p>
                <FormInput name="email" placeholder="Masukkan Email Anda" />
                <FormInput name="password" placeholder="********" />


                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Remember for 30 days?`}
                        />
                        <p>Forgot your password?</p>
                    </div>
                ))}

                <button>Sign in</button>

                <p>Dont have an account? Sign up for free</p>
            </form>

        </Container>

    )
}

export default Login;