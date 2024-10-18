import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import './style.css';  // Optional for custom styling

const Registration = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100 justify-content-center">
                    <div className="registration-container p-4 shadow rounded">
                        <h2 className="register text-center mb-4">Register</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" required />
                            </Form.Group>

                            <div className='d-flex justify content-between mt-4'>
                                <Link to = "/dashboard" className='w-50'> 
                                    <Button variant="success" type="submmit" className="loginbtn w-100 me-">
                                        Confirm
                                    </Button>
                                </Link>
        
                                <Link to = "/" className=' w-50'>  
                                    <Button variant="cancel" type="button" className="cancelbtn w-100">
                                        Cancel
                                    </Button>
                                
                                </Link>

                            </div>

                        </Form>
                    </div>
            </Row>
        </Container>
    );
};

export default Registration;
