import React from 'react'

const Experts = (props) => {
  return (
    <>
    <div className='text-center m-5'>
    <h3 className='text-[14px] md:text-2xl font-semibold text-[#a1a1a1] m-2'>OUR EXPERT TEAM</h3>
    <div className='border border-[#293854] md:w-1/2 my-2 mx-auto' ></div>
    </div>
    <div className="container flex-col md:flex-row flex md:justify-center items-center gap-10 w-11/12 mx-auto">
    <div className=" card bg-white w-80 border rounded-md shadow-md p-3 hover:shadow-2xl transition-all duration-200">
            {/* <img className='my-4' src={props.src} alt="image" width='45px'/> */}
            <h1 className='text-lg md:text-2xl'>Hiimanshuu M Aroraa</h1>
            <p className='text-base  leading-7 text-[#a1a1a1]' >Co-Founder and CEO</p>
    </div>

    <div className=" card bg-white w-80 border rounded-md shadow-md p-3 hover:shadow-2xl transition-all duration-200">
            {/* <img className='my-4' src={props.src} alt="image" /> */}
            <h1 className='text-lg md:text-2xl'>Ankur Upneja</h1>
            <p className='text-base  leading-7 text-[#a1a1a1]' >Co-Founder & CTO</p>
    </div>
    </div>
    </>
  )
}

export default Experts
