import React, { useState } from 'react';
import './project.css';
import about from "../../assets/g6.webp";
import Back from "../back/Back"


const Nulm = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Back title='National Urban Livelihood Missionnpm start (NULM)
    ' />
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
          The Employment through Skills Training & Placement (EST&P) Component, part of the National Urban Livelihood Mission (NULM), is strategically designed to cater to the needs of unskilled urban residents while also enhancing the capabilities of those with existing skills. 
          </p>
          {expanded && (
            <>
              <p>
              The overarching objectives of the Employment through Skills Training & Placement (EST&P) Program are
to endow urban underprivileged individuals with valuable skills, providing them with a sustainable means of livelihood and to foster inclusive economic growth by empowering skilled urban residents to make a more substantial contribution to the national economy.

              </p>
              <p>
                Skill2Skills has been actively engaged in the NULM Scheme,playing a significant role in advancing the program's objectives.
              </p>
              <p>
              This program's core purpose is to offer skill development training to urban individuals, enabling them to establish their businesses and secure jobs in the private sector. The EST&P Program bridges the gap between market demands and the availability of local skills by delivering tailored training programs.
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
        {/* <h2>Projects Under NULM Scheme:</h2>
        <ul>
          <li>Project 1: Description of the first project.</li>
          <li>Project 2: Description of the second project.</li>
          <li>Project 3: Description of the third project.</li>
          
        </ul> */}
        {/* <p style={{ marginBottom: '15px' }}>
        DDU-GKY originated from the Aajeevika Skills program and the 'Special Projects' segment of the Swarnjayanti Gram Swarozgar Yojana (SGSY). The program is tailored to meet the vocational aspirations of rural youth, equipping them with skills that make them suitable for wage employment.


        </p> */}
        <p>
        It elevate the income levels of urban residents through structured, market-oriented certification courses that open doors to both salaried employment and self-employment opportunities. This upward mobility ultimately results in an improved quality of life and the gradual alleviation of urban poverty.
</p>
        <a href="https://nulm.gov.in/" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </section>
    </>
  );
};

export default Nulm;
