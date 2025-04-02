"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { scaleAnimation } from "./animations/animation";

export default function HomeHero() {
  useEffect(() => {
    scaleAnimation();
  }, []);

  return (
    <>
      <main className="relative">
        <section className="min-h-[100vh] bg-black rounded-t-[50px] car-sectio sticky top-0 panel flex brightness-75 panel_1 ">
          <div className="relative w-1/2">
            <Image
              src="/images/koz_1.jpg"
              alt=""
              fill
              className="object-cover rounded-tl-[50px]"
            />
          </div>
          <div className="w-[1px] bg-[#c4c0c0]"></div>
          <div className="relative w-1/2">
            <Image
              src="/images/koz_2.jpg"
              alt=""
              fill
              className="object-cover rounded-tr-[50px]"
            />
            <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-whit z-20 flex flex-col gap-[200px]">
              <span>
                <h1 className="uppercase text-2xl text-left font-extrabold">
                  staincraft
                </h1>
                <p className="uppercase text-2xl text-left font-extrabold">
                  where the past overtakes the future
                </p>
              </span>
              <p className="uppercase text-2xl text-left font-extrabold">
                Hear sound
              </p>
            </div>
          </div>
        </section>
        <section className="h-[250vh] rounded-t-[50px] sticky top-0 panel">
          <div
            className=" relative h-[150vh]
          "
          >
            <Image
              src="/images/koz_1.jpg"
              alt=""
              fill
              className="object-cover rounded-tr-[50px]"
            />
          </div>
          <main className="bg-[#eaece9] main-section">
            <section className=" h-[100vh] relative flex scale-section">
              <div className="absolute bg-amber-400 right-0 top-0 w-1/2 h-full"></div>
              <div className="absolute inset-0 backgroundImg">
                <ul className="z-50 text-white place-items-cente h-[100vh] flex flex-col justify-center items-center">
                  <li className="uppercase font-bold text-2xl">Maniacs</li>
                  <li className="uppercase font-bold text-2xl">Mission</li>
                  <li className="uppercase font-bold text-2xl">Machine</li>
                </ul>
              </div>
            </section>
          </main>
        </section>
      </main>
    </>
  );
}
