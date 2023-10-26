import React from "react"
// import AboutCard from "../about/AboutCard"

import HAbout from "./HAbout"
import Hero from "./Hero"
// import Hprice from "./Hprice"
// import Testimonal from "./testimonal/Testimonal"
import Testimonials from "./Testimonal"
import Awrapper from "../about/Awrapper"

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AboutCard /> */}
      {/* <Hblog /> */}
      <HAbout />

      <Testimonials />
      <Awrapper/>
      
      {/* <Hprice /> */}
    </>
  )
}

export default Home
