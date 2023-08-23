import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios, {isCancel, AxiosError} from 'axios'
import { useNavigate } from "react-router-dom";
// import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // const rp = require('request-promise')

  // const register = {
  //   api: 'localhost:8080/api/auth/signup',
  //   json: true //automatically parses the JSON string in the response
  // };

  // rp(register)
  // .then(function (user) {
  //   console.log('user logged in', user.data);
  // })
  // .catch(function(err){
  //   console.log("Error:", err)
  //     throw err
  // });

  const handleSubmit = async function getUser() {
    try{
      const response = await axios.get("http://localhost:8000/api/users/login");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
    // e.preventDefault();
    // console.log(email);


  return (
    <>

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
                <Link to="/profile">
                <button><b>Login</b></button>
                </Link>
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
