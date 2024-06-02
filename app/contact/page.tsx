"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navigations from '@/components/Navigations';
import whasapp from "/public/whatsapp-svg.svg";
import linkedin from "/public/linkedin-svg.svg";
import rocket from "/public/rocket-cut.png";
import Link from 'next/link';

const Contact = () => {
  const [error, setError] = React.useState<IErrorInputs>({
    lastName: '',
    firstName: '',
    email: '',
    subject: '',
    description: '',
  });
  const [userInputs, setUserInputs] = React.useState<IFormData>({
    lastName: '',
    firstName: '',
    email: '',
    subject: '',
    description: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(userInputs);

    const { lastName, firstName, email, subject, description} = userInputs;

    if (lastName == '') {
      setError((prev) => ({
        ...prev,
        lastName: 'Please fill out this field.'
      }));
      return
    }
    
  }

  return (
    <main className='select-none sm:px-4 md:px-16 mx-auto flex flex-col 
    md:mt-[6rem]'>
      {/* <h1>You Can Reach Out To Me Here :) </h1> */}
      <form onSubmit={handleSubmit} className='flex flex-col  p-[2rem]'>
        <div className="flex flex-col md:flex-row gap-4">
          <div className='flex flex-col'>
            <label 
              htmlFor="firstName"
              className='font-medium'
              >FirstName:</label>
            <input 
              type="text" 
              name="firstName"
              id="firstName" 
              placeholder='FirstName'
              value={userInputs.firstName}
              onChange={handleInputChange}
              className=' mt-2 p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none'
            />
            <p>{error.firstName}</p>
          </div>
            <div className='flex flex-col'>
              <label 
                htmlFor="lastName">LastName:</label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder='LastName'
                value={userInputs.lastName}
                onChange={handleInputChange}
                className='mt-2 p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none'
              />
              <p>{error.lastName}</p>
            </div>
          </div>
        <div className="flex flex-col md:flex-row  md:gap-4 justify-center md:items-center ">          
          <div className='flex flex-col  mt-4 md:my-4'>
            <label 
              htmlFor="Subject"
              className='mb-2'
              >Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='adam@example.com'
              value={userInputs.email}
              onChange={handleInputChange} 
              className=' p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none'
              />
              <p className='text-red-500 font-sans font-medium'>{error.email}</p>
          </div>
          <div className='flex flex-col my-4'>
            <label 
              htmlFor="Subject"
              className='mb-2'
              >Subject:</label>
            <input 
              type="text" 
              name="subject" 
              id="subject" 
              placeholder='Subject'
              value={userInputs.subject}
              onChange={handleInputChange} 
              className=' p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none'
              />
            <p className='text-red-500 font-sans font-medium'>{error.subject}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>          
            <textarea 
              name="description" 
              id="description" 
              placeholder='Please tell us more...'
              value={userInputs.description}
              onChange={handleInputChange}
              rows={5}
              cols={30}
              className='mt-2 p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none resize-none overflow-auto'
            ></textarea>
            <p className='text-red-500 font-sans font-medium'>{error.description}</p>
          </div>
          {/* <div className="flex flex-col">
            <label htmlFor="danger">DANGER!</label>
            <input 
              type="text" 
              name="danger" 
              id="danger" 
              placeholder='DO NOT TOUCH THIS FIELD. YOU ARE WARNED!' 
              className='mt-2 p-4 hover:brightness-200 transition-all duration-300 placeholder:text-red-600 bg-slate-600 input-shadow outline-none'
            />
          </div> */}
        </div>
        <div className="flex justify-between mt-2 items-center">
          <div className="relative ">
            <button 
              type="submit" 
              className='btn-skeumorphic pl-4 pr-14 py-2 bg-slate-500 relative text-textColor'>
              Shoot
              <Image 
              alt='rocket icon shoot'
              height={undefined}
              width={undefined}
              src={rocket}
              className='absolute w-6 rocket -top-1 right-3 rocket transition-all duration-300'
            />
            </button>
          </div>
          <div className='flex gap-1'> 
          
          <div className="bg-bgColor brightness-90 w-10 h-10 rounded-full flex justify-center items-center relative social-icon-container hover:brightness-125 transition-all duration-700 cursor-pointer">
            <Link 
              href="/"
              className='z-20'
            >
            <Image 
              alt='whatsapp icon'
              height={undefined}
              width={undefined}
              src={whasapp}
              className='w-6'
            />
            </Link> 
            <div className="social-icon-overlay"></div>    
          </div>
          <div className="bg-bgColor brightness-90 w-10 h-10 rounded-full flex justify-center items-center relative social-icon-container hover:brightness-125 transition-all duration-700 cursor-pointer">
            <Link 
              href="#"
              className='z-20'
              >
              <Image 
                alt='linked in icon'
                height={undefined}
                width={undefined}
                src={linkedin}
                className='w-6 brightness-105'
              />
            </Link> 
            <div className="social-icon-two-overlay"></div>           
          </div>         
          </div>         
        </div>       
      </form>
      <Navigations />
    </main>
  )
}

export default Contact;

// interface IErrorInputs {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   description: string;
// }

// interface IFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
//   description: string;
// };

