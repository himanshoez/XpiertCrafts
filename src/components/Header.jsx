import React from 'react'
import { NavLink } from 'react-router-dom'
import headImg from '../assets/images/home-image.png'

function contactScroll() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior:   
 'smooth' });
  }
}

function servicesScroll() {
  const serviceSection = document.getElementById('services');
  if (serviceSection) {
    serviceSection.scrollIntoView({ behavior:   
 'smooth' });
  }
}



const Header = () => {
  return (
    <header className='bg-[#e8f1fe] md:max-h-[100vh] overflow-clip ' >
      <div className="container w-11/12 mx-auto flex flex-col items-center">
      <div className="text text-center">
      <h1 className='text-[30px] md:text-[50px] py-5 font-medium text-[#292648]' >Unlocking Potential, Maximizing ROI</h1>
      <p className='text-md py-5 opacity-95 md:w-7/12 mx-3 md:mx-auto text-[#1c2a43]' >A Premier Digital Marketing Agency with expertise to expand clientèle. We drive traffic, boost rankings, and maximize conversions with cutting-edge off-page seo strategies tailored for your success.</p>
      </div>
      <div className="buttons flex gap-3">
        <button onClick={contactScroll} className='bg-slate-500 hover:bg-slate-700 transition-all duration-300 py-2 md:py-3 md:text-lg px-4 md:px-8 text-white rounded-md' >Get Started</button>
        <button onClick={servicesScroll} className='bg-[#dee8fa] hover:border-slate-700 transition-all duration-300 py-2 md:py-3 md:text-lg px-4 md:px-8 text-slate-700 rounded-md border ' >Services</button>
      </div>
      <div className="img">
        <img src={headImg} alt="dashboard-image" />
      </div>
      </div>
    </header>
  )
}

export default Header
