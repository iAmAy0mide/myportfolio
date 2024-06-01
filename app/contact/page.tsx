"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Navigations from '@/components/Navigations';
import whasapp from "/public/whatsapp-svg.svg";
import linkedin from "/public/linkedin-svg.svg";
import rocket from "/public/rocket-cut.png";

const page = () => {
  const [errorMessage, setErrorMessage] = React.useState<string>();
  const [userInputs, setUserInputs] = React.useState<IFormData>({
    lastName: '',
    firstName: '',
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

  }

  return (
    <main className='select-none px-4 md:px-16 mx-auto flex flex-col justify-center min-h-screen'>
      <h1>You Can Reach out to me here :) </h1>
      <form onSubmit={handleSubmit} className='flex flex-col min-w-[400px] p-[2rem] '>
      {/* <form onSubmit={handleSubmit} className='flex flex-col w-full'> */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className='flex flex-col'>
            <label 
              htmlFor="firstName"
              className='font-medium'
              >FirstName</label>
            <input 
              type="text" 
              name="firstname"
              id="firstname" 
              placeholder='FirstName'
              value={userInputs.firstName}
              onChange={handleInputChange}
              className=' mt-2 p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none'
            />
          </div>
            <div className='flex flex-col'>
              <label 
                htmlFor="lastName">LastName:</label>
              <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder='lastName'
                value={userInputs.lastName}
                onChange={handleInputChange}
                className='mt-2 p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none'
              />
            </div>
          </div>
        <div className="flex flex-col md:flex-row">
          <div className='flex flex-col my-4'>
            <label 
              htmlFor="Subject">Subject</label>
            <input 
              type="text" 
              name="subject" 
              id="subject" 
              placeholder='Subject'
              value={userInputs.subject}
              onChange={handleInputChange} 
              className='flicker-1mt-2 p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none'
              />
          </div>
        </div>
        <div className='flex flex-col'>
          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>          
            <textarea 
              name="message" 
              id="message" 
              placeholder='Please tell us more...'
              value={userInputs.description}
              onChange={handleInputChange}
              rows={5}
              cols={30}
              className='mt-2 p-4 hover:brightness-125 transition-all duration-300 placeholder:text-red-400 bg-slate-600 input-shadow outline-none resize-none overflow-auto'
            ></textarea>
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
        <div className="flex justify-between mt-2">
          <div className="relative">
            <button 
              type="submit" 
              className='btn-skeumorphic pl-4 pr-14 py-2 bg-slate-500 relative text-textColor'>
              Shoot
              <Image 
              alt='rocket icon shoot'
              height={undefined}
              width={undefined}
              src={rocket}
              className='absolute w-6 rocket -top-1 right-3 '
            />
            </button>
            {/* <Image 
              alt='rocket icon shoot'
              height={undefined}
              width={undefined}
              src={rocket}
              className='absolute w-6'
            /> */}
          </div>
          <div className='flex'> 
          <Image 
            alt='whatsapp icon'
            height={undefined}
            width={undefined}
            src={whasapp}
            className='w-6'
          />
          <Image 
          alt='linked in icon '
          height={undefined}
          width={undefined}
          src={linkedin}
          className='w-6'
          />
          </div>
         
        </div>
       
      </form>
      <Navigations />
    </main>
  )
}

export default page;


interface IFormData {
  firstName: string;
  lastName: string;
  subject: string;
  description: string;
}