import React, { useState } from 'react';
import './project.css';
import about from "../../assets/g11.jpg";
import Back from "../back/Back"


const Project = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Back title='Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDUGKY)' />
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
            Empowering rural youth to become financially self-sufficient and internationally competitive professionals. DDU-GKY, short for Deen Dayal Upadhyaya Grameen Kaushalya Yojana, is a government initiative aimed at empowering economically disadvantaged rural youth by providing them with skill development and employment opportunities. This program is part of the broader efforts by the Ministry of Rural Development, Government of India, to enhance rural livelihoods and reduce poverty, falling under the National Rural Livelihood Mission (NRLM), also known as Aajeevika.
          </p>
          {expanded && (
            <>
              <p>
                The primary goal of DDU-GKY is to transform rural youth, aged 15 to 35, from economically underprivileged backgrounds into a workforce that is not only financially self-sufficient but also competitive on a global scale. As an integral component of the Skill India campaign, it aligns with key government initiatives such as Make In India, Digital India, Smart Cities, and Start-Up India, Stand-Up India.
              </p>
              <p>
                Skill2Skills has been actively engaged in the implementation of DDU-GKY in Kerala, collaborating with Kudumbashree, in Assam with ASRLM, in Madhya Pradesh with MPSRLM, and in Haryana with HSRLM, playing a significant role in advancing the program's objectives.
              </p>
              <p>
                All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
              </p>
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
        <h2>Projects Under DDU-GKY Scheme:</h2>
        <ul>
          <li>MPSRLM (MP)</li>
          <li>ASRLM (ASSAM)</li>
          <li>HSRLM (HARYANA)</li>
          <li>KUDUMBASHREE (KERALA)</li>
          {/* Add more projects as needed */}
        </ul>
        <p style={{ marginBottom: '15px' }}>
        DDU-GKY originated from the Aajeevika Skills program and the 'Special Projects' segment of the Swarnjayanti Gram Swarozgar Yojana (SGSY). The program is tailored to meet the vocational aspirations of rural youth, equipping them with skills that make them suitable for wage employment.


        </p>
        <p>
        The Ministry of Rural Development has issued comprehensive Guidelines and Standard Operating Procedures (SOP) for the program's execution. All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
        </p>
        <a href="https://www.india.gov.in/spotlight/deen-dayal-upadhyaya-grameen-kaushalya-yojana" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </section>
    </>
  );
};

export default Project;
