import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios, {isCancel, AxiosError} from 'axios'
// import { useNavigate } from "react-router-dom";
// import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

// let navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    email,
    password,
  };
  console.log(data);

  fetch("http://localhost8080/api/users/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",      
    },
  })
  .then((response) => response.json())
  .then((json) => {
    console.log("response: ", json.success);
  })
}

  // const handleSubmit = async () => {
  //   try {
  //     //tries to make POST request to backend with username/password and rememberMe status.
  //     const response = await axios.post(
  //       "http://localhost:8000/api/auth/username",
  //       {
  //         email: email,
  //         password: password,
  //       }
  //     );

  //     if (response.data.success) {
  //       console.log(`Welcome ${email}`, response.data.data);

  //       //this should navigate user on login success to dashboard or if changed whatever target route endpoint entered.
  //       navigate("/"); //update this to profile
  //     } else {
  //       setErrorMessage(response.data.data);
  //     }
  //   } catch (error) {
  //     console.error("Error: ", error);
  //     setErrorMessage("Wrong username or password.");
  //   }
  // };

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
