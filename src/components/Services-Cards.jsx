import React from 'react'
import Cards from './Cards'
// import { NavLink } from 'react-router-dom'

const services = () => {
  return (
<>

    <div id="services" className='flex flex-col items-center mx-auto my-3 cursor-default' >
      <h1 className='text-3xl md:w-1/4 text-center font-poppins font-semibold mx-auto '>Our Services</h1>
      <div  className='border border-[#293854] w-1/2 md:w-1/4 mx-auto my-3' ></div>
        <Cards />
    </div>
</>
  )
}

export default services
