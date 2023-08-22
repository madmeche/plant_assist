import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

function Footer() {
  return (
    <div className="footer-container">
        {/* <p className="footer-container">Learn More</p> */}
      
      <div class="footer-links">
          <div className="footer-link-items">
            <Link to="/aboutus">
                <Routes>
                <Route path ='/aboutus' element = {<AboutUs/>} />
                </Routes>
              About Us
            </Link>
          </div>

          <div class="footer-link-items">
            <Link to="/">Contact Us</Link>
          </div>
       

          <div class="footer-link-items">
            <Link to="/">Inspiration</Link>
          </div>

          <div class="footer-link-items">
            <Link to="/">Logout</Link>
          </div>
        
      </div>

      {/* <section class="social-media">  
          <small class="website-rights">Plant Assist © 2023</small>
      </section> */}
    </div>
  );
}

export default Footer;
