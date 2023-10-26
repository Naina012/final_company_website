import React from "react";
import "./Hintro.css";
import { online } from "../../dummydata";
import Heading from "../heading/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Faq from "../pricing/Faq";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animations should occur only once
    });
    AOS.refresh(); // Refresh AOS when your component renders or updates
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="services">
        <div className="container">
          <div data-aos="fade-up">
            <Heading subtitle="Services" title="Browse Our All Services" />
          </div>
          <div />
          <div className="content">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
            >
              {online.map((val, index) => (
                <div key={index} className="box" data-aos="zoom-in-up">
                  <div
                    className="img"
                    class="animation-container" data-aos="zoom-in"
     data-aos-duration="1000" // Animation duration in milliseconds
     data-aos-easing="ease-in-out"
                  >
                    <img src={val.cover} alt={val.courseName} />
                  </div>
                  <h1>{val.courseName}</h1>
                  {/* <span className="icon-read">
                    <i className="fas fa-caret-right" />
                    <i className="fas fa-caret-right" />
                  </span> */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Services;


