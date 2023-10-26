import React from "react"
import Back from "../back/Back"
import { useEffect } from "react";
import "./contact.css"
import { SiFacebook } from "react-icons/si";
import { TfiTwitterAlt} from "react-icons/tfi";
import { RiInstagramLine } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
const Contact = () => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  
   
  }, [])
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <iframe
  title="Location Map"
  src="https://www.google.com.qa/maps/d/u/0/embed?mid=1cvYRJJeArlVnU73-Dt_TySQuUICs2Lo&ehbc=2E312F&noprof=1"
  width="640"
  height="480"
></iframe>
          </div>
          
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>6th Floor, Dibon Building, Plot no. ITC 2, IT Park, Sector 67, Mohali, Punjab</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>info@skill2skills.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91-7710444754</p>
                <p> +91 87701 35199</p>
              </div>
              
               
             
            </div>

            <form action="https://formspree.io/f/xjvqjykb" method="POST">
              <div className='flexSB'>
                <input type='text' placeholder='Name' name="name" />
                <input type='email' placeholder='Email' name="email" />
              </div>
              <input type='text' placeholder='Subject' name="subject" />
              <textarea cols='30' rows='10' name="message" placeholder="Create a message here...">
                
              </textarea>
              <button className='primary-btn' type="submit">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <a href="https://twitter.com/i/flow/login" className="twitter">
            < TfiTwitterAlt size={30} color="#55acee" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100064023076120" className="facebook">
            <SiFacebook size={30} color="#1877f2" />
          </a>
          <a href="https://www.instagram.com/skill2skillsofficial/?hl=en" className="instagram">
            <RiInstagramLine size={30} color="#bc2a8d" />
          </a>
          <a href="https://www.linkedin.com/in/skill2skills-llp/" className="linkedin">
            <GrLinkedin size={30} color="#0077b5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
