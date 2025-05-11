"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { textSlide, textUnslide } from "@/components/animations/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlArrowRight } from "react-icons/sl";
gsap.registerPlugin(ScrollTrigger);
import { forwardRef } from "react";

type Props = {
  onHomePageReveal: (e: React.FormEvent<HTMLElement>) => void;
};

export default forwardRef<HTMLElement, Props>(function IntroPage(
  { onHomePageReveal }: Props,
  ref
) {
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

  return (
    <>
      <main
        className="fixed top-0 left-0 w-full h-screen overflow-hidden z-50 "
        ref={ref}
      >
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/images/intro.mp4" type="video/mp4" />
        </video>
        <section className="intro-section flex flex-col justify-center h-screen px-4 md:px-8 z-10 bg-black md:py-8">
          <article className="flex flex-col justify-between h-[94vh] relative z-10">
            <div className="text-white">
              <div className="flex flex-col md:gap-4">
                <div className="h-[60px] md:h-[110px] overflow-hidden flex flex-col">
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-full h-text1">
                    {wrapText("Bespoke")}
                  </h1>
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-text2">
                    {wrapText("Bespoke")}
                  </h1>
                </div>
                <div className="h-[60px] md:h-[110px] overflow-hidden flex flex-col ml-[60px] md:ml-[200px] lg:ml-[400px]">
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-full h-text1">
                    {wrapText("Myth")}
                  </h1>
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-text2">
                    {wrapText("Myth")}
                  </h1>
                </div>
                <div className="h-[60px] md:h-[110px] overflow-hidden flex flex-col">
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-full h-text1">
                    {wrapText("Chaos")}
                  </h1>
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-text2">
                    {wrapText("Chaos")}
                  </h1>
                </div>
                <div className="h-[60px] md:h-[110px] overflow-hidden flex flex-col ml-[24px] md:ml-[200px] lg:ml-[130px]">
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-full h-text1">
                    {wrapText("Maniac")}
                  </h1>
                  <h1 className="text-[60px] md:text-[120px] leading-[1] uppercase font-extrabold h-text2">
                    {wrapText("Maniac")}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-0 uppercase md:flex-row md:justify-between md:items-center l-footer">
              <h3 className="text-sm uppercase text-white">
                CALIFORNIA, USA, 90757
              </h3>
              <Link
                href=""
                onClick={onHomePageReveal}
                className="flex items-center justify-between w-full md:w-[190px] bg-[#ef4826] hover:bg-[#26ef47] text-black p-3 md:p-5 rounded-br-[15px]"
                onMouseEnter={textShift}
                onMouseLeave={textUnshift}
              >
                <div className="uppercase font-bold w-[49px] h-[20px] overflow-hidden flex items-center relative">
                  <p className="left-[-46px] ent-1 absolute text-[14px] font-bold">
                    enter
                  </p>
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
          </article>
        </section>
        <div className="overlay absolute inset-0 w-full h-full bg-white "></div>
      </main>
    </>
  );
});
