import React from 'react'
import AboutBanner from './AboutBanner';
import AboutSection from './AboutSection';
import AboutOffer from './AboutOffer';
import AboutServices from './AboutServices';
import AboutTeam from './AboutTeam';
import Footer from './Footer';
import { AboutFeatures } from './AboutFeatures';
const  About =  () => {
  return (
    <>
      <AboutBanner/>
      <AboutSection/>
      <AboutOffer/>
      <AboutServices/>
      <AboutFeatures/>
      <AboutTeam/>
      <Footer/>
    </>
  )
}

export default About