import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="auth-form-container">
          <div className="header"><h2>Register</h2></div>
          <div className="pass">
            <label htmlFor="username">username</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="username"
              placeholder="username"
              id="username"
              name="username"
            />
            </div>
            <div className="pass">
              <label htmlFor="email">email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@email.com"
                id="email"
                name="email"
              />
            </div>
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
                <button><b>Sign Up</b></button>
              </div>
            </div>
          </div>

          <div className="auth-form-link">
            <Link to="/login">
              <button>Already have an account?<b> Log In</b></button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
