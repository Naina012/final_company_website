import React, { useEffect } from "react"

import Heading from "../heading/Heading"
// import "../allcourses/courses.css"
import"./Habout.css"

// import Hblog from "./Hblog"
// import Hintro from "./Hintro"
// import { useEffect } from "react"
// import "./Hero.css";
import "../vendor/animate.css/animate.min.css";
import "../vendor/aos/aos.css";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap-icons/bootstrap-icons.css";
import "../vendor/boxicons/css/boxicons.min.css";
import "../vendor/glightbox/css/glightbox.min.css";
import "../vendor/remixicon/remixicon.css";
import "../vendor/swiper/swiper-bundle.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Homeservices from "./Hintro"


const HAbout = () => {
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
  
  const achievements = [
    {
      date: "2017",
      titles: [
        "Incorporation",
        
      ],
      animationDirection: "fade-right",
    },
    {
      date: "2018",
      titles: [
        `Trademark Registration`,
        ` Recognition IIT Mandi - CATALYST`
        ,
        `Department of Industries, HPT`
        ,
        ` Registration with Ministry of Rural Development,GOIT`
        ,
      ],
      animationDirection: "fade-left",
    },
    {
      date: "2019",
      titles: [
        "Partnered with Punjab Skill Development Mission",
        
      ],
      
      animationDirection: "fade-right",
    },
    {
      date: "2020",
      titles: [
        `Ministry of Commerce & Industries(Start-up)`,
        `ISO 9001:2015`,
        `National Urban Livelihood Mission`,
      ],
      animationDirection: "fade-left",
    },
    {
      date: "2021",
      titles: [
        "MOU with MSME Recognition",
        "MOU with GST Registration",
        "MOU with Madhya Pradesh State Rural Livelihood Mission",
        "MOU with Haryana State Rural Livelihood Mission",
      ],
      animationDirection: "fade-right",
    },
    {
      date: "2022",
      titles: ["NITI Aayog Registration",
      `MOU with Assam State Rural Livelihood Mission`,
      
    ],
    animationDirection: "fade-left",
    },
   
   
    {
      date: "2023",
      titles: [
        "Kudumbashree (Kerala)",
        "UPSDM (UP)",
        
      ],
      animationDirection: "fade-right",
    },
    
   
    
   
    
    // Add more achievements with different dates and titles
  ];

  const handlePrevClick = () => {
    // Handle previous arrow click here
    // You can implement logic to navigate to the previous set of achievements
  };

  const handleNextClick = () => {
    // Handle next arrow click here
    // You can implement logic to navigate to the next set of achievements
  };
  function getAchievementColor(index) {
    const colors = ["#41516C", "#FF5733", "#47C8E6", "#FFD700", "#A569BD"];
    // Define an array of colors
  
    return colors[index % colors.length];
    // Assign colors to achievements in a cyclical manner
  }
  

  return (
    
    <>
    
    <section className="homeAbout">
  {/* <Hintro /> */}
  <div className="container">
    <div data-aos="fade-up">
    <Heading subtitle="our achievements" title="explore our popular awards and achievements" />

    </div>
    
    <div className="achievements-container" >
      <button className="prev-arrow" onClick={handlePrevClick}>
        &lt;
      </button>
      <ul className="achievement">
      {achievements.map((achievement, index) => (
  <li
    key={index}
    style={{ "--accent-color": getAchievementColor(index) }}
    data-aos={achievement.animationDirection}
  >
    <div className="date">{achievement.date}</div>
    <div className="titles">
      {achievement.titles.map((title, i) => (
        <div className="title" key={i} data-aos="fade-up" data-aos-anchor-placement="bottom-center">
          {title}
        </div>
      ))}
    </div>
  </li>
))}

            </ul>
            <button className="next-arrow" onClick={handleNextClick}>
              &gt;
            </button>
            <Homeservices />
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
