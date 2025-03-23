"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { textSlide } from "@/components/animations/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlArrowRight } from "react-icons/sl";
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
    textSlide();
  }, []);

  const wrapText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} className="inline-block">
        {char}
      </span>
    ));
  };

  const textShift = () => {
    const tl = gsap.timeline();
    tl.to(".ent-2", { x: 50, duration: 0.3 })
      .to(".ent-1", { x: 47, duration: 0.3 }, "<")
      .to(".arr-1", { x: 30, duration: 0.3 },"-=0.5")
      .to(".arr-2", { x: 30, duration: 0.3 }, "-=0.5")
      .to(".arr-3", { x: 30, duration: 0.3 }, "-=0.5")
      .to(".arr-4", { x: 30, duration: 0.3 }, "-=0.5");
  };

  const textUnshift = () => {
    const tl = gsap.timeline();

    tl.to(".ent-1", { x: -3, duration: 0.3 })
      .to(".ent-2", { x: 0, duration: 0.3 }, "<")
      .to(".arr-1", { x: -50, duration: 0.3 })
      .to(".arr-2", { x: 0, duration: 0.3 }, "<")
      .to(".arr-3", { x: 0, duration: 0.3 }, "<")
      .to(".arr-4", { x: 0, duration: 0.3 }, "<");
  };

  return (
    <div className="bg-black text-white h-screen px-6 pb-6 flex flex-col justify-between">
      <div className="bg-black text-white h-screen p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="h-[110px] overflow-hidden flex flex-col">
            <h1 className="text-[120px] uppercase font-extrabold h-full h-text1">
              {wrapText("Bespoke")}
            </h1>
            <h1 className="text-[120px] uppercase font-extrabold h-text2">
              {wrapText("Bespoke")}
            </h1>
          </div>
          <div className="h-[110px] overflow-hidden flex flex-col ml-[400px]">
            <h1 className="text-[120px] uppercase font-extrabold h-full h-text1">
              {wrapText("Myth")}
            </h1>
            <h1 className="text-[120px] uppercase font-extrabold h-text2">
              {wrapText("Myth")}
            </h1>
          </div>
          <div className="h-[110px] overflow-hidden flex flex-col">
            <h1 className="text-[120px] uppercase font-extrabold h-full h-text1">
              {wrapText("Chaos")}
            </h1>
            <h1 className="text-[120px] uppercase font-extrabold h-text2">
              {wrapText("Chaos")}
            </h1>
          </div>
          <div className="h-[110px] overflow-hidden flex flex-col ml-[130px]">
            <h1 className="text-[120px] uppercase font-extrabold h-full h-text1">
              {wrapText("Maniac")}
            </h1>
            <h1 className="text-[120px] uppercase font-extrabold h-text2">
              {wrapText("Maniac")}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between l-footer">
        <h3 className="text-sm uppercase">CALIFORNIA, USA, 90757</h3>
        <Link
          href=""
          className="flex items-center justify-between w-[180px] bg-[#ef4826] hover:bg-[#26ef47] text-black p-4 rounded-br-lg "
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="uppercase font-bold w-[49px] h-[20px] overflow-hidden flex items-center relative">
            <p className="left-[-46px] ent-1 absolute text-sm ">enter</p>
            <p className="ent-2 absolute text-sm">enter</p>
          </div>
          <div
            className=" w-[30px] h-[20px] flex items-center justify-between overflow-hidden relative"
            
          >
            <div className="flex items-center justify-between w-[15px] absolute left-[-15px]">
              <SlArrowRight className="text-sm absolut arr-1" />
            </div>
            <div className="flex items-center justify-between w-[15px] absolute left-[-30px] ">
              <SlArrowRight className="text-sm  arr-2" />
            </div>
            <div className="flex items-center justify-between w-[15px] absolut">
              <SlArrowRight className="text-sm  arr-3" />
            </div>
            <div className="flex items-center justify-between w-[15px] ">
              <SlArrowRight className="text-sm  arr-4" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
