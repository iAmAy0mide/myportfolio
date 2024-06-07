import Navigations from '@/components/Navigations';
import { Dancing_Script } from "next/font/google";
import React from 'react';
import Projects from '@/components/Projects';
import Image from 'next/image';
import Link from "next/link";
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

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});


const Techs = () => {
  return (
    <main className='space-y-20 flex flex-col'>
      <div className="flex justify-center items-center relative w-screen h-[50vh]">

        <h1 className="absolute top-6 left-4 md:left-16 text-[2rem] font-extrabold stroked-text">My Stacks</h1>
        <div className="absolute top-4 right-4">
          <p><span className={`font-500 text-underline ${dancingScript.className}`}>Created with: </span><span className='text-underline text-[#ff9900e0] hover:text-[#ff9800] transition-colors duration-500 '>tailwind css</span></p>
          <p><span className={`font-500 ${dancingScript.className}`}>Inspired by: </span>
            <Link 
              href='https://png.pngtree.com/background/20231017/original/pngtree-circular-wall-shelf-design-enhancing-your-room-s-aesthetics-picture-image_5591901.jpg' 
              target='_blank'
              className='text-[#00B7FF] hover:text-[#ff9800] transition-colors duration-500 underline hover:no-underline'
              >pngtree</Link>
          </p>
        </div>
        <div className="relative w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] mt-[12rem] sm:ml-10 rounded-full border-[#ECD4EC] border-[0.5rem] bg-bg shelf-container">
          
          <div className=" absolute -top-[1.5rem] -left-[3.4rem] w-[6rem] sm:-top-4 sm:-left-[8.3rem] sm:w-[12rem]">
            <div className="flex gap-4 sm:pl-6">
              <div className="w-10 relative">
                <Image 
                  alt='a 3D icon of nodejs runtime'
                  width={undefined}
                  height={undefined}
                  src={nodejs}
                />
                <div className="absolute"></div>
              </div>
              <div className="w-10 relative overflow-hidden">
                <Image 
                  alt='a 3D icon of expressjs framework - a framework for nodejs'
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
                alt='a 3D icon of typescript programming language'
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
                    alt='a 3D icon of javascript programming language'
                    width={undefined}
                    height={undefined}
                    src={js}
                  />
                </div>
                <div className="w-10">
                  <Image 
                    alt='a 3D icon of reactjs - a javascript library'
                    width={undefined}
                    height={undefined}
                    src={react}
                  />
                </div>
              </div>
              <div className="w-10">
              <Image 
                alt='a 3D icon of nextjs - a reactjs framework'
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
                  alt='a 3D icon of sanity.io - content management system'
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
                    alt='a 3D icon of tailwind css - provide sets of utility classes fro CSS'
                    width={undefined}
                    height={undefined}
                    src={tailwind}
                  />
                </div>
                <div className="w-10 opacity-0">
                  <Image 
                    alt='a 3D icon of react - a javascript library'
                    width={undefined}
                    height={undefined}
                    src={react}
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-2 bg-[#ECD4EC]"></div>
          </div>

          <div className="shelf absolute top-[9rem] -left-[3.4rem] w-[4.9rem] sm:top-[13.5rem] sm:-left-[8.3rem] sm:w-[10.7rem]">
            <div className="w-10 flex sm:ml-8  items-end">
              <Image 
                alt='a 3D icon of CSS3 - used for styling webpages'
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
                  alt='a 3D icon of html'
                  width={undefined}
                  height={undefined}
                  src={html}
                />
              </div>
            </div>
            <div className="w-full h-2 bg-[#ECD4EC]"></div>
          </div>
        
        </div>

      </div>
      <div className='w-full '>

      <h1 className=' text-center text-[2rem] font-extrabold stroked-text'>Projects</h1>
      <Projects />
      </div>
      <Navigations />
    </main>
  )
}

export default Techs;


