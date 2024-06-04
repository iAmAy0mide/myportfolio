import React from 'react';
import Navigations from '@/components/Navigations';
import Image from 'next/image';
import proto from "/public/proto.png";
import Bashorun from "/public/bashorun.png";
// import Project from '@/components/Project';


const Projects = () => {
  return (
    <main>
      <div className="flex justify-between flex-col md:flex-row md mt-4 ml-4 gap-4">

       <div className="relative project-container w-[18rem] rounded-md flex overflow-hidden transition-all duration-700">
        <div className="absolute project-logo h-full w-full flex justify-center items-center bg-red-400 transition-all duration-700">
          <Image
            alt='Bashorunolu legal website logo'
            width={undefined}
            height={undefined}
            src={Bashorun}
            className='w-[4rem] px-1 transition-all duration-700'
          />
        </div>
        <div className="flex justify-end w-full">
        <Image 
          alt='proto'
          height={undefined}
          width={undefined}
          src={proto}
          className='w-[80%]'
        />
        </div>       
       </div>
       
       <div className="">
        <h1>Bashorunolu Legal Website</h1>
        <p></p>
        <button 
          type="submit" 
          className='btn-skeumorphic px-4 py-2 bg-slate-500 relative text-textColor'>
          Preview
        </button>
       </div>

      </div>
      <Navigations />
    </main>
  )
}

export default Projects
