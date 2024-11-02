import React from 'react'
import { Helmet } from "react-helmet"
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import AboutCards from '../components/About-Cards'
import Experts from '../components/Experts'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Services from '../components/Services-Cards'

const Home = () => {
  return (
    <>
  <div>
    <Helmet>
      <title>XpiertCrafts — Unlocking Potential, Maximizing ROI</title>
      <meta name="description" content=" A premier digital marketing agency specializing in SEO, link building, franchise SEO, local SEO, SEM, SMM and many more. We drive traffic, boost rankings, and maximize conversions with cutting-edge strategies tailored for your success."></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </Helmet>
  </div>

    <Navbar />
    <Header />
    <AboutCards />
    
    <div className="bg-[#e8f1fe] possibilities">
    <div className=' w-11/12 mx-auto flex flex-col items-center justify-center py-10'>
    <h1 className='text-xl md:text-2xl font-semibold text-gray-500  my-3 md:mx-auto'>Possibilities</h1>
    <div className='border border-[#293854] w-1/2 md:w-1/4 mx-auto' ></div>
    <h4 className='text-[14px] md:w-[90vw] md:text-xl m-2 md:my-4 text-[#103132] text-justify md:text-center font-normal md:leading-7'>Discover the limitless possibilities with XpiertCrafts. Our expert team, renowned for their innovative approach and Google Certified expertise, specializes in off-page SEO and custom link-building strategies. With over a decade of success and a steadfast commitment to ethical SEO practices, we drive organic traffic and secure top rankings, ensuring your business thrives in the digital landscape.</h4>
    </div>
    </div>

    <Services/>
    <Experts/>
    <h1 id='contact' className='text-2xl md:text-3xl text-center font-poppins font-semibold my-4 md:my-6 mx-auto ' >Contact Us</h1>
    <div className='border border-[#293854] md:w-1/2 my-2 mx-auto' ></div>
    <Form />
    <Footer />
    </>
  )
}

export default Home
