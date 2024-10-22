import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './style.css';  // Optional for custom styling

const Login = () => {
    const navigate = useNavigate();  // Hook for programmatic navigation
    const email = "EmailKO";
    const pass = "pass";

    const [username, setUsername] = useState(""); // hold the username input
    const [password, setPassword] = useState(""); // hold the pass input
    const [errorMessage, setErrorMessage] = useState(""); // State to hold any error message

    const verify = (event) => {
        event.preventDefault(); // Prevent form submission
        if (username === email && password === pass) {
            // If credentials are correct, navigate to dashboard
            navigate("/dashboard");  // Change this to the desired route
        } else {
            // If credentials are incorrect, set an error message
            setErrorMessage("Invalid username or password.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                    <div className="login-container p-4 shadow rounded">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form onSubmit={verify}> {/* Use onSubmit instead of onClick */}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter username" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} // get input value
                                    required 
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // get input value
                                    required 
                                />
                            </Form.Group>

                            <Button variant="success" type="submit" className="loginbtn w-100 mt-4">
                                Login
                            </Button>
                        </Form>

                        {/* Display error message if credentials are invalid */}
                        {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}

                        <div className="text-center mt-3">
                            <p>Don't have an account? 
                                <Link to="/registration">
                                    <button className="signupbtn">Sign up</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
