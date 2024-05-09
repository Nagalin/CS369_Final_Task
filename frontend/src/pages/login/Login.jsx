import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import useLogin from './useLogin';

const containerStyle = {
  height: '540px',
  width: '400px',
  backgroundColor: '#ffffff',
  backgroundOpacity: '0.13',
  borderRadius: '10px',
  backdropFilter: 'blur(10px)',
  border: '2px solid #ffffff',
  borderOpacity: '0.1',
  boxShadow: '0 0 40px #080710',
  boxShadowOpacity: '0.6',
  padding: '50px 35px',
};

const inputStyle = {
  display: 'block',
  height: '50px',
  width: '100%',
  backgroundColor: '#ffffff',
  backgroundOpacity: '0.07',
  borderRadius: '3px',
  padding: '0 10px',
  marginTop: '8px',
  marginBottom: '8px',
};

const buttonStyle = {
  marginTop: '80px',
  width: '100%',
  padding: '15px 0',
  fontSize: '18px',
  fontWeight: '600',
  borderRadius: '5px',
};

const errorStyle = {
  width: '325px',
  marginTop: '10px',
}

const Login = () => {
  const { username, password, err, handleLogin } = useLogin();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg">
    <Form 
        onSubmit={handleLogin}
        style={containerStyle}>
        <div className="d-flex align-items-center mb-5">
            <img 
                width={64}
                height={64}
                src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png"
                alt="shopping-cart--v1"
                className="me-3"
            />
            <Form.Label className='h1 mb-0'>Login</Form.Label>
        </div>
        <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
                ref={username}
                style={inputStyle}
                type="text"
                placeholder="Enter username"
                required
            />
        </Form.Group>
        <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                style={inputStyle}
                ref={password}
                type="password"
                placeholder="Enter password"
                required
            />
        </Form.Group>
        { err && 
                <div className="position-absolute start-50 translate-middle-x text-center alert alert-danger"
                style={errorStyle}>
                    {err}
                </div>
                }
        <Form.Group>
            <Col className="d-flex justify-content-center mt-3">
                <Button 
                    variant="dark" 
                    type="submit"
                    style={buttonStyle}>
                    Login
                </Button>
            </Col>
        </Form.Group>

    </Form>
</div>
  )
}

export default Login
