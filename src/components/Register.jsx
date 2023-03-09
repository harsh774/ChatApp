import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db} from "../firebase";
import React, {useState} from "react";
import { doc, setDoc } from "firebase/firestore";
import "./style.css";
import Add from "../images/Add.png";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";


import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// import logo from '../images/logo.png'

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0].value)
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = await uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/")
          });
        }
      );    
    } catch (err) {
      setErr(true);
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
            {err && <span style={{color: 'red'}}>Something went wrong</span>}
          </form>
          <p className="textreg">
            Already have an account?{" "}
            <span style={{ cursor: "pointer" }}>Login</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
