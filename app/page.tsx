// "use client";
import Navigations from "@/components/Navigations";
import Image from "next/image";
import Innovation from "/public/innovation.svg";
import Illustrations from "@/components/Illustrations";

function Home() {

  return (
    <main className="tilt-in-fwd-tl">
      <div className="text-center pt-[3rem]  md:pt-[4rem] z-10">
        <h1 className="text-[3rem] text-textColor font-extrabold neumorphic">Ayomide Enirayetan</h1>
        <h2 className="text-[1.4rem] text-textColor">Full Stack Web Developer</h2>
      </div>

      <div className="absolute transform -rotate-45 left-16  hidden xl:block">
        <h3 className="text-[3rem] font-extrabold pt-12 text-textColor">Welcome!</h3>
      </div>

      <Navigations />
      <Illustrations  
        alt="image showcasing innovation"
        height={undefined} 
        width={undefined} 
        src={Innovation} 
        className="-z-10 right-1 bottom-[8rem] smm:bottom-6 sm:bottom-1 absolute w-[30rem] md:bottom-4 md:right-10 md:w-[32rem] xl:w-[37rem] xl:right-2"
       />
    </main>
  )
}

export default Home