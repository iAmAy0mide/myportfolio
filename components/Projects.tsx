import Navigations from '@/components/Navigations';
import proto from "/public/proto.png";
import Bashorun from "/public/bashorun.png";
import Project from '@/components/Project';


const Projects = () => {

  return (
    <main id='projects' className=' gap-4 mt-4 grid  grid-cols-1 sm:grid-cols-2 md:grid-col-3 px-4 md:px-16'>
    {/* <main id='projects' className='mt-6 mx-4 w-full space-y-4'> */}
       <Project
          alt='a representative image of Sevlar - a bank mangement web app'
          logoAlt='a representative logo of Sevlar - a bank mangement web app'
          src={proto} 
          logoSrc={Bashorun}
          projectName={'Bashorunolu Legal Website'} 
          description={'This website is a law firm greatest.'}
        />
       <Project
          alt='a representative image of Sevlar - a bank mangement web app'
          logoAlt='a representative logo of Sevlar - a bank mangement web app'
          src={proto} 
          logoSrc={Bashorun} 
          projectName={'Bashorunolu Legal Website'} 
          description={'This website is a law firm greatest.'}
        />
      <Navigations isModal={true} />
    </main>
  )
}

export default Projects
