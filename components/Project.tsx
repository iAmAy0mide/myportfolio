"use client";
import React from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

const Project: React.FC<IProjectData> = ({ alt, logoAlt, src,logoSrc, projectName, description}) => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  return (
    <div className='flex flex-col gap-4 smm:flex items-center w-full'>
    
      <div className="relative project-container w-[18rem] rounded-md flex overflow-hidden transition-all duration-700 shadow-lg">
          <div className="absolute project-logo h-full w-full flex justify-center items-center bg-red-400 transition-all duration-700">
            <Image
              alt='Bashorunolu legal website logo'
              width={undefined}
              height={undefined}
              src={logoSrc}
              className='w-[4rem] px-1 transition-all duration-700'
            />
          </div>
          <div className="flex justify-end w-full">
            <Image 
              alt='proto'
              height={undefined}
              width={undefined}
              src={src}
              className='w-[80%]'
            />
          </div>
        </div>

        
        <div className="">
          <h1 className='text-xl font-extrabold'>{projectName}</h1>
          <p>{description}</p>
          <button 
            onClick={() => setModalIsOpen(true)}
            className='btn-skeumorphic px-4 py-2 bg-slate-500 relative text-textColor'>
            Preview
          </button>
          <ProjectModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
        </div>
    </div>
  )
}

export default Project;