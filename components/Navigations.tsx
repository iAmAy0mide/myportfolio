"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigations = () => {
    const pathname = usePathname();

  return (
    <nav  className="absolute text-white bottom-10 left-16 space-y-6 z-10">
        <Link 
          href="/" 
          className={`block text-textColor font-bold text-[1.2rem] ${pathname === "/" ? '' : '' }`}
          >Home</Link>
        <Link 
          href="/about" 
          className={`block text-textColor font-bold text-[1.2rem] ${pathname === "/about" ? '' : '' }`}
          >About</Link>
        <Link 
          href="/contact" 
          className={`block text-textColor font-bold text-[1.2rem] ${pathname === "/contact" ? '' : '' }`}
          >Contact</Link>
        <Link 
          href="/skills" 
          className={`block text-textColor font-bold text-[1.2rem] ${pathname === "/skills" ? '' : '' }`}
          >Skills</Link>
        <Link 
          href="/projects" 
          className={`block text-textColor font-bold text-[1.2rem] ${pathname === "/projects" ? '' : '' }`}
          >Projects</Link>
    </nav>
  )
}

export default Navigations;
