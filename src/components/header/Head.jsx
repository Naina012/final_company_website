import React from "react";
import "./header.css"; // Assuming you have a CSS file for styling
import logo from "../../assets/logo.webp"

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          

          <div className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
            <h1>Skill2Skills</h1>
            <span>Making Skill India Digital</span>
          </div>

          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100064023076120" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f icon"></i>
              
            </a>
            <a href="https://www.instagram.com/skill2skillsofficial/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/skill2skills-llp/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};



export default Head;
