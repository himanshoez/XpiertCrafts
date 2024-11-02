import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
// import { NavLink } from 'react-router-dom'

const services = () => {
  return (
<>
<div>
<Helmet>
      <title>XpiertCrafts — Services</title>
      <meta name="description" content=" A premier digital marketing agency specializing in SEO, link building, franchise SEO, local SEO, SEM, SMM and many more. We drive traffic, boost rankings, and maximize conversions with cutting-edge strategies tailored for your success."></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </Helmet>

    <header className='text-center md:min-h-[50%] min-h-[20vh] w-full bg-[#e8f1fe] py-10' >
      <h1 className='text-xl md:text-5xl py-5 text-center'>OUR SERVICES</h1>
      <p className='text-md py-5 opacity-95 md:w-11/12 mx-3 md:mx-auto text-[#1c2a43]' >Let’s connect and explore how our digital marketing strategies can transform your business into a success today!</p>
    </header>
    

</div>

    <div className='flex flex-col items-center mx-auto my-3 cursor-default' >
      <h1 className='text-3xl md:w-1/4 text-center font-poppins font-semibold mx-auto '>Our Services</h1>
      <div className='border border-[#293854] md:w-1/2 my-2 mx-auto' ></div>
        <Cards />
    </div>
    <Footer />
</>
  )
}

export default services
