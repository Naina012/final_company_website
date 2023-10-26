import React from "react"
import Back from "../back/Back"
import PunjabCard from "./PunjabCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Punjab = () => {
  return (
    <>
      <Back title='AMRITSAR,PUNJAB TEAM' />
      <section className='team padding'>
        <div className='container grid'>
          <PunjabCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Punjab
