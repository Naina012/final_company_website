import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../heading/Heading"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Faq from "../pricing/Faq";
const OnlineCourses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
    AOS.refresh(); 
  }, []); 
  useEffect(() => {
    window.scrollTo(0,0);
  
   
  }, [])
  return (
    <>
      <section className='online'>
        <div className='container'>
          <div data-aos="fade-up">
          <Heading subtitle='Services' title='Browse Our All Services'  />
          </div>
          <div/>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box' data-aos="zoom-in-up" data-aos-duration="1000">
                <div className='img' class="animation-container" data-aos="zoom-in"
     data-aos-duration="1000" 
     data-aos-easing="ease-in-out">
                  <img src={val.cover} alt={val.courseName} />

                  {/* <img src={val.hoverCover} alt='' className='show' /> */}
                </div>
                <h1>{val.courseName}</h1>
                <span className="icon-read"><i class="fas fa-caret-right"></i><i class="fas fa-caret-right"></i></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Faq/>
    </>
  )
}

export default OnlineCourses
