"use client";

import Navbar from "@/components/mainNavigation/navbar";
import React from "react";
import { useEffect, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(true);
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

      <main className="relative bg-[#eaece9] ">
        <Navbar />
        <article className="sticky top-0 panel pt-[80px] articleHead">
          <Image
            src="/images/dropImg.png"
            alt="dummy image"
            width={400}
            height={400}
            className="object-cover absolute left-1/2 top-[-320px] mb-8 transform -translate-x-1/2 carImg z-40"
          />
          <div className="bg-[#eaece9] h-screen relative">
            <div className="h-[200px] overflow-hidden absolute left-0 top-0 ">
              <h1 className="hf1 text-[250px] leading-[1] font-extrabold h-full">
                MF
              </h1>
              <h1 className="hf2 text-[250px] leading-[1] font-extrabold h-full">
                MF
              </h1>
            </div>
            <main className="flex flex-col justify-cente items-cente absolute left-1/2 bottom-15 mb-8 transform -translate-x-1/2 ml-[140px] ">
              <div className="h-[30px] overflow-hidden ">
                <h2 className="uppercase text-[30px] leading-[1] font-extrabold  lm1">
                  Less is more,
                </h2>
              </div>
              <div className="h-[30px] overflow-hidden ">
                <h2 className="uppercase text-[30px] leading-[1] font-extrabold  lm1">
                  More is less.
                </h2>
              </div>
              <Link
                href=""
                className="flex items-center text-left mt-5 mb-10 watchVideo"
              >
                <p className="uppercase text-sm font-bold">watch video</p>
                <IoMdArrowDropright className="text-xl" />
              </Link>
              <main className="w-[280px]">
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
                      <h4 className="italic mt-1 text-[21px] statText2">3.2</h4>
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
            <div className="h-[200px] overflow-hidden  leading-[1] font-extrabold absolute right-0 bottom-15 eleven">
              <h1 className="hf1  text-[250px] leading-[1] font-extrabold h-full ">
                47
              </h1>
              <h1 className="hf2  text-[250px] leading-[1] font-extrabold h-full ">
                47
              </h1>
            </div>
          </div>
        </article>
        <HomeHero />
      </main>
      <Footer />
    </>
  );
}
