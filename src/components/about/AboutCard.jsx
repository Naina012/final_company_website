import React from "react"
import Heading from "../heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import OnlineCourses from "../allcourses/OnlineCourses"
import Testimonal from "../home/Testimonal"
import aboutus from "../../images/aboutuss.webp"
const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={aboutus} alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='Skill2skills' title='Making Skill India Digital' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    {/* <div className='img'>
                      <img src={val.cover} alt='' />
                    </div> */}
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
      <OnlineCourses/>
      <Testimonal/>
    </>
  )
}

export default AboutCard
