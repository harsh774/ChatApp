import React from 'react'
import "./style.css"

const Login = () => {
  return (
    <>
    <div className="form-container">
        <div className="wrapper">
            <span className="logo">CHAT APP</span><br />
            <span className="title">Login</span>
            <form className='register-form'>
                <input className='username' type="email" placeholder="Email" />
                <input className='pass' type="password" placeholder='Password' />
                <button className='signin'>Sign In</button>
            </form>
            <p className='textreg'>Don't have an account? Register</p>
        </div>
    </div>
    </>
  )
}
export default Login;
