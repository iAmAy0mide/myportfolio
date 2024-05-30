import Illustrations from '@/components/Illustrations';
import Navigations from '@/components/Navigations';
import AboutIllus from "/public/about.svg";

const page = () => {
  return (
    <main className='main'>
      <div className="text-center pt-[3rem]  md:pt-[4rem] z-10 bg-bgColor w-[400px] mx-auto">
        <h1 className='slide-in-blurred-top text-center text-[3rem] text-textColor font-extrabold shadow'>About Me</h1>
        <p className="">
        I'm [Your Name], a full-stack developer driven by a passion for transforming ideas into digital reality. With a focus on both front-end finesse and back-end robustness, I thrive in the creative process of building intuitive, user-centric websites and applications.
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
