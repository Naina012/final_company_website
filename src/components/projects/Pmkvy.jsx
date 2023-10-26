import React, { useState } from 'react';
import './project.css';
import about from "../../assets/g9.webp";
import Back from "../back/Back"


const Pmkvy = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Back title='Pradhan Mantri Kaushal Vikas Yojana (PMKVY)' />
    <section id='Project'> {/* Updated section id */}
      {/* <h2 className='project-title'>Deen Dayal Upadhyaya Grameen Kaushalya Yojana</h2> */}

      <div className="project-container"> {/* Updated container class */}
        <div className="project-image"> {/* Updated class name */}
          <div className="project-image-inner"> {/* Added a new div for hover effect */}
            <img src={about} alt="PProject-img" />
          </div>
        </div>
        <div className="project-content"> {/* Updated class name */}
          <p>
          The Pradhan Mantri Kaushal Vikas Yojana (PMKVY) serves as the flagship initiative of the Ministry of Skill Development and Entrepreneurship (MSDE), executed in partnership with the National Skill Development Corporation (NSDC). This skill certification program is designed with a clear goal in mind: to empower the youth of India with industry-aligned training, equipping them with the skills needed to secure improved employment opportunities and enhance their livelihoods.
          </p>
          {expanded && (
            <>
              <p>
              In an effort to empower the youth of our nation and advance the Skill India Mission, the Ministry of Skill Development and Entrepreneurship (MSDE) introduced the third phase of its renowned program, the Pradhan Mantri Kaushal Vikas Yojana (PMKVY 3.0), commencing on January 15, 2021. PMKVY 3.0 is a visionary initiative aimed at fostering skill development across the country to meet the evolving demands of industries, address market needs, and equip individuals with expertise in services and modern job roles, which have gained significant importance in the wake of the COVID-19 pandemic.
              </p>
              <p>
              PMKVY 3.0 envisions benefiting more than 800,000 candidates during the fiscal year 2020-2021, with a budget allocation of INR 948.90 crores. It is specifically tailored to cater to individuals within the age group of 15 to 45 years.
              </p>
              {/* <p>
              The scheme comprises two vital components: the Central Component, which will be executed by organizations such as the National Skill Development Corporation (NSDC) and the Directorate General of Training (DGT), and the State Component, which will be managed by the State Skill Development Missions (SSDMs) or the respective Departments of States/Union Territories.
              </p> */}
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
        <h2>Skill training will be imparted under three categories, pan-India:</h2>
        <ul>
          <li>Short Term Training (STT)</li>
          <li>Recognition of Prior Learning (RPL)</li>
          <li>Special Project (SP)</li>
          {/* Add more projects as needed */}
        </ul>
        <p style={{ marginBottom: '15px' }}>
        The scheme comprises two vital components: the Central Component, which will be executed by organizations such as the National Skill Development Corporation (NSDC) and the Directorate General of Training (DGT), and the State Component, which will be managed by the State Skill Development Missions (SSDMs) or the respective Departments of States/Union Territories.


        </p>
        <p>
        The scheme will give major focus on upskilling/reskilling with a focus on future skills courses to increase productivity of existing workforce and provide online/digital mode of training for wider coverage.
        </p>
        <a href="https://www.pmkvyofficial.org/components-of-the-scheme" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </section>
    </>
  );
};

export default Pmkvy;
