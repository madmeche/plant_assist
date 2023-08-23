import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      {/* {currentForm === "login" ? <Login /> : <Register />} */}

      <div className="container">
        
        <form onSubmit={handleSubmit}>
          <div className="auth-form-container">
            <div className="header"><h2>Login</h2></div>
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@email.com"
              id="email"
              name="email"
            />
            <div className="pass">
              <label htmlFor="password">password</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
              />
              <div className="btn-login">
                <button><b>Login</b></button>
              </div>
            </div>
          </div>

          <div className="auth-form-link">
            <Link to="/register">
              <button><b>Sign Up for Free!</b></button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
