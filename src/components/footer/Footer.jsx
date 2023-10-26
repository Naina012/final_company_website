import React from "react"

import "./footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animations should occur only once
    });
    AOS.refresh(); // Refresh AOS when your component renders or updates
  }, []); 
  useEffect(() => {
    window.scrollTo(0,0);
  
   
  }, [])
  return (
    <>
      {/* <section className='newletter'> */}
        {/* <div className='container flexSB'> */}
          {/* <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1> */}
            {/* <span>Stay connected and receive the most recent updates from our newsletter.</span> */}
          {/* </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <a href='mailto:info@skill2skills.com'>
    <i className='fa fa-paper-plane'></i>
  </a>
          </div> */}
        {/* </div> */}
        
      {/* </section> */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>SKILL2SKILLS</h1>
            <span>Your Trusted Partner for Skill Development</span>
            <p> Closing the Skills Gap for India's Youth
</p>

<a href="https://twitter.com/i/flow/login" className="twitter">
            <FaTwitter size={30} color="#55acee" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064023076120" className="facebook">
            <FaFacebook size={30} color="#1877f2" />
          </a>
          <a href="https://www.instagram.com/skill2skillsofficial/?hl=en" className="instagram">
            <FaInstagram size={30} color="#bc2a8d" />
          </a>
          <a href="https://www.linkedin.com/in/skill2skills-llp/" className="linkedin">
            <FaLinkedin size={30} color="#0077b5" />
            </a>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
            <li><a href='/about'><i className="fas fa-caret-right"></i> &nbsp;About Us</a></li>
              <li><a href='/onlinecourses'><i className="fas fa-caret-right"></i> &nbsp;Services</a></li>
              <li><a href='/habout'><i className="fas fa-caret-right"></i> &nbsp;Achievements</a></li>
              <li><a href='/gallery'><i className="fas fa-caret-right"></i> &nbsp;Gallery</a></li>
              <li><a href='/contact'><i className="fas fa-caret-right"></i> &nbsp;Contact Us</a></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              
              <li><a href='/project'><i className="fas fa-caret-right"></i> &nbsp;Projects</a></li>
              <li><a href='/team'><i className="fas fa-caret-right"></i> &nbsp;Head-Office</a></li>
              <li><a href='/blog'><i className="fas fa-caret-right"></i> &nbsp;Blog</a></li>
              {/* <li><a href='#'><i className="fas fa-caret-right"></i> &nbsp;Privacy</a></li> */}
              <li><a href='/project'><i className="fas fa-caret-right"></i> &nbsp;DDUGKY</a></li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3 style={{ marginLeft: '10px' }}>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map' style={{ color: '#478ac9' }}></i>&nbsp;&nbsp;&nbsp;
                6th Floor, Dibon Building, Plot no. ITC 2, IT Park, Sector 67, Mohali, Punjab
              </li>
              <li>
                <i className='fa fa-phone-alt'style={{ color: '#478ac9' }}></i>&nbsp;&nbsp;&nbsp;
                +91-7710444754
              </li>
              <li>
                
                <a href='mailto:info@skill2skills.com'>
                <i className='fa fa-paper-plane' style={{ color: '#478ac9' }}></i>&nbsp;&nbsp;&nbsp;
                info@skill2skills.com
  </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
      <button
  className="back-to-top"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <i className="bi bi-arrow-up-short" style={{ fontSize: '2rem' }}></i>
</button>


        <p>
        © 2023 Skills2Skill. All Rights Reserved.
        </p>
      </div>
    </>
  )
}

export default Footer
