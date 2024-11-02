import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logotext from '../assets/images/logotext.png'

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}



const Navbar = () => {

  const [hamburgerVisibility, sethamburgerVisibility] = useState(false)
  const [packageVisibility, setPackageVisibility] = useState(false)

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // Functions to handle hover events
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <>
      <nav className='flex md:sticky top-0 z-10 w-full max-h-[12vh] bg-[#e8f1fe] justify-around items-center '>
        <NavLink onClick={useScrollToTop} to="/" style={{ textDecoration: 'none' }}>
          <img src={logotext} className="w-24 md:w-48" alt="logo" />
        </NavLink>
        <ul className=' hidden text-[18px] md:text-[20px] list-none md:flex gap-2 md:gap-8 justify-center items-center'>

          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
          </li>

          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/about" style={{ textDecoration: 'none' }}>About Us</NavLink>
          </li>

          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/services" style={{ textDecoration: 'none' }}>Services</NavLink>
          </li>

          <div className="dropdown-menu relative" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
        {/* Only show the button if not hovered */}
        <button className="dropdown-button">Packages</button>
        {isHovered1 && (
           <ul className={`md:flex md:flex-col md: flex-nowrap absolute bg-[#e8f1fe] md:min-w-72  p-2 border rounded text-[16px] md:text-[18px] shadow-md list-none m-0 overflow-hidden transition-all duration-[1500ms] ease-in-out ${ isHovered1 ? "opacity-100" : "opacity-0" }`}>
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
        )}
      </div>


          <div className="dropdown-menu relative" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
        {/* Only show the button if not hovered */}
        <button className="dropdown-button">Portfolio</button>
        {isHovered2 && (
           <ul className={`absolute bg-[#e8f1fe] min-w-40 p-2 border rounded text-[16px] md:text-[18px] shadow-md list-none m-0 overflow-hidden transition-all duration-[1500ms] ease-in-out ${ isHovered2 ? "opacity-100" : "opacity-0" }`}>
            <li className="dropdown-item hover:font-semibold transition-all">
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/portfolio/ather-energy" style={{ textDecoration: 'none' }}>Revv Cars</NavLink>
            </li>
           
          </ul>
        )}
      </div>


          {/* <li className='hover:font-semibold transition-all' onClick={() => setPackageVisibility(currentVal => !currentVal)}>
              Packages
            </li>
            <ul className={'' + packageVisibility?'' : "hidden"}>
              <li>Mythic SEO</li>
              <li>Hall of Fame</li>
              <li>Divine Monthly SEO Package</li>
              <li>Opulent SEO</li>
              <li>The Last Mile SEO</li>
              <li>Top of the World</li>
              <li>The Billionaire Club</li>
              <li>The Conqueror SEO</li>
              <li>Crown Jewels SEO Guest Post</li>
            </ul>
*/}

          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="https://www.xpiertcrafts.com/blogs" style={{ textDecoration: 'none' }} target="blank">Blogs</NavLink>
          </li>


          <li className=' hover:font-semibold transition-all'>
            <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/faqs" style={{ textDecoration: 'none' }}>FAQs</NavLink>
          </li>
        </ul>

        <NavLink onClick={useScrollToTop} to="/contact-us" style={{ textDecoration: 'none' }} ><button className='md:block hidden text-[14px] bg-[#1c699d] hover:bg-[#0b4973] transition-all duration-300 py-1 md:py-3 md:text-lg px-1 md:px-3 text-white rounded-md' >Contact Us</button></NavLink>

        <button onClick={() => sethamburgerVisibility(currentVal => !currentVal)} className="hamburger md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="36" color="#1c699d" fill="none">
            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </nav>

      <nav className={"hamNav flex flex-col gap-5 items-center bg-[#e8f1fe] py-3 transition-all duration-300 md:hidden " + (hamburgerVisibility ? "" : "hidden")}>
        <ul className='text-[14px] md:text-[18px] list-none md:flex gap-2 md:gap-10 grid grid-cols-3'>

          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
          </li>

          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/about" style={{ textDecoration: 'none' }}>About Us</NavLink>
          </li>

          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/services" style={{ textDecoration: 'none' }}>Services</NavLink>
          </li>

          <div className="dropdown-menu relative" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
        {/* Only show the button if not hovered */}
        <button className="dropdown-button">Packages</button>
        {isHovered1 && (
           <ul className={`md:flex md:flex-col md:flex-nowrap absolute bg-[#e8f1fe] min-w-72 p-2 border rounded text-[16px] md:text-[18px] shadow-md list-none m-0 overflow-hidden transition-all duration-[1500ms] ease-in-out ${ isHovered1 ? "opacity-100" : "opacity-0" }`}>
             <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Mythic SEO</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Hall of Fame</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Divine Monthly SEO Package</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Opulent SEO</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>The Last Mile SEO</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>Top of the World</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>The Billionaire Club</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}>The Conqueror SEO</NavLink></li>
            
            <li className="dropdown-item"><NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/" style={{ textDecoration: 'none' }}></NavLink></li>
            
          </ul>
        )}
      </div>

          <div className="dropdown-menu relative" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
        {/* Only show the button if not hovered */}
        <button className="dropdown-button">Portfolio</button>
        {isHovered2 && (
           <ul className={`absolute bg-[#e8f1fe] min-w-40 p-2 border rounded text-[16px] md:text-[18px] shadow-md list-none m-0 overflow-hidden transition-all duration-[1500ms] ease-in-out ${ isHovered2 ? "opacity-100" : "opacity-0" }`}>
            <li className="dropdown-item hover:font-semibold transition-all">
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="/portfolio/ather-energy" style={{ textDecoration: 'none' }}>Ather Energy</NavLink>

            </li>
            <li className="dropdown-item">Item 2</li>
          </ul>
        )}
      </div>


          <li className=' hover:font-semibold transition-all'>
            <NavLink onClick={useScrollToTop} className={(e) => { return e.isActive ? "red" : "" }} to="https://www.xpiertcrafts.com/blogs" style={{ textDecoration: 'none' }} target="blank">Blogs</NavLink>
          </li>


          <li className=' hover:font-semibold transition-all'>
            <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/faqs" style={{ textDecoration: 'none' }}>FAQs</NavLink>
          </li>
        </ul>

        <NavLink onClick={useScrollToTop} to="/contact-us" style={{ textDecoration: 'none' }} ><button className='md:block text-[14px] bg-[#1c699d] hover:bg-[#0b4973] transition-all duration-300 py-1 md:py-3 md:text-lg px-2 md:px-3 text-white rounded-md md:mx-3' >Contact Us</button></NavLink>

      </nav>
    </>
  )
}

export default Navbar
