"use client";

import React, { useRef, useEffect,useState } from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import gsap from "gsap";
import Gallery from "../gallery/gallery";

const Navbar = () => {
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
  
      if (navbarRef.current) {
        if (scrollTop === 0) {
          navbarRef.current.style.backgroundColor = "transparent";
          navbarRef.current.style.top = "0"; 
        } else if (scrollTop > lastScrollTop.current) {
          navbarRef.current.style.top = "-100px";
        } else {
          navbarRef.current.style.top = "0"; 
          navbarRef.current.style.backgroundColor = "white";
        }
  
        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  const textShift = (e: React.FormEvent<HTMLElement>) => {
    const link = e.currentTarget;
    const tl = gsap.timeline();
    tl.to(link.querySelector(".ent-2"), { x: 80, duration: 0.3 })
      .to(link.querySelector(".ent-1"), { x: 86, duration: 0.3 }, "<")
      .to(
        link.querySelectorAll(".arr-1, .arr-2, .arr-3, .arr-4"),
        { x: 15, duration: 0.3 },
        "<"
      );
  };

  const textUnshift = (e: React.FormEvent<HTMLElement>) => {
    const link = e.currentTarget;
    const tl = gsap.timeline();

    tl.to(link.querySelector(".ent-1"), { x: -3, duration: 0.3 })
      .to(link.querySelector(".ent-2"), { x: 0, duration: 0.3 }, "<")
      .to(
        link.querySelectorAll(".arr-1, .arr-2, .arr-3, .arr-4"),
        { x: 0, duration: 0.3 },
        "<"
      );
  };

  const handleGalleryClick = (e: React.MouseEvent) => {

    setGalleryOpen(true);
  }

  const handleCloseGallery = () => {
    setGalleryOpen(false);
    document.documentElement.style.overflow = "auto";
  };

  return (
    <nav
      className="flex justify-between items-center px-4 md:px-8 py-3 bg-transparent text-black cursor-pointer fixed w-full top-0 z-30"
      ref={navbarRef}
      style={{ transition: "top 0.3s ease" }}
    >
      <Link href="/" className="text-2xl font-extrabold uppercase">
        StainCraft
      </Link>
      <div className="flex items-center space-x-6">
        {galleryOpen && <Gallery closeGallery={handleCloseGallery}/>}
        <Link
          href="#gallery"
          onClick={handleGalleryClick}  
          className="uppercase font-extrabold text-[12px] hidden lg:flex"
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[65px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-85px] ent-1 absolute font-extrabold text-[12px] ">
              gallery
            </p>
            <p className="ent-2 absolute font-extrabold text-[12px]">gallery</p>
          </div>
        </Link>
        <Link
          href="#car-tour"
          className="uppercase font-extrabold text-[12px] hidden lg:flex"
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[80px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-85px] ent-1 absolute font-extrabold text-[12px] ">
              car tour
            </p>
            <p className="ent-2 absolute font-extrabold text-[12px]">
              car tour
            </p>
          </div>
        </Link>
        <Link
          href="#about"
          className="uppercase font-extrabold text-[12px] hidden lg:flex"
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[59px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-85px] ent-1 absolute font-extrabold text-[12px] ">
              about
            </p>
            <p className="ent-2 absolute font-extrabold text-[12px]">about</p>
          </div>
        </Link>
        <Link
          href="#car-tour"
          className="flex items-center justify-between w-[140px] bg-black text-white py-3 px-4 rounded-br-[15px] "
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[80px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-80px] ent-1 absolute font-extrabold text-[12px] ">
              ownership
            </p>
            <p className="ent-2 absolute font-extrabold text-[12px]">
              ownership
            </p>
          </div>
          <div className=" w-[15px] h-[15px] flex items-center justify-between overflow-hidden relative">
            <div className="flex items-center justify-between w-[15px] absolute left-[-10px]">
              <SlArrowRight className="text-[10px] absolu arr-1" />
            </div>
            <div className="flex items-center justify-between w-[15px] absolute left-[-18px] ">
              <SlArrowRight className="text-[10px] arr-2" />
            </div>
            <div className="flex items-center justify-between w-[15px] absolute left-[5px] ">
              <SlArrowRight className="text-[10px] arr-3" />
            </div>
            <div className="flex items-center justify-between w-[15px] absolute left-[-2px] ">
              <SlArrowRight className="text-[10px]  arr-4" />
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
