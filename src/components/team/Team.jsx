import React from "react";
import Back from "../back/Back"
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";

const Team = () => {
  return (
    <>
      <Back title="HEAD OFFICE-MOHALI" />
      <section className="team-section padding">
        <div className="team-container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Team;
