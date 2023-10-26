import React, { useState } from 'react';
import './project.css';
import about from "../../assets/g1.webp";
import Back from "../back/Back"


const Sagarmala = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Back title='Sagarmala' />
    <section id='Project'> {/* Updated section id */}
      {/* <h2 className='project-title'>Deen Dayal Upadhyaya Grameen Kaushalya Yojana</h2> */}

      <div className="project-container"> {/* Updated container class */}
        <div className="project-image"> {/* Updated class name */}
          <div className="project-image-inner"> {/* Added a new div for hover effect */}
            <img src={about} alt="Project-img" />
          </div>
        </div>
        <div className="project-content"> {/* Updated class name */}
          <p>
          Sagarmala" is a bold and ambitious nationwide endeavor with the objective of catalyzing a significant transformation in India's logistics sector. This transformation will be achieved by fully leveraging the extensive coastline and waterway resources that India possesses. The overarching vision of Sagarmala is to drive down the logistical expenses associated with both domestic and EXIM (Export-Import) cargo by making prudent and strategic investments in infrastructure.
          </p>
          {expanded && (
            <>
              <p>
              The core principle underpinning the Sagarmala vision is the concept of "port-led development." This strategic approach places a strong emphasis on industries that heavily rely on efficient logistics, where the costs of transportation are a significant factor or where the timeliness of logistics plays a pivotal role in their success.
              </p>
               <p>
               When these four integral components—logistics-intensive industries, cutting-edge port facilities, smooth connectivity, and a skilled workforce—are developed in harmony, it results in the realization of substantial economic value, driving regional and national prosperity.
              </p>
              {/* <p>
                All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
              </p>  */}
            </>
          )}
          <div className="project-expand-button"> {/* Updated class name */}
            <button onClick={toggleExpand}>
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <div className='project-lastp'> {/* Updated class name */}
        <h2>The Four Pillars of Sagarmala:</h2>
        <ul>
          <li>Port Modernisation</li>
          <li>Port Connectivity</li>
          <li>Port-led Industrialisation</li>
          <li>Coastal Community Development</li>
          {/* Add more projects as needed */}
        </ul>
        <p style={{ marginBottom: '15px' }}>
        The overarching goal of the Sagarmala Programme is to minimize the logistics expenditure associated with both EXIM (Export-Import) trade and domestic commerce while requiring only modest infrastructure investments.


        </p>
        {/* <p>
        The Ministry of Rural Development has issued comprehensive Guidelines and Standard Operating Procedures (SOP) for the program's execution. All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
        </p> */}
        <a href="https://sagarmala.gov.in/" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </section>
    </>
  );
};

export default Sagarmala;
