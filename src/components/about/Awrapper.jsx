import React from "react"
import { awrapper } from "../../dummydata"
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const Awrapper = () => {
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
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                
                <div className='img' class="animation-container" data-aos="zoom-in"
     data-aos-duration="1000" // Animation duration in milliseconds
     data-aos-easing="ease-in-out">
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div class="animation-container" data-aos="zoom-in"
     data-aos-duration="1000" // Animation duration in milliseconds
     data-aos-easing="ease-in-out">
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
