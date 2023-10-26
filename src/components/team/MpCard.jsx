import React from "react"
import { team3 } from "../../dummydata"
import "./team.css";
const TeamCard = () => {
  return (
    <>
      {team3.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
            <p>{val.experience}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
