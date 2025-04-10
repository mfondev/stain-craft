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
        <section className="min-h-[100vh] bg-black rounded-t-[50px] sticky top-0 panel flex brightness-75 panel_1 ">
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
              className="object-cover rounded-t-[50px]"
            />
          </div>
          <main className="bg-[#fff] main-section ">
            <section className="relative h-[100vh] flex scale-section">
              <div className="relative w-full h-full z-10 backgroundImg rightBlock">
                <Image
                  src="/images/bmw.jpg"
                  alt=""
                  fill
                  className="object-cover absolute top-0 left-0"
                />
                <Image
                  src="/images/koz_2.jpg"
                  alt=""
                  fill
                  className="object-cover absolute top-0 left-0"
                />
                <Image
                  src="/images/koz_3.jpg"
                  alt=""
                  fill
                  className="object-cover absolute top-0 left-0"
                />
                <ul className="z-50 text-white h-full flex flex-col justify-center items-center absolute top-0 left-0 w-full bg-black/25">
                  <li className="uppercase font-bold text-2xl">Maniacs</li>
                  <li className="uppercase font-bold text-2xl">Mission</li>
                  <li className="uppercase font-bold text-2xl">Machine</li>
                </ul>
              </div>
              <div className="absolute bg-[#eaece9] right-0 top-0 w-1/2 h-full flex items-center justify-center aboutSection">
                <div className=" px-[60px]">
                  <h1 className="text-[55px] font-extrabold uppercase headers mb-8">
                    MANIACS
                  </h1>
                  <h6 className="text-[32px] font-extrabold uppercase leading-8 mb-10">
                    Twins, born in Ukraine, raised in Canada. High School
                    dropouts. Trained in Italy and California. Oilstainlab is
                    their un-medicated vision, a pure manifest of automotive
                    excess & Fun.
                  </h6>
                  <article className="grid place-items-center bg-[#e2e2e2] relative w-full h-[500px] overflow-hidden  mb-8">
                    <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute w-full top-[-70px] left-[-690px]">
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                      <p className="text-[120px] font-extrabold uppercase mt-4">
                        *
                      </p>
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                    </div>
                    <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute w-full top-[70px] left-[-690px] ">
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                      <p className="text-[120px] font-extrabold uppercase mt-4">
                        *
                      </p>
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                    </div>
                    <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute w-full top-[210px] left-[-690px]">
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                      <p className="text-[120px] font-extrabold uppercase mt-4">
                        *
                      </p>
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                    </div>
                    <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute w-full top-[350px] left-[-690px]">
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                      <p className="text-[120px] font-extrabold uppercase mt-4">
                        *
                      </p>
                      <h1 className="text-[180px] font-extrabold uppercase">
                        maniacs
                      </h1>
                    </div>
                  </article>
                  <div className="flex items-start justify-between mb-14">
                    <h2 className="uppercase text-sm max-w-[60px]">
                      double vision
                    </h2>
                    <p className="max-w-[480px] text-sm ">
                      Our founders “the twins” as commonly referred to by the
                      industry, have been breaking rules and records; clinching
                      world championships and responsible for 6.5 million street
                      cars. Maniacally obsessed with forging vehicles,
                      experiences and technologies beyond sanity. Inspired by
                      those before them, Oilstainlab is a new generation of
                      trouble makers, maniacs creating for maniacs.
                    </p>
                  </div>
                  <div className="w-[1px]  bg-[#bfc1bf]  "></div>
                </div>
              </div>
            </section>
          </main>
        </section>
      </main>

    </>
  );
}
