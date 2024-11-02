import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = (props) => {
    return (
        <>
        <div className="card bg-white w-80 border rounded-md shadow-md p-3 hover:shadow-2xl transition-all duration-200">
            <img className='my-4' src={props.src} alt="card-icon" />
            <h1 className='text-2xl'>{props.heading}</h1>
            <p className='text-justify m-1 leading-7 text-[#a1a1a1]' >{props.desc}</p>
            {/* <NavLink to={props.link} style={{ textDecoration: 'none' }}>
                    <button className='bg-[#e8f1fe] p-2 rounded text-black left-2 bottom-2' >Explore</button>
            </NavLink> */}
        </div>
        </>
    )
}

export default Cards
