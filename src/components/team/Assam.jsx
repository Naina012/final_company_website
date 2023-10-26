import React from "react"

import Back from "../back/Back"
import AssamCard from "./AssamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Assam = () => {
  return (
    <>
      <Back title='ASSAM TEAM' />
      <section className='team padding'>
        <div className='container grid'>
          <AssamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Assam
