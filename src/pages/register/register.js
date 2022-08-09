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
            label: "Full Name"
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "example@gmail.com",
            label: "Email"
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "**********",
            label: "Password"
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
                        <FiArrowLeft /> Sign In
                    </Link>
                </div>
                <img src={LOGOMYMONEY} className="brand-image" alt="Logo MyMoney" />
                <div className="title">
                    <h1>Create New Account</h1>
                    <p>Welcome back! Please enter your details</p>
                </div>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <Button>Create Account</Button>

                <div className="footer">
                    <p>Dont have an account? <Link style={styleLink} to="/register">Sign up for free</Link></p>
                </div>
            </Form>

        </Container>

    )
}

export default Register;