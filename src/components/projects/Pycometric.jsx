import React, { useState } from 'react';
import './project.css';
import about from "../../assets/pycho.png";
import Back from "../back/Back"


const Pycometric = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Back title='Psychometric Assessment for Candidate Evaluation' />
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
          Skill2Skills has successfully developed and implemented a comprehensive psychometric assessment system for evaluating candidates across various domains. This project, titled "Psychometric Assessment for Candidate Evaluation," aims to provide organizations with a robust tool to make informed decisions regarding candidate selection, placement, and career development.

          </p>
          {expanded && (
            <>
              <p>
              By utilizing psychometric assessments, organizations can make more accurate and objective hiring decisions, resulting in reduced turnover rates and better job-person fit.The assessments also aid in identifying areas where employees can benefit from further training and development, leading to more effective career growth strategies.


              </p>
              <p>
              The project began with creating a diverse set of psychometric assessments tailored to different industries and job roles. These assessments are scientifically designed to measure a candidate's cognitive abilities, personality traits, soft skills, and domain-specific knowledge.Skill2Skills developed a scalable online platform where candidates can easily access and complete the assessments. The platform ensures a user-friendly experience and allows candidates to complete assessments remotely.

              </p>
              {/* <p>
                All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
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
        <h2>The different types of psychometric tests include:</h2>
        <ul>
          <li>Aptitude tests</li>
          <li>Skills Tests</li>
          <li>Personality Tests</li>
          {/* Add more projects as needed */}
        </ul>
        <p style={{ marginBottom: '15px' }}>
        The "Psychometric Assessment for Candidate Evaluation" project by Skill2Skills provides organizations with a powerful tool for identifying and developing talent effectively, ultimately contributing to enhanced workforce productivity and success.




        </p>
        {/* <p>
        The Ministry of Rural Development has issued comprehensive Guidelines and Standard Operating Procedures (SOP) for the program's execution. All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
        </p> */}
        <a href="https://kaushalparikshan.com" target="_blank" rel="noopener noreferrer">
          Take Your Psychometric Assesment
        </a>
      </div>
    </section>
    </>
  );
};

export default Pycometric;
