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
import express from "/public/express.png";
import sanity from "/public/sanity.png";

const Techs = () => {
  return (
    <main className='flex justify-center items-center relative h-[80vh] w-screen'>
      <div className="absolute">

      </div>
      <div className="relative w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] mt-10  rounded-full border-[#ECD4EC] border-[0.5rem] bg-bg shelf-container">
        
        <div className=" absolute -top-[1.5rem] -left-[3.4rem] w-[6rem] sm:-top-4 sm:-left-[8.3rem] sm:w-[12rem]">
          <div className="flex gap-4 sm:pl-6">
            <div className="w-10">
              <Image 
                alt='a 3D icon of javascript programming language'
                width={undefined}
                height={undefined}
                src={nodejs}
              />
            </div>
            <div className="w-10 relative overflow-hidden">
              <Image 
                alt='a 3D icon of typescript programming language'
                width={undefined}
                height={undefined}
                src={express}
                className='brightness-110'
              />
              <div className="image-3d-ex absolute inset-0"></div>
              <div className="bg-[#3c3c3c] brightness-110 absolute inset-0 rounded-full -z-10"></div>
            </div>
          </div>
          <div className="w-full h-2 bg-[#ECD4EC] shelf"></div>
        </div>
        
        <div className="absolute top-[1.7rem] -left-[2.7rem] w-[7rem] sm:top-[3rem] sm:w-[10rem] sm:-left-16">
          <div className="w-10 relative sm:ml-4">
            <Image 
              alt=''
              width={undefined}
              height={undefined}
              src={ts}
            />
          </div>
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="absolute top-12 -right-14 w-[10rem] sm:top-[5rem] sm:w-[12rem] sm:-right-20">
          <div className="flex justify-between sm:px-2">
            <div className="flex items-end">
              <div className="w-10">
                <Image 
                  alt=''
                  width={undefined}
                  height={undefined}
                  src={js}
                />
              </div>
              <div className="w-10">
                <Image 
                  alt=''
                  width={undefined}
                  height={undefined}
                  src={react}
                />
              </div>
            </div>
            <div className="w-10">
            <Image 
              alt=''
              width={undefined}
              height={undefined}
              src={nextjs}
            />
            </div>
          </div>
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="absolute top-[5.5rem] -left-14 w-[10rem] sm:top-[9.4rem] sm:-left-[8rem] sm:w-[14rem]">
          <div className="flex justify-between sm:pl-4">
            <div className="w-10 relative">
              <Image 
                alt=''
                width={undefined}
                height={undefined}
                src={sanity}
                className='brightness-110'
              />
              <div className="image-3d absolute inset-0"></div>
            </div>
            <div className="flex sm:-mr-4">
              <div className="w-10">
                <Image 
                  alt=''
                  width={undefined}
                  height={undefined}
                  src={tailwind}
                />
              </div>
              <div className="w-10 opacity-0">
                <Image 
                  alt=''
                  width={undefined}
                  height={undefined}
                  src={react}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="shelf absolute top-[9rem] -left-[3.4rem] w-[4.9rem] sm:top-[12.7rem] sm:-left-[8.3rem] sm:w-[10rem]">
          <div className="w-10 flex sm:ml-8  items-end">
            <Image 
              alt=''
              width={undefined}
              height={undefined}
              src={css}
            />
          </div>
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>

        <div className="shelf absolute top-[10.5rem] left-[1.6rem] w-[16rem] sm:top-[15rem] sm:left-6 sm:w-[22.5rem]">
          <div className="flex justify-end items-end">
            <div className="w-10"></div>
            <div className="w-10">
              <Image 
                alt=''
                width={undefined}
                height={undefined}
                src={html}
              />
            </div>
          </div>
          <div className="w-full h-2 bg-[#ECD4EC]"></div>
        </div>
      
      </div> 

      <Navigations />
    </main>
  )
}

export default Techs;


