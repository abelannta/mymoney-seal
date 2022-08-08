import { React, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
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
            type: "text",
            placeholder: "enter your email",
            label: "email"
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "********",
            label: "password"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <Container className="LoginPage">
            <Form onSubmit={handleSubmit}>
                <img src={LOGOMYMONEY} className="brand-image" alt="Logo MyMoney" />
                <h1>Welcome back</h1>
                <p>Welcome back! Please enter your details</p>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

<Row className="optionLogin">
    <Col>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Remember for 30 days?`}
                        />
                        
                    </div>
                ))}
    </Col>
    <Col className="forgotPass">
       <Link style={styleLink} to="/">Forgot password?</Link>
    </Col>
</Row>

                <Button>Sign in</Button>

                <p>Dont have an account? <Link style={styleLink} to="/">Sign up for free</Link></p>
            </Form>

        </Container>

    )
}

export default Login;