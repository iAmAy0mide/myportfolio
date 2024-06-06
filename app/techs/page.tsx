import Navigations from '@/components/Navigations'
import React from 'react';
import Image from 'next/image';
import html from "/public/html.png";
import css from "/public/css3.png";
import ts from "/public/typescript.webp";
import js from "/public/javascript.png";
import react from "/public/react.png";
import nextjs from "/public/nextjs.png";
import nodejs from "/public/nodejs.png";
import tailwind from "/public/tailwind.png";
import express from "/public/express.jpg";
import sanity from "/public/sanity.png";

const Techs = () => {
  return (
    <main className='flex justify-center items-center h-[80vh] w-screen'>
      <div className="relative w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] mt-10  rounded-full border-[#ECD4EC] border-[0.5rem] bg-bg shelf-container">
        
        <div className=" absolute top-4 -left-[3.4rem] w-[6rem] sm:top-6 sm:-left-[8.3rem] sm:w-[12rem]">
          <div className="flex gap-4">
            <div className="w-10">
              <Image 
                alt='a 3D icon of javascript programming language'
                width={undefined}
                height={undefined}
                src={js}
              />
            </div>
            <div className="w-10">
              <Image 
                alt='a 3D icon of typescript programming language'
                width={undefined}
                height={undefined}
                src={ts}
              />
            </div>
          </div>
          <div className="w-full h-2 bg-[#ECD4EC] shelf"></div>
        </div>
        
        <div className="absolute top-16 -left-[2.7rem] w-[7rem] sm:top-[5rem] sm:w-[10rem] sm:-left-16">
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="absolute top-20 -right-14 w-[10rem] sm:top-[7rem] sm:w-[12rem] sm:-right-20">
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="absolute top-[8rem] -left-14 w-[10rem] sm:top-[10rem] sm:-left-[8rem] sm:w-[14rem]">
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="shelf absolute top-[11.6rem] -left-[3.4rem] w-[4.9rem] sm:top-[15rem] sm:-left-[8.3rem] sm:w-[10rem] ">
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="shelf absolute top-[13rem] left-[1.6rem] w-[16rem] sm:top-[17rem] sm:left-6 sm:w-[22.5rem]">
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

      </div>
      <Navigations />
    </main>
  )
}

export default Techs;


