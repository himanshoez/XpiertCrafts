import React from 'react'
import img1 from "../assets/images/about-img1.png"
import img2 from "../assets/images/about-img2.png"

const AboutCards = () => {
  return (
    <div>

    <div className="container w-[85%] md:w-[90vw] mx-auto flex flex-col relative my-5 items-center justify-center">
    <div className="card flex md:flex-row flex-col md:w-11/12 my-10 md:my-28 mx-4 gap-10 md:mx-auto justify-around">
        <div className="card-text md:w-3/4">
        <h4 className='text-[14px] md:text-xl text-[#a1a1a1] m-2' >ABOUT US</h4>
        <h1 className='text-[16px] md:text-3xl w-full my-2 md:leading-10' >Innovators in Digital Marketing Excellence and Strategy</h1>
        <summary className='text-[12px] md:text-[18px] text-[#4a4a4a] list-none w-full my-5 md:leading-10'>
        At XpiertCrafts, we specialize in driving digital success through innovative marketing strategies. Our expert team combines creativity, data-driven insights, and cutting-edge technology to elevate your brand and achieve outstanding results.
        </summary>
        </div>

        <div className="img-container relative flex flex-col md:flex-row">
            <div className="card-img">
        <img src={img1} className='w-[150px] md:w-[350px]' alt="about-img1" />
            </div>
            <div className="cursor-default text z-1 m-2 p-4 md:absolute shadow-md md:shadow-2xl rounded-md bg-white border-t-4 border-blue-950 top-[100px] md:top-[250px] md:w-full">
                <h1 className='text-md md:text-2xl '>Good communication, Team work.</h1>
                <p className='text-[12px] md:text-[16px] text-[#4a4a4a] text-justify w-full md:leading-7 '>Good communication and teamwork ensure clear understanding and effective collaboration. They enable diverse skills to unite, fostering a supportive environment that drives productivity and achieves common goals efficiently.</p>
            </div>
        </div>
    </div>

    
    <div className="card flex md:flex-row flex-col-reverse md:w-11/12 my-10 md:mt-28 mx-4 md:mx-auto justify-around items-center">
        <div className="card-text md:w-3/4">
        {/* <h1 className='text-[12px] md:text-3xl md:w-full my-2 md:leading-10' >Expert Digital Marketing for Exceptional Growth and Results</h1> */}
        <h3 className=' text-[14px] md:text-4xl text-gray-600 font-semibold my-3'>Why XpiertCrafts?</h3>
        <p className='text-[12px] md:text-[17px] text-[#103132] text-justify font-normal w-full md:w-3/4 md:leading-7'> Unlock Success with Our Proven, Results-Driven Digital Marketing Expertise.
        Hire us for our proven expertise in driving results, tailored strategies, and innovative solutions. We maximize your online presence, boost engagement, and achieve measurable growth.</p>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 mx-4 my-3 md:my-5 text-[#4a4a4a] text-[12px] md:text-lg hover:cursor-default ">
            <li className='hover:text-slate-800 hover:marker:text-[#ffcc41]  transition-all duration-200' >Expert Team</li>
            <li className='hover:text-slate-800 hover:marker:text-[#ffcc41]  transition-all duration-200' >Data Driven Insights</li>
            <li className='hover:text-slate-800 hover:marker:text-[#ffcc41]  transition-all duration-200' >Transparent Reporting</li>
            <li className='hover:text-slate-800 hover:marker:text-[#ffcc41]  transition-all duration-200' >Custom Tailor Strategies</li>
            <li className='hover:text-slate-800 hover:marker:text-[#ffcc41]  transition-all duration-200' >Innovative Techniques</li>
            <li className='hover:text-slate-800 hover:marker:text-[#ffcc41]  transition-all duration-200' >Round the clock Support</li>
        </ul>
        </div>

        <div className="img-container relative flex">
            <div className="card-img w-full">
        <img src={img2} width="350px" alt="about-img2" />
            </div>
        </div>
    </div>

    
    </div>


    </div>
  )
}

export default AboutCards
