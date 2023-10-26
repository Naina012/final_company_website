import React, { useEffect, useState } from "react";
import Back from "../back/Back";
import GalleryCard from "./GalleryCard";
import "./gallery.css"; // Create a CSS file for styling

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Back title="Gallery" />
      <section className="gallery padding">
        <div className="container">
          <div className="category-buttons">
            <button
              className={`category-button ${selectedCategory === "" && "active"}`}
              onClick={() => setSelectedCategory("")}
            >
              All
            </button>
            <button
              className={`category-button ${selectedCategory === "Celebration" && "active"}`}
              onClick={() => setSelectedCategory("Celebration")}
            >
              Celebration
            </button>
            <button
              className={`category-button ${selectedCategory === "Inauguration" && "active"}`}
              onClick={() => setSelectedCategory("Inauguration")}
            >
              Inauguration
              
            </button>
            <button
              className={`category-button ${selectedCategory === "Batchlaunch" && "active"}`}
              onClick={() => setSelectedCategory("Batchlaunch")}
            >
              Batch Launch
            </button>
            <button
              className={`category-button ${selectedCategory === "Assessments" && "active"}`}
              onClick={() => setSelectedCategory("Assessments")}
            >
              Assessments
            </button>
            <button
              className={`category-button ${selectedCategory === "Placements" && "active"}`}
              onClick={() => setSelectedCategory("Placements")}
            >
              Placements
            </button>
            <button
              className={`category-button ${selectedCategory === "Others" && "active"}`}
              onClick={() => setSelectedCategory("Others")}
            >
              Others
            </button>
          </div>
          <GalleryCard categoryFilter={selectedCategory} />
        </div>
      </section>
    </>
  );
};

export default Gallery;
