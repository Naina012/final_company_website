import React, { useState } from 'react';
import './project.css';
import about from "../../assets/g10.webp";
import Back from "../back/Back"


const Upsdm = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Back title='Uttar Pradesh Skill Development Mission (UPSDM)' />
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
          In 2009, India launched a National Skill Development Policy with the ambitious objective of equipping 500 million individuals with essential skills by the year 2022. Uttar Pradesh, as part of this national initiative, has set its sights on imparting employable skills to more than 4 million young people by the culmination of the 12th Five Year Plan
          </p>
          {expanded && (
            <>
              <p>
              To turn this vision into reality and ensure that the youth of Uttar Pradesh receive the necessary skills to enhance their employability, the state has established the Uttar Pradesh Skill Development Mission (UPSDM). Drawing inspiration from the experiences of other states, the Government of Uttar Pradesh has crafted a distinctive framework for UPSDM.
              </p>
              {/* <p>
                Skill2Skills has been actively engaged in the implementation of DDU-GKY in Kerala, collaborating with Kudumbashree, in Assam with ASRLM, in Madhya Pradesh with MPSRLM, and in Haryana with HSRLM, playing a significant role in advancing the program's objectives.
              </p>
              <p>
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
        {/* <h2>Projects Under DDU-GKY Scheme:</h2> */}
        {/* <ul>
          <li>Project 1: Description of the first project.</li>
          <li>Project 2: Description of the second project.</li>
          <li>Project 3: Description of the third project.</li>
        
        </ul> */}
        <p style={{ marginBottom: '15px' }}>
        UPSDM operates as a comprehensive mission, consolidating the endeavors of multiple State Departments to fulfill the skill development targets within the state. Its mandate encompasses diverse sectors, including Rural Development, Urban Development, Labour, Minority Welfare, Social Welfare, and more. The mission came into existence in 2013 with the explicit responsibility of coordinating and overseeing all skill development initiatives in the state.

        </p>
        <p>
        To effectively address the skill development needs of Uttar Pradesh, UPSDM has not only partnered with government training providers but has also enlisted private training partners. By leveraging the State Skill Development Policy and its extensive network, UPSDM is instrumental in delivering skill development training that enhances employability prospects for the people of Uttar Pradesh.






        </p>
        <a href="https://www.upsdm.gov.in/" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </section>
    </>
  );
};

export default Upsdm;
