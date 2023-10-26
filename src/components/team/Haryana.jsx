import React from "react"
import Back from "../back/Back"
import HaryanaCard from "./HaryanaCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Haryana = () => {
  return (
    <>
      <Back title='HARYANA TEAM' />
      <section className='team padding'>
        <div className='container grid'>
          <HaryanaCard/>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Haryana
