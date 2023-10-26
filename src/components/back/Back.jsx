import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./back.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Back = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define a mapping of location.pathname to background images
  const backgroundImages = {
    "/about": require("./backimg/background.png"),
    
    "/gallery": require("./backimg/bg.webp"),
    "/contact": require("./backimg/contact.webp"),
    "/blog": require("./backimg/blog.webp"),
    "/team": require("./backimg/bok_4.webp"),
    "/project": require("./backimg/bok_2.webp"),
    "/nulm": require("./backimg/project.webp"),
    
    "/kaushal": require("./backimg/bk_6.webp"),
    "/upsdm": require("./backimg/bk_5.webp"),
    "/pmkvy": require("./backimg/bok_3.webp"),
    "/sagarmala": require("./backimg/bkk.webp"),
    "/punjab": require("./backimg/bok_1.webp"),
    "/haryana": require("./backimg/bk_4.webp"),
    "/mp": require("./backimg/bk_7.webp"),
    "/assam": require("./backimg/project.webp"),
    // Add more path-to-image mappings here
  };

  const backgroundImage = backgroundImages[location.pathname] || require("./backimg/background.png");

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  // Define a mapping of location.pathname to text colors
  const textColors = {
    "/about": "#000000",   // Change this color to your desired color
    "/gallery": "#ffffff",
    "/contact": "#ffffff",
    "/blog": "#ffffff",
    "/team": "#000000",
    "/project": "#000000",
    "/nulm": "#000000",
    // "/pycometric": "#33FF57",#14a59f
    "/kaushal": "#2f67f8",
    "/upsdm": "#00cbff",
    "/pmky": "#57FF33",
    "/sagarmala": "#000000",
    "/punjab": "#000000",
    "/haryana": "#ffffff",
    "/mp": "#000000",
    "/assam": "#000000",
    // Add more path-to-color mappings here
  };

  const textColor = textColors[location.pathname] || "#000"; // Default to black if no match found

  const titleStyle = {
    color: textColor,
  };

  return (
    <>
      <section className="back" style={backgroundStyle}>
        <div data-aos="zoom-in">
          <h1 style={titleStyle}>{title}</h1>
        </div>
        <div data-aos="zoom-in-down">
          <h2 style={{ color: textColor }}>Home / {location.pathname.split("/")[1]}</h2>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;
