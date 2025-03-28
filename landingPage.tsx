"use client";

import React, { FormEvent, useEffect } from "react";
import Link from "next/link";
import { textSlide, textUnslide } from "@/components/animations/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const router = useRouter();
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
      .to(".arr-1", { x: 15, duration: 0.3 }, "<")
      .to(".arr-2", { x: 16, duration: 0.3 }, "<")
      .to(".arr-3", { x: 15, duration: 0.3 }, "<")
      .to(".arr-4", { x: 15, duration: 0.3 }, "<");
  };

  const textUnshift = () => {
    const tl = gsap.timeline();

    tl.to(".ent-1", { x: -3, duration: 0.3 })
      .to(".ent-2", { x: 0, duration: 0.3 }, "<")
      .to(".arr-1", { x: 0, duration: 0.3 })
      .to(".arr-2", { x: 0, duration: 0.3 }, "<")
      .to(".arr-3", { x: 0, duration: 0.3 }, "<")
      .to(".arr-4", { x: 0, duration: 0.3 }, "<");
  };

  const homeRoute = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const timeline = gsap.timeline();

    const text2Letters = gsap.utils.toArray(".h-text2 span");

    timeline.to(text2Letters, {
      y: -240,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out",
    });

    timeline.to(
      ".overlay",
      {
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=0.5"
    );
    timeline.call(() => {
      router.push("/home");
    });
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="bg-black h-screen text-white px-6 pb-6 flex flex-col justify-between">
          <div className="bg-black text-white h-screen p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="h-[110px] overflow-hidden flex flex-col">
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-full h-text1">
                  {wrapText("Bespoke")}
                </h1>
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-text2">
                  {wrapText("Bespoke")}
                </h1>
              </div>
              <div className="h-[110px] overflow-hidden flex flex-col ml-[400px]">
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-full h-text1">
                  {wrapText("Myth")}
                </h1>
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-text2">
                  {wrapText("Myth")}
                </h1>
              </div>
              <div className="h-[110px] overflow-hidden flex flex-col">
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-full h-text1 ">
                  {wrapText("Chaos")}
                </h1>
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-text2">
                  {wrapText("Chaos")}
                </h1>
              </div>
              <div className="h-[110px] overflow-hidden flex flex-col ml-[130px]">
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-full h-text1">
                  {wrapText("Maniac")}
                </h1>
                <h1 className="text-[120px] leading-[1] uppercase font-extrabold h-text2">
                  {wrapText("Maniac")}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between l-footer">
            <h3 className="text-sm uppercase">CALIFORNIA, USA, 90757</h3>
            <Link
              href=""
              onClick={homeRoute}
              className="flex items-center justify-between w-[180px] bg-[#ef4826] hover:bg-[#26ef47] text-black p-4 rounded-br-lg "
              onMouseEnter={textShift}
              onMouseLeave={textUnshift}
            >
              <div className="uppercase font-bold w-[49px] h-[20px] overflow-hidden flex items-center relative">
                <p className="left-[-46px] ent-1 absolute text-[14px] font-bold">enter</p>
                <p className="ent-2 absolute text-[14px] font-bold">enter</p>
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
        </div>

        <div className="overlay absolute inset-0 w-full h-full bg-white z-50"></div>
      </div>
    </>
  );
}
