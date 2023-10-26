import React, {  useState, useEffect } from "react";
import { faq } from "../../dummydata";
import Heading from "../heading/Heading";
import AOS from "aos";
import "./Faq.css";

const Faq = () => {
  const [click, setClick] = useState(null);

  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setClick(index);
    }
  };

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
    <div className="faq-container" data-aos="fade-up-right">
      <Heading subtitle="FAQS" title="Frequently Asked Questions" />

      <section className="faq-section">
        <div className="faq-container-inner" data-aos="zoom-in-up">
          {faq.map((val, index) => (
            <div className="faq-box" key={index}>
              <button
                className={`faq-accordion ${click === index ? "active" : ""}`}
                onClick={() => toggle(index)}
              >
                
                <h2 className="question">{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-right"></i>
                  )}
                </span>
              </button>
              {click === index ? (
                <div className="faq-text">
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
