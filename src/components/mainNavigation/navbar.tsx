"use client";

import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlArrowRight } from "react-icons/sl";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const textShift = (e: React.FormEvent<HTMLElement>) => {
    const link = e.currentTarget;
    const tl = gsap.timeline();

    tl.to(link.querySelector(".ent-2"), { x: 89, duration: 0.3 })
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

  return (
    <nav className="flex justify-between items-center p-4  text-black cursor-pointer">
      <Link href="/" className="text-2xl font-extrabold uppercase">StainCraft</Link>

      <div className="flex items-center space-x-6">
        <Link
          href="#gallery"
          className="uppercase font-extrabold text-sm font-bol"
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[65px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-85px] ent-1 absolute font-extrabold text-sm ">gallery</p>
            <p className="ent-2 absolute font-extrabold text-sm">gallery</p>
          </div>
        </Link>
        <Link
          href="#car-tour"
          className="uppercase font-extrabold text-sm"
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[80px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-85px] ent-1 absolute font-extrabold text-sm ">car tour</p>
            <p className="ent-2 absolute font-extrabold text-sm">car tour</p>
          </div>
        </Link>
        <Link
          href="#about"
          className="uppercase font-extrabold text-sm "
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[59px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-85px] ent-1 absolute font-extrabold text-sm ">about</p>
            <p className="ent-2 absolute font-extrabold text-sm">about</p>
          </div>
        </Link>
        <Link
          href=""
          className="flex items-center justify-between w-[180px] bg-black text-white p-4 rounded-br-lg "
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[89px] h-[20px] overflow-hidden  flex items-center relative">
            <p className="left-[-85px] ent-1 absolute font-extrabold text-sm ">ownership</p>
            <p className="ent-2 absolute font-extrabold text-sm">ownership</p>
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
