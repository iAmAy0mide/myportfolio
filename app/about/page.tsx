import Illustrations from '@/components/Illustrations';
import Navigations from '@/components/Navigations';
import AboutIllus from "/public/about.svg";

const page = () => {
  return (
    <main className='flex flex-col px-4 md:px-16 md:justify-start md:items-end'>
      <div className="relative w-full">      
        <span className='absolute text-stroke-tr -z-10 left-10 top-5 text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 top-[10rem] hidden sm:block left-20 bottom-10 text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
      </div>
      <div className=" w-full text-center flex flex-col md:items-end pt-4 md:pt-8">
        {/* <div className="text-center pt-[3rem]  md:pt-[4rem] z-10 sm:w-2/3 md:w-1/2 mx-auto md:px-8 "> */}
        <h1 className='slide-in-blurred-top text-center text-[3rem] text-textColor font-extrabold'>About Me</h1>
        <p className="w-1/2 md:w-3/4">
        I&apos;m Ayomide, a full-stack developer driven by a passion for transforming ideas into digital reality. With a focus on both front-end finesse and back-end robustness, I thrive in the creative process of building intuitive, user-centric websites and applications.
        </p>
      </div>
      <Navigations />
      <Illustrations 
        alt='a man siiting in office - illusrating info about the developer'
        height={undefined}
        width={undefined}
        src={AboutIllus}
        className="-z-10 left-1 bottom-1 smm:bottom-1 sm:bottom-1 absolute w-[28rem] md:bottom-4 md:right-10 md:w-[32rem] xl:w-[37rem] xl:right-2"
      />
    </main>
  )
}

export default page;
