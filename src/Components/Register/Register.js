import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateRegister = () =>{
        navigate('/login')
    }

    const handleRegister = async (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName});
        alert('Profile Updated')
    }
    if(user){
        navigate('/home')
    }

  return (
    <Form onSubmit={handleRegister} className="w-50 p-4 mx-auto border rounded-2xl shadow mt-5">
        <h2 className="text-center font-bold">Registration</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>

      <Button className="mx-auto px-5" variant="primary" type="submit">
        Register
      </Button>

      <p className="mt-3">Already have an account ? <Link to='/login' onClick={navigateRegister} className="text-primary fw-bold text-decoration-none">Login</Link> </p>
        {
            error && <p className="text-danger">Please give valid mail and password</p>
        }
        {
            loading && <p className="text-primary">Loading......</p>
        }
        {
          updating && <p className="text-primary">Updating Profile..</p>
        }
    </Form>
  );
};

export default Register;
