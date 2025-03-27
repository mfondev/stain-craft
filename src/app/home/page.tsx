"use client";

import Navbar from "@/components/mainNavigation/navbar";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { hfAnimation, homeAnimation, } from "@/components/animations/animation";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    homeAnimation()
    hfAnimation();

  }, []);

  return (
    <>
      <div className="bg-[#eaece9] h-screen relative">
        <Navbar />
        <Image
          src="/images/dummyimage.png"
          alt="dummy image"
          width={400}
          height={400}
          className="object-cover absolute left-1/2 top-[-320px] mb-8 transform -translate-x-1/2 carImg"
        />
        <div className="h-[200px] overflow-hidden ">
          <h1 className="hf1 text-[250px] leading-[1] font-extrabold h-full ">
            HF
          </h1>
          <h1 className="hf2 text-[250px] leading-[1] font-extrabold h-full">
            HF
          </h1>
        </div>
        <main className="flex flex-col justify-cente items-cente absolute left-1/2 bottom-0 mb-8 transform -translate-x-1/2 ml-[140px] ">
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
          <Link href="" className="flex items-center text-left mt-5 mb-10 watchVideo">
            <p className="uppercase text-sm font-bold">watch video</p>
            <IoMdArrowDropright className="text-xl" />
          </Link>
          <main className="w-[280px]">
            <div className="stats">
              <div className="flex items-center justify-between w-full mb-2 ">
                <span className="h-[30px] w-[58px]  overflow-hidden flex flex-col items-center">
                <h4 className="italic mt-1 text-[21px] h-full statText1">1,950</h4>
                <h4 className="italic mt-1 text-[21px] statText2">1,950</h4>
                </span>
                <h5 className="uppercase font-normal text-sm">weight (lbs)</h5>
              </div>
              <div className="h-[1px]  bg-[#bfc1bf]  "></div>
            </div>
            <div className="stats">
              <div className="flex items-center justify-between w-full mb-2 ">
              <span className="h-[30px] w-[35px]  overflow-hidden flex flex-col items-center">
                <h4 className="italic mt-1 text-[21px] h-full statText1">3.2</h4>
                <h4 className="italic mt-1 text-[21px] statText2">3.2</h4>
                </span>
                <h5 className="uppercase font-normal text-sm">seconds (0-60)</h5>
              </div>
              <div className="h-[1px]  bg-[#bfc1bf]  "></div>
            </div>
            <div className="stats">
              <div className="flex items-center justify-between w-full mb-2 ">
              <span className="h-[30px] w-[70px]  overflow-hidden flex flex-col items-center">
                <h4 className="italic mt-1 text-[21px] h-full statText1">12,000</h4>
                <h4 className="italic mt-1 text-[21px] statText2">12,000</h4>
                </span>
                <h5 className="uppercase font-normal text-sm">rpm</h5>
              </div>
              <div className="h-[1px]  bg-[#bfc1bf]  "></div>
            </div>
            <div className="flex items-center justify-between w-full mb-2 stats">
            <span className="h-[30px] w-[48px]  overflow-hidden flex flex-col items-center">
                <h4 className="italic mt-1 text-[21px] h-full statText1">650</h4>
                <h4 className="italic mt-1 text-[21px] statText2">650</h4>
                </span>
              <h5 className="uppercase font-normal text-sm">hp</h5>
            </div>
          </main>
        </main>
        <div className="h-[200px] overflow-hidden  leading-[1] font-extrabold absolute right-0 bottom-[0px] ">
          <h1 className="hf1 text-[250px] leading-[1] font-extrabold h-full ">
            11
          </h1>
          <h1 className="hf2 text-[250px] leading-[1] font-extrabold h-full">
            11
          </h1>
        </div>
      </div>
    </>
  );
}
