import React, { useState } from 'react';
import './project.css';
import about from "../../assets/kaushal.png";
import Back from "../back/Back"


const Kaushal = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Back title='Kaushal Parikshan' />
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
          Kaushal Parikshan is a digital assessment platform which enables the candidates from the skill
development and education ecosystem to assess their personality type as per their Aptitude,
Knowledge, Skill, and Psychometry. Our AI-powered algorithms and compute Machine Learning
mechanism provide suitable career guidance to the aspirants by mapping their profile with
befitting job roles.
          </p>
          {expanded && (
            <>
              <p>
              This ERP platform also provides a wide variety of formative internal assessments to track the
learning outcome of the candidates enrolled in a vocational course. Our assessments are full of
lucid designs consisting of graphics with gamification within the assessment series to make them
more user friendly and interactive.
              </p>
              <p>
              Kaushal Parikshan is developed and managed by team Skill2Skills under the exploration
program of a prestigious national level incubator named IIT Mandi-Catalyst.


              </p>
              <p>
              Skill2Skills is an ISO 9001:2015 certified and DPIIT recognised start-up in the field of vocational
education, which has been funded by the Ministry of Commerce and Industries, GOI and
Department of Industries, Himachal Pradesh, respectively.
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
        <h2>Objectives are:</h2>
        <ul>
          <li>To assess the personality type of candidates by using AI-powered algorithms and
Machine Learning concepts as per their Aptitude, Knowledge, Skill, and Psychometry.
</li>
          <li>To provide suitable career guidance to the aspirants by mapping their profile with befitting
job roles.
</li>
          <li>To track the learning outcome of the candidates enrolled in a vocational course.
</li>
          
        </ul>
        {/* <p style={{ marginBottom: '15px' }}>
        DDU-GKY originated from the Aajeevika Skills program and the 'Special Projects' segment of the Swarnjayanti Gram Swarozgar Yojana (SGSY). The program is tailored to meet the vocational aspirations of rural youth, equipping them with skills that make them suitable for wage employment.


        </p> */}
        {/* <p>
        The Ministry of Rural Development has issued comprehensive Guidelines and Standard Operating Procedures (SOP) for the program's execution. All personnel involved in DDU-GKY projects must undergo training, assessment, and certification in adherence to these SOPs. This e-learning platform is designed to facilitate self-paced learning of the SOPs and certification.
        </p> */}
        <a href="https://kaushalparikshan.com/" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </section>
    </>
  );
};

export default Kaushal;
