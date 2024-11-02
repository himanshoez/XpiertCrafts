import { Form, useForm } from "react-hook-form"
import { useState } from "react"

import contactUs from "../assets/images/contact.png"

import location from "../assets/icons/location.svg"
import email from "../assets/icons/email.svg"
import contact from "../assets/icons/contact.svg"
import clock from "../assets/icons/clock.svg"

const myForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    let res = await r.text()
    console.log(data, res)
    reset();
    await alert("email has been sent")
  }
  return (
  <>

<div className="container grid md:grid-cols-2 w-full mx-auto">
    <div className="info md:w-3/4 mx-3 md:mx-auto flex flex-col mt-5">
      {/* <h4 className='text-[14px] md:text-2xl text-[#4d4d4d] py-2' >Contact Details</h4> */}
      <h1 className='text-[16px] md:text-3xl md:w-3/5 my-2 md:leading-10' >Get in touch.</h1>
      <p className='text-[14px] text-justify md:text-[18px] font-extralight md:leading-7'>Ready to elevate your digital presence? Contact us for bespoke marketing strategies and expert solutions. Let’s drive your success together.</p>
    
    {/* Address Cards */}

  <div className="flex justify-center items-center">
    <img className="w-3/4" src={contactUs} alt="" />
  </div>    
    </div>
    
<div>


     <h1 className='text-3xl md:text-5xl py-5 text-center'>Get Started</h1>
      <form className="flex flex-col md:w-3/4 mx-3 md:mx-auto py-10 gap-7" action="/" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        {/* <input type="email" placeholder="To" name="to" {...register("to", { required: true })} /> */}

        <input className="bg-gray-200 p-3 text-lg rounded hover:bg-gray-300 transition-all duration-200  text-black" type="name" placeholder="Your Name" name="name" {...register("name", {required: {value: true, message:"You are required to fill this"}, minLength: {value: 3, message:"minimun length should be 3"}})} />{errors.email && <span className="text-red-600 p-0 m-0  " >{errors.email.message}</span> }

        <input className="bg-gray-200 p-3 text-lg rounded hover:bg-gray-300 transition-all duration-200  text-black" type="email" placeholder="Your Email" name="from" {...register("email", {required: {value: true, message:"You are required to fill this"}, minLength: {value: 3, message:"minimun length should be 3"}})} />{errors.email && <span className="text-red-600 p-0 m-0  " >{errors.email.message}</span> }

        <input className="bg-gray-200 p-3 text-lg rounded hover:bg-gray-300 transition-all duration-200  text-black" type="text" placeholder="Your Website" name="subject" {...register("website", {
            required: "Website is required",
            pattern: {
              value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/,
              message: "Please enter a valid website URL",
            },
          })} />{errors.website && <span className="text-red-600 p-0 m-0  " >{errors.website.message}</span> }

        <input className="bg-gray-200 p-3 text-lg rounded hover:bg-gray-300 transition-all duration-200  text-black" type="text" placeholder="Your Subject" name="subject" {...register("subject", {required: {value: true, message:"You are required to fill this"}, minLength: {value: 3, message:"minimun length should be 3"}})} />{errors.subject && <span className="text-red-600 p-0 m-0  " >{errors.subject.message}</span> }

        {/* include validation with required or other standard HTML validation rules */}

        <textarea className="bg-gray-200 p-3 text-lg rounded hover:bg-gray-300 transition-all duration-200  text-black" placeholder="Your Message" name="message" {...register("message", {required: {value: true, message:"You are required to fill this"}, minLength: {value: 3, message:"minimun length should be 3"}})} />
        {errors.message && <span className="text-red-600 p-0 m-0  " >{errors.message.message}</span>}

        <input className="bg-green-400 p-3 text-lg rounded hover:bg-green-500 transition-all duration-200  text-black" type="submit" disabled={isSubmitting} />
      </form>
</div>
</div>
  </>
  )
}

export default myForm



