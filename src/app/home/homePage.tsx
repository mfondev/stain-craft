"use client";

import Navbar from "@/components/mainNavigation/navbar";
import React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import gsap from "gsap";
import {
  createScroll01,
  hfAnimation,
  homeAnimation,
} from "@/components/animations/animation";
import Image from "next/image";
import IntroPage from "@/components/introPage";
import HomeHero from "@/components/homeHero";
import Footer from "@/components/mainNavigation/footer";

export default function HomePage() {
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    createScroll01();
  }, []);
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
      [".overlay", ".intro-section"],
      {
        y: 0,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          gsap.to(".intro-section", {
            y: "-100%",
            duration: 1.5,
            ease: "power2.inOut",
          });
        },
        onComplete: () => {
          document.documentElement.style.overflow = "auto";
          const introSection = document.querySelector(
            ".intro-section"
          ) as HTMLElement;
          if (introRef.current) {
            introRef.current.style.display = "none";
          }
          if (introSection) introSection.style.display = "none";
          homeAnimation();
          hfAnimation();
        },
      },
      "-=0.5"
    );
  };

  return (
    <>
      <IntroPage onHomePageReveal={homeRoute} ref={introRef} />
      <main className="relative bg-[#eaece9">
        <Navbar />
        <div className="bg-bottom-image h-screen sticky top-0 panel">
          <article className="sticky top-0 panel pt-[80px] articleHead">
            {/* <Image
              src="/images/bgg.webp"
              alt="dummy image"
              width={1200}
              height={100}
              className="object-cover absolute left-1/2 top-[-320px] mb-8 transform -translate-x-1/2 carImg z-30 w-[1800px] lg:h-[780px] md:w-[800px] md:h-[900px]"
            /> */}
            {/* <div className="top-0 md:top-[-400px] lg:top-[-320px] absolute w-full">
              <div className="relative w-[600px] md:w-[1200px] lg:w-full lg:h-[780px] h-[900px] transform -translate-x-1/2 left-1/2">
                <Image
                  src="/images/bgg.webp"
                  alt="dummy image"
                  fill
                  className="carImg z-30 object-contain"
                />
              </div>
            </div> */}

            <div className=" h-screen relative">
              <div className="h-[200px] overflow-hidden absolute left-0 top-0 ">
                <h1 className="hf1 text-[120px] md:text-[162px] lg:text-[250px] leading-[1] font-extrabold h-full">
                  MF
                </h1>
                <h1 className="hf2 text-[120px] md:text-[162px] lg:text-[250px] leading-[1] font-extrabold h-full">
                  MF
                </h1>
              </div>

              <main className="w-full px-6 flex flex-col justify-center items-center absolute lg:bottom-20 bottom-30 md:bottom-35 lg:left-[140px] lg:mb-8 lg:mx-0 z-40">
                <div className="h-[30px] overflow-hidden md:text-center">
                  <h2 className="uppercase text-[30px] leading-[1] font-extrabold lm1">
                    Less is more,
                  </h2>
                </div>
                <div className="h-[30px] overflow-hidden md:text-center">
                  <h2 className="uppercase text-[30px] leading-[1] font-extrabold  lm1">
                    More is less.
                  </h2>
                </div>
                <Link
                  href=""
                  className="flex flex-col items-center text-center mt-5 mb-10 watchVideo md:items-center md:justify-center"
                >
                  <div className="flex items-center ">
                    <p className="uppercase text-sm font-bold">watch video</p>
                    <IoMdArrowDropright className="text-xl" />
                  </div>
                </Link>
                <main className="w-full lg:w-[320px]">
                  <div className="stats">
                    <div className="flex items-center justify-between w-full mb-2 ">
                      <span className="h-[30px] w-[58px]  overflow-hidden flex flex-col items-center">
                        <h4 className="italic mt-1 text-[21px] h-full statText1">
                          1,950
                        </h4>
                        <h4 className="italic mt-1 text-[21px] statText2">
                          1,950
                        </h4>
                      </span>
                      <h5 className="uppercase font-normal text-sm">
                        weight (lbs)
                      </h5>
                    </div>
                    <div className="h-[1px]  bg-[#bfc1bf]  "></div>
                  </div>
                  <div className="stats">
                    <div className="flex items-center justify-between w-full mb-2 ">
                      <span className="h-[30px] w-[35px]  overflow-hidden flex flex-col items-center">
                        <h4 className="italic mt-1 text-[21px] h-full statText1">
                          3.2
                        </h4>
                        <h4 className="italic mt-1 text-[21px] statText2">
                          3.2
                        </h4>
                      </span>
                      <h5 className="uppercase font-normal text-sm">
                        seconds (0-60)
                      </h5>
                    </div>
                    <div className="h-[1px]  bg-[#bfc1bf]  "></div>
                  </div>
                  <div className="stats">
                    <div className="flex items-center justify-between w-full mb-2 ">
                      <span className="h-[30px] w-[70px]  overflow-hidden flex flex-col items-center">
                        <h4 className="italic mt-1 text-[21px] h-full statText1">
                          12,000
                        </h4>
                        <h4 className="italic mt-1 text-[21px] statText2">
                          12,000
                        </h4>
                      </span>
                      <h5 className="uppercase font-normal text-sm">rpm</h5>
                    </div>
                    <div className="h-[1px]  bg-[#bfc1bf]  "></div>
                  </div>
                  <div className="flex items-center justify-between w-full mb-2 stats">
                    <span className="h-[30px] w-[48px]  overflow-hidden flex flex-col items-center">
                      <h4 className="italic mt-1 text-[21px] h-full statText1">
                        650
                      </h4>
                      <h4 className="italic mt-1 text-[21px] statText2">650</h4>
                    </span>
                    <h5 className="uppercase font-normal text-sm">hp</h5>
                  </div>
                </main>
              </main>
              <div className="h-[200px] overflow-hidden  leading-[1] font-extrabold absolute lg:right-0 lg:bottom-25 lg:eleven top-0 right-0 ">
                <h1 className="hf1 text-[120px] md:text-[162px] lg:text-[250px] leading-[1] font-extrabold h-full ">
                  47
                </h1>
                <h1 className="hf2 text-[120px] md:text-[162px] lg:text-[250px] leading-[1] font-extrabold h-full ">
                  47
                </h1>
              </div>
            </div>
          </article>
        </div>
        <HomeHero />
      </main>
      <Footer />
    </>
  );
}
