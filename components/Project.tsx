import React from 'react';
import Image from 'next/image';

const Project: React.FC<IProjectData> = ({ alt, height, width, src, projectName, description}) => {
  return (
    <div>
      <div className="">
        <Image 
            alt={alt}
            height={height}
            width={width}
            src={src}
        />
        <div className="absolute">
            {/* <Image 

            /> */}
        </div>
      </div>
      <div className="">
        <h1>{projectName}</h1>
        <p>{description}</p>
        <button>Preview</button>
      </div>
    </div>
  )
}

export default Project;
