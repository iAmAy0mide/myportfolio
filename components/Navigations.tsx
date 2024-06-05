"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigations: React.FC<INav> = ({ isModal }) => {
    const pathname = usePathname();

  return (
    <nav  className={`fixed text-white bottom-10 left-4 md:left-16 ${isModal ? '-z-10' : 'z-30'}`}>
      <div>
        <Link 
          href="/" 
          className={`block text-textColor text-[1.2rem] py-2 hover:px-2 light-up hover:pl-2 transition-all duration-500 ${pathname === "/" ? 'inner-shadow pl-2' : '' }`}
          >Home
          </Link>
          <div className="h-[2px] w-[5.5rem] bg-textColor"></div>
        </div>
        <div>
          <Link 
          href="/about" 
          className={`block text-textColor text-[1.2rem] py-2 hover:px-2 light-up hover:pl-2 transition-all duration-500 ${pathname === "/about" ? 'inner-shadow pl-2' : '' }`}
          >About</Link>
          <div className="h-[2px] w-[5.5rem] bg-textColor"></div>
        </div>
        <div>
          <Link 
          href="/skills" 
          className={`block text-textColor text-[1.2rem] py-2 hover:px-2 light-up hover:pl-2 transition-all duration-500 ${pathname === "/skills" ? 'inner-shadow pl-2' : '' }`}
          >Techs</Link>
          <div className="h-[2px] w-[5.5rem] bg-textColor"></div>
        </div>
        <div>
          <Link 
          href="/contact" 
          className={`block text-textColor  text-[1.2rem] py-2 hover:px-2 light-up hover:pl-2 transition-all duration-500 ${pathname === "/contact" ? 'inner-shadow pl-2' : '' }`}
          >Contact</Link>
          <div className="h-[2px] w-[5.5rem] bg-textColor"></div>
        </div>
       
        <div>
          <Link 
          href="/projects" 
          className={`block text-textColor text-[1.2rem] py-2 hover:px-2 light-up hover:pl-2 transition-all duration-500 ${pathname === "/projects" ? 'inner-shadow' : '' }`}
          >Projects</Link>
          <div className="h-[2px] w-[5.5rem] bg-textColor"></div>
        </div>
    </nav>
  )
}

export default Navigations;
