import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../assets/images/logo-2.png'

function useScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }

const Footer = () => {
  return (
   <>
   <div className='bg-[#e8f1fe] flex-col'>
   <div className="footer grid md:grid-cols-4 mx-auto mt-20">
    <div className='flex flex-col items-center '>
        <img className='w- md:w-5/6' src={logo2} alt="logo" width={'25px'} />
        <h4 className='w-3/4 mx-auto pb-6 font-semibold md:text-2xl text-lg text-center' >Unlocking Potential, Maximizing ROI</h4>
    </div>

   

    <div className='flex flex-col m-5  '>
        <h1 className='text-2xl font-semibold underline'>Pages</h1>
        <ul className='flex flex-col text-black gap-5 py-6  '>
            <li className='hover:font-semibold'><NavLink to="/" >Home</NavLink></li>
            <li className='hover:font-semibold'><NavLink onClick={useScrollToTop} to="/services" >Services</NavLink></li>
            <li className='hover:font-semibold'><NavLink onClick={useScrollToTop} to="/about" >About Us</NavLink></li>
            <li className='hover:font-semibold'><NavLink onClick={useScrollToTop} to="/services/link-building" >FAQs</NavLink></li>
            <li className='hover:font-semibold'><NavLink onClick={useScrollToTop} to="/services/content-creation" >Blogs</NavLink></li>
            <li className='hover:font-semibold'><NavLink onClick={useScrollToTop} to="/contact-us" >Contact Us</NavLink></li>
        </ul>
    </div>

    <div className='flex flex-col m-5  '>
        <h1 className='text-xl md:text-2xl font-semibold underline '>Package</h1>
        <ul className='flex flex-col text-black gap-5 py-6'>
             <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/packages/mythic-seo" style={{ textDecoration: 'none' }}>Mythic SEO</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Hall of Fame</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Divine Monthly SEO Package</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Opulent SEO</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>The Last Mile SEO</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Top of the World</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>The Billionaire Club</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>The Conqueror SEO</NavLink></li>
            
            <li className="dropdown-item hover:font-semibold"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}></NavLink></li>
            
          </ul>
    </div>


    <div className='flex flex-col m-5  '>
        <h1 className='text-xl md:text-2xl font-semibold underline'>Social Media</h1>
        <ul className='flex flex-col text-black gap-5 py-5  '>
            <li className='hover:font-semibold'><a href="https://x.com/XpiertCrafts">Twitter(x)</a></li>
            <li className='hover:font-semibold'><a href="https://www.facebook.com/profile.php?id=61563961261950&mibextid=ZbWKwL">Facebook</a></li>
            <li className='hover:font-semibold'><a href="https://www.instagram.com/xpiertcrafts/">Instagram</a></li>
            <li className='hover:font-semibold'><a href="https://www.linkedin.com/company/xpiertcrafts/">LinkedIn</a></li>
        </ul>
    </div>
   </div>
    <div><p className='text-center text-sm md:text-md py-2'>©2024-2027 XpiertCrafts • A Leading Digital Marketing Agency • All rights reserved</p></div>
   </div>
   </>
  )
}

export default Footer
