import React from 'react'
import { Helmet } from "react-helmet"
import AboutUs from '../components/About-Cards'
import Footer from '../components/Footer'


const About = () => {
  return (
    <>
  <div>
  <Helmet>
      <title>XpiertCrafts — About</title>
      <meta name="description" content=" A premier digital marketing agency specializing in SEO, link building, franchise SEO, local SEO, SEM, SMM and many more. We drive traffic, boost rankings, and maximize conversions with cutting-edge strategies tailored for your success."></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </Helmet>
  </div>

  <header className='text-center md:min-h-[50%] min-h-[20vh] w-full bg-[#e8f1fe] py-10' >
      <h1 className='text-xl md:text-5xl py-5 text-center'>ABOUT US</h1>
      <p className='text-md py-5 opacity-95 md:w-11/12 mx-3 md:mx-auto text-[#1c2a43]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tenetur. Dolorem esse laudantium, nihil explicabo sequi odit quis maiores non dolorum quidem repudiandae?</p>
    </header>

  <AboutUs />
  <Footer />
</>
  )
}

export default About
