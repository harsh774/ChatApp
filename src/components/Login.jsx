import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/form.css";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="wrapper">
          <span className="logo">CHAT APP</span>
          <br />
          <span className="title">Login</span>
          <form className="register-form" onSubmit={handleSubmit}>
            <input className="username" type="email" placeholder="Email" />
            <input className="pass" type="password" placeholder="Password" />
            <button className="signin">Sign In</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p className="textreg">
            Don't have an account?<Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Login;
