import './ecommerce.css';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Authentication logic: check for valid credentials
    if (username === 'admin' && password === 'admin') {
      navigate('/view-products');
    } else if (username === 'admin' && password !== 'admin') {
      setErrorMessage('Incorrect password'); // Set error message for incorrect password
      // Hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else {
      setErrorMessage('Invalid credentials'); // Set generic error for incorrect username or password
      // Hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <Container className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          {/* Username Field */}
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMessage && <p className="text-danger error-message">{errorMessage}</p>} {/* Error message for invalid credentials */}
          </Form.Group>

          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
