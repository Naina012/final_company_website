// Testimonial.js

import React, { useEffect } from "react";
import { testimonal } from "../../dummydata";


import Heading from "../heading/Heading"
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonial.css"; // This file now contains the updated CSS

const Testimonial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="testimonial-container">
      <div className="testinomial-container">
        <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

        <div className="testimonial-carousel">
          <Carousel showThumbs={false} infiniteLoop autoPlay interval={2000}>
            {testimonal.map((val) => (
              <div className="testimonial-item" key={val.id}>
                <div className="testimonial-box">
                  <div className="testimonial-content">
                    <img src={val.cover} alt="" className="testimonial-image" />
                    <i className="fa fa-quote-left testimonial-icon"></i>
                  </div>
                  <div className="testimonial-details">
                    <h2 className="testimonial-name">{val.name}</h2>
                    <span className="testimonial-post">{val.post}</span>
                  </div>
                </div>
                <p className="testimonial-description">{val.desc}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
