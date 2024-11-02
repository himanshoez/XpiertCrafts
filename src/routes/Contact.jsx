import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
<div>
    <Helmet>
      <title>XpiertCrafts - Contact US</title>
      <meta name="description" content=" A premier digital marketing agency specializing in SEO, link building, franchise SEO, local SEO, SEM, SMM and many more. We drive traffic, boost rankings, and maximize conversions with cutting-edge strategies tailored for your success."></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Helmet>
</div>

    <header className='text-center md:min-h-[50%] min-h-[20vh] w-full bg-[#e8f1fe] py-10' >
      <h1 className='text-xl md:text-5xl py-5 text-center'>Let's Talk</h1>
      <p className='text-md py-5 opacity-95 md:w-11/12 mx-3 md:mx-auto text-[#1c2a43]' >Let’s connect and explore how our digital marketing strategies can transform your business into a success today!</p>
    </header>
    
    <Form/>
    <Footer />
    </>
  )
}

export default Contact
