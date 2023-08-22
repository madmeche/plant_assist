import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./component/pages/Home";
// import SignIn from "./component/pages/Login";

function App() {

  return (
    <>
    
    <Navbar />
    <Footer/>
      <Routes>
        
        {/* <Route path="/login" element={<SignIn />} /> */}
        <Route path ='/' element = {<Home/>} />
      
      </Routes>
      
    </>
  );
}

export default App;
