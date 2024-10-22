import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import './style.css';  // Optional for custom styling

const Registration = () => {

    const navigate = useNavigate();  // Hook for programmatic navigation
    const [username, setUsername] = useState(""); // hold the username input
    const [password, setPassword] = useState(""); // hold the password input
    const [errorMessage, setErrorMessage] = useState(""); // hold the error message

    const handleConfirm = (e) => {
        e.preventDefault(); // Prevent the form from submitting
        if (username === "" || password === "") {
            setErrorMessage("Username and password cannot be empty."); // Set error if fields are empty
        } else {
            // Navigate to login page if valid
            navigate("/");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100 justify-content-center">
                <div className="registration-container p-4 shadow rounded">
                    <h2 className="register text-center mb-4">Register</h2>
                    <Form onSubmit={handleConfirm}> {/* Use onSubmit for form */}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username" 
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // get input value
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // get input value
                            />
                        </Form.Group>

                        {/* Display error message */}
                        {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}

                        <div className='d-flex justify-content-between mt-4'>
                            <Button 
                                variant="success" 
                                type="submit" 
                                className="loginbtn w-50 me-2">
                                Confirm
                            </Button>

                            <Link to="/" className='w-50'>
                                <Button 
                                    variant="cancel" 
                                    type="button" 
                                    className="cancelbtn w-100">
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
