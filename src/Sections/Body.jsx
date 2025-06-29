import React from 'react'
import Header from './Header'
import Hero from './Hero'
import MovingLogos from './Logo'
import Partner from './Partner'
import PartnershipPrograms from './Program'
import FaqSection from './FaqSection'
import GetStartedCTA from './GetStartedCTA'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
   
        <Hero/>
        <Partner/>
        <PartnershipPrograms/>
        <FaqSection/>
        <GetStartedCTA/>
        <Footer/>
    </div>
  )
}

export default Body

