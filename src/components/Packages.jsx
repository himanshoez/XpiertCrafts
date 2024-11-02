import React from 'react'
import Footer from './Footer'


const Packages = (props) => {
  return (
    <>

<header className='text-center md:min-h-[50%] min-h-[20vh] w-full py-10 bg-cover bg-center relative  z-0' style={{ backgroundImage: "url(https://i.pinimg.com/736x/23/d4/6a/23d46a541602fa24ff96f07bbf522253.jpg)" }}>
{/* Overlay layer */}
    <div className="absolute inset-0 bg-[#e8f1fe] opacity-80 z-1"></div>

    <div className="content relative z-10">
      <h1 className='text-xl md:text-5xl py-5 text-center'>{props.client}</h1>
      <p className='text-md py-5 opacity-100 md:w-11/12 mx-3 md:mx-auto text-[#292929]' >Home/{props.client}</p>
    </div>
    </header>

    <div className="container w-[85%] md:w-[90vw] mx-auto flex flex-col relative my-5 items-center justify-center">
    <div className="card flex md:flex-row flex-col md:w-11/12 my-10 md:my-28 mx-4 gap-10 md:mx-auto justify-around">
        <div className="card-text md:w-3/4">
        <h1 className='text-[16px] md:text-3xl w-full my-2 md:leading-10' >About {props.client}</h1>
        <summary className='text-[12px] md:text-[18px] text-[#4a4a4a] list-none w-full my-5 md:leading-10'>
        {props.about}
        </summary>
        </div>

        <div className="img-container relative flex flex-col md:flex-row">
            <div className="card-img">
        <img src={props.img} className='w-[150px] md:w-[350px]' alt="about-img1" />
            </div>
    </div>
    </div>
    </div>

    <section className="aboutClient">
       <span className="challenges">
        <h1></h1>
        <h2></h2>
       </span>
    </section>

    <Footer/>
    </>
  )
}

export default Packages
