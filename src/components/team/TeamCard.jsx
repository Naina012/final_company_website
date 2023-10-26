import React from "react";
import { team } from "../../dummydata";
import "./team.css";

const TeamCard = () => {
  return (
    <>
      {team.map((val, index) => (
        <div className="team-card shadow" key={index}>
          <div className="team-image">
            <img src={val.cover} alt="" />
            <div className="overlay">
            <i className="fab fa-google icon"></i> 

              {/* Add other social media icons here */}
            </div>
          </div>
          <div className="team-details">
            <h2 className="team-name">{val.name}</h2>
            <p className="team-role">{val.work}</p>
            <p>{val.experience}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
