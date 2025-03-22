"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { textSlide } from "@/components/animations/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  useEffect(() => {
    gsap.set(".ent-1", { x: -50})
    // gsap.set(".ent-2", { x: -50})
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


    tl.to(".ent-2", { x: 50, opacity: 0, duration: 0.3 }) 
      .to(".ent-1", { x: 0, opacity: 1, duration: 0.3 }, "<"); 
  };

  const textUnshift = () => {
    const tl = gsap.timeline();

    tl.to(".ent-1", { x: -50, opacity: 0, duration: 0.3 }) 
      .to(".ent-2", { x: 0, opacity: 1, duration: 0.3 }, "<"); 
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
          className="flex items-center justify-between w-[180px] bg-[#ef4826] hover:bg-[#26ef47] text-black p-4 rounded-br-lg"
          onMouseEnter={textShift}
          onMouseLeave={textUnshift}
        >
          <div className="text-sm  uppercase font-bold w-[47px] overflow-hidde flex items-center relativ">
            <p className="ent-1 absolute">enter</p>
            <p className="ent-2 absolute">enter</p>
          </div>
          <span>{">>"}</span>
        </Link>
      </div>
    </div>
  );
}
