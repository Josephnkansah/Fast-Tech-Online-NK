import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO FAST TECH ONLINE' title='FAST WAY TO LEARN' />
            <p>Fast Teach Online is your gateway to mastering new skills and knowledge, guiding you step by step toward success with expert-led courses designed to empower your learning journey.</p>
            </div>
          </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
