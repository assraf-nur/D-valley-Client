import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Form className="container mx-auto rounded-2xl shadow-2xl border mt-5 w-50 mb-5 p-4">
        <h2 className="text-center font-bold">Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>
      <Button className="px-5" variant="primary" type="submit">
        Login
      </Button>
      <p className="mt-3">New to site ? <Link to='/register' className="text-danger text-decoration-none">Register Now</Link> </p>
    </Form>
  );
};

export default Login;
