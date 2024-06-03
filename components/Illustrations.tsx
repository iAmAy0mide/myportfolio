import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import React from 'react'

const Illustrations: React.FC<IllustrationProp> = ({ alt, height, width, src, className}) => {
  return (
    <>
      <Image 
        alt={alt}
        height={height} 
        width={width} 
        src={src} 
        className={className}
      />
    </>
  )
}

export default Illustrations;
