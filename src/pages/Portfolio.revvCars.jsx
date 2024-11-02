import React from 'react'
import Footer from '../components/Footer'


const RevvCars = () => {
  return (

<>

<header className='text-center md:min-h-[50%] min-h-[20vh] w-full py-10 bg-[#e8f1fe] bg-cover bg-center relative  z-0'>
    <div className="content relative z-10">
      <h1 className='text-xl md:text-5xl py-5 text-center'>Revv Cars</h1>
      <p className='text-md py-5 opacity-100 md:w-11/12 mx-3 md:mx-auto text-[#292929]'>Home/Revv Cars</p>
    </div>
    </header>

    <div className="container w-[85%] md:w-[90vw] mx-auto flex flex-col items-center justify-center">
    <div className="card flex md:flex-row flex-col md:w-11/12 my-10 md:my-28 mx-4 gap-10 md:mx-auto justify-around">
        <div className="card-text md:w-3/4">
        <h1 className='text-[16px] md:text-3xl w-full my-2 md:leading-10' >Revv Got Boosted: <br/>Transforming Keyword Rankings and ROI with Off-Page SEO</h1>
        <summary className='text-[12px] md:text-[18px] text-[#4a4a4a] list-none w-full m-t-5 md:leading-10'>
        By leveraging targeted SEO services, we elevated 85% (24/28) of the client's keywords to the #1 page on SERPs. Our approach, rooted in detailed keyword research and competitor analysis, overcame the client's challenges and led to a substantial boost in keyword rankings, organic traffic, and ROI.
        </summary>
        </div>

        <div className="img-container relative flex flex-col md:flex-row">
            <div className="card-img">
        <img src="" className='w-[150px] md:w-[350px]' alt="about-img1" />
            </div>
    </div>
    </div>
    </div>

    <div className="container w-[85%] md:w-[90vw] mx-auto flex flex-col relative items-center justify-center">
    <section className="card flex md:flex-row flex-col md:w-11/12 md:my-28 mx-4 gap-10 md:mx-auto justify-around">
        <div className="card-text md:w-3/4">
        <h1 className='text-[16px] md:text-3xl w-full my-2 md:leading-10' >WHO ARE REVV CARS?</h1>
        <summary className='text-[12px] md:text-[18px] text-[#4a4a4a] list-none w-full my-5 md:leading-10'>
        A local business owner experiencing significant challenges in keyword ranking, organic traffic, and return on investment (ROI). The client was falling behind local competitors and struggling to achieve desired digital marketing results.
        </summary>
        </div>

        {/* <div className="img-container relative flex flex-col md:flex-row">
            <div className="card-img">
        <img src={props.img} className='w-[150px] md:w-[350px]' alt="about-img1" />
            </div>
    </div> */}
    </section>
    </div>

    <div className="container w-[85%] md:w-[90vw] mx-auto flex flex-col relative my-5 items-center justify-center">
    <section className="card flex md:flex-row flex-col md:w-11/12 my-10 md:my-28 mx-4 gap-10 md:mx-auto justify-around">
        <div className="card-text md:w-3/4">
        <h1 className='text-[16px] md:text-3xl w-full my-2 md:leading-10' >Difficulties:</h1>
        <summary className='text-[12px] md:text-[18px] text-[#4a4a4a] list-none w-full my-5 md:leading-10'>
        
        </summary>
        </div>

        {/* <div className="img-container relative flex flex-col md:flex-row">
            <div className="card-img">
        <img src={props.img} className='w-[150px] md:w-[350px]' alt="about-img1" />
            </div>
    </div> */}
    </section>
    </div>

    <Footer/>
</>



  )
}

export default RevvCars
