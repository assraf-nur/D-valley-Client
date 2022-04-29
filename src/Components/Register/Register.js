import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Form className="w-50 p-4 mx-auto border rounded-2xl shadow mt-5">
        <h2 className="text-center font-bold">Registration</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>

      <Button className="mx-auto px-5" variant="primary" type="submit">
        Register
      </Button>

      <p className="mt-3">Already have an account ? <Link to='/login' className="text-danger text-decoration-none">Login</Link> </p>

    </Form>
  );
};

export default Register;
