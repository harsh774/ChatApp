import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import "./style.css";
import Add from "../images/Add.png";
import { async } from "@firebase/util";
import { useNavigate, Link } from "react-router-dom";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import logo from '../images/logo.png'

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-container">
        {/* <img src={logo} alt="" className="imlogo" /> */}
        <div className="wrapper">
          <span className="logo">CHAT APP</span>
          <br />
          <span className="title">Register</span>
          <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label className="file" htmlFor="file">
              <img className="avat" src={Add} alt="" />
              <span>Add your avatar</span>
            </label>
            <button className="signin">Sign Up</button>
            {loading && "Uploading and compressing the image please wait..."}
            {err && <span style={{ color: "red" }}>Something went wrong</span>}
          </form>
          <p className="textreg">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
