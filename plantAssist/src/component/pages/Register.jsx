import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="username"
            placeholder="username"
            id="username"
            name="username"
          />
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@email.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button>Sign Up</button>
        </form>

        <Link to="/login">
          <button>Already have an account? Log In</button>
        </Link>
      </div>
    </>
  );
};

export default Register;
