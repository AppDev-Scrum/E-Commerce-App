import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './style.css';  // Optional for custom styling

const Login = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                    <div className="login-container p-4 shadow rounded">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" required />
                            </Form.Group>

                            <Button variant="success" type="submit" className="loginbtn w-100 mt-4">
                                Login
                            </Button>
                        </Form>

                        <div className="text-center mt-3">
                            <p>Don't have an account? 
                                <Link to = "/registration">
                                    <button className = "signupbtn" >Sign up</button>
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
