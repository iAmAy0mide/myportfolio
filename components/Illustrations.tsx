import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import React from 'react'

const Illustrations: React.FC<IllustrationProp> = ({ alt, height, width, src}) => {
  return (
    <>
      <Image 
        alt={alt}
        height={height} 
        width={width} 
        src={src} 
        className="-z-10 right-1 bottom-[8rem] smm:bottom-6 sm:bottom-1 absolute w-[30rem] md:bottom-4 md:right-10 md:w-[32rem] xl:w-[37rem] xl:right-2"
      />
    </>
  )
}

export default Illustrations;

interface IllustrationProp {
    alt: string;
    height?: number | `${number}` | undefined;
    width?: number | `${number}` | undefined;
    src: string | StaticImport | any;
}
