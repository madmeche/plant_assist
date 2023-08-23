import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import Profile from "./component/pages/Profile"

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  return (
    <>
    {/* {
      currentForm === 'login' ? <Login /> : <Register />
    }
     */}
    <Navbar />
    <Footer/>
      <Routes>
        
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path ='/' element = {<Home/>} />
        <Route path ='/' element = {<Profile/>} />
      
      </Routes>
      
    </>
  );
}

export default App;
