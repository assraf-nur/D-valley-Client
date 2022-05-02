import React from "react";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const navigateRegister = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://tranquil-shore-78244.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <Form
      onSubmit={handleLogin}
      className="container mx-auto rounded-2xl shadow-2xl border mt-5 w-50 mb-5 p-4"
    >
      <h2 className="text-center font-bold">Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>
      <Button className="px-5" variant="primary" type="submit">
        Login
      </Button>
      <p className="mt-3">
        New to site ?
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-danger fw-bold text-decoration-none"
        >
          Register Now
        </Link>
      </p>
      <p>
        Forget Password
        <button onClick={resetPassword} className="text-danger fw-bold btn">
          Reset Your password
        </button>
      </p>
      <br />
      {error && <p>User and password not found</p>}
      {loading && <p>Loading.....</p>}
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </Form>
  );
};

export default Login;
