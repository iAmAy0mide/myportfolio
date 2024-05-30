import Illustrations from '@/components/Illustrations';
import Navigations from '@/components/Navigations';
import AboutIllus from "/public/about.svg";

const page = () => {
  return (
    <main className='min-h-screen'>
      <div className="text-center pt-[3rem]  md:pt-[4rem] z-10 sm:w-2/3 md:w-1/2 mx-auto md:px-8">
        <span className='absolute text-stroke-tr -z-10 left-10 top-5 text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 top-[10rem] hidden sm:block left-20 bottom-10 text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 bottom-20 right-20 text-stroke-tr text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 bottom-[10rem] hidden sm:block left-10 text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 top-[15rem] left-[23rem] text-stroke-tr text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 top-[18rem] left-[18rem] text-stroke-tr text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 -top-[15rem] -left-[15rem]  text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[15rem] hidden sm:block bottom-[15rem] text-stroke-tr text-[4rem] font-extrabold rotate-45'>ME</span>
        <span className='absolute -z-10 right-[14rem] bottom-[18rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[18rem] hidden sm:block bottom-[8rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[25rem] bottom-[30rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 left-[25rem] hidden sm:block top-[30rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[30rem] bottom-[30rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 top-[3rem] hidden sm:block left-[30rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 bottom-[3rem] right-[30rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[35rem] bottom-[10rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[3rem] top-[2rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 left-[3rem] bottom-[2rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 left-[10rem] bottom-[5rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <span className='absolute -z-10 right-[3rem] bottom-[2rem] text-stroke-tr text-[4rem] font-extrabold -rotate-45'>ME</span>
        <h1 className='slide-in-blurred-top text-center text-[3rem] text-textColor font-extrabold'>About Me</h1>
        <p className="">
        I'm Ayomide, a full-stack developer driven by a passion for transforming ideas into digital reality. With a focus on both front-end finesse and back-end robustness, I thrive in the creative process of building intuitive, user-centric websites and applications.
        </p>
      </div>
      <Navigations />
      <Illustrations 
        alt='a man siiting in office - illusrating info about the developer'
        height={undefined}
        width={undefined}
        src={AboutIllus}
      />
    </main>
  )
}

export default page;
