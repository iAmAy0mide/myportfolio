import Illustrations from '@/components/Illustrations';
import Navigations from '@/components/Navigations';
import AboutIllus from "/public/about.svg";

const About = () => {
  return (
    <main className='flex flex-col px-4 md:px-16 md:justify-start md:items-end mt-2 md:mt-[5rem] xl:mt-[8rem] '>
        <span className='absolute text-stroke-tr -z-10 left-[10%] top-[8%] text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute text-stroke-tr -z-10 left-[23%] top-[15%] text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 top-[13%%] hidden md:block right-[20%] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 top-[5%] right-[10%] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[2rem] hidden sm:block bottom-10 text-stroke-tr text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 right-[20%] hidden md:block bottom-10 text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[23%] hidden md:block bottom-[27%] text-stroke-tr text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 right-[35%] hidden md:block bottom-[27%] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[48%] hidden md:block bottom-[33%] text-stroke-tr text-[4rem] font-extrabold rotate-45'>ME</span>
      <div className="w-full text-center  flex flex-col justify-center items-center pt-4 md:pt-6 xl:pt-8 sxl:items-end sxl:pt-16">
        <h1 className='slide-in-blurred-top text-[3rem] text-center text-textColor font-extrabold sxl:pr-[15%]'>About Me</h1>
        <p className="md:w-2/3 glassy">
        I&apos;m Ayomide, a full-stack developer driven by a passion for transforming ideas into digital reality. With a focus on both front-end finesse and back-end robustness, I thrive in the creative process of building intuitive, user-centric websites and applications.
        </p>
      </div>

      <Navigations />
      <Illustrations 
        alt='a man siiting in office - illusrating info about the developer'
        height={undefined}
        width={undefined}
        src={AboutIllus}
        className="-z-10 left-1 bottom-1 smm:bottom-1 absolute w-[28rem] md:bottom-4  md:w-[32rem] xl:w-[37rem] xl:right-2"
      />
    </main>
  )
}

export default About;
