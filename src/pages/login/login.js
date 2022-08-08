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
        <Container className="LoginPage" fluid="true">
            <Form onSubmit={handleSubmit}>
                <img src={LOGOMYMONEY} className="brand-image" alt="Logo MyMoney" />
                <div className="title">
                <h1>Welcome back</h1>
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

                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`checkbox`}
                            label={`Remember for 30 Days`}
                        />
                        <Link style={styleLink} to="/" className="forgotPass">Forgot password?</Link>
                    </div>
                ))}



                <Button>Sign in</Button>
                
                <div className="footer">
                <p>Dont have an account? <Link style={styleLink} to="/">Sign up for free</Link></p>
                </div>
            </Form>

        </Container>

    )
}

export default Login;