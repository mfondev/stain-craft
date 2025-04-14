"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import About from "./about";

export default function HomeHero() {
  const menuItems = [
    "Power",
    "Origin",
    "Beauty",
    "Asylum",
    "Obsession",
    "Strength",
  ];

  useEffect(() => {

    const animation = gsap.fromTo(
      ".menuLink",
      {
        x: -120,
        opacity: 0
      },
      { x: 0, duration: 0.4, stagger: 0.2, opacity: 1 }
    );
    ScrollTrigger.create({
      trigger: ".secondCarView",
      animation: animation,
      start: "top top",
      toggleActions: "play reverse play reverse",
      markers: true,
    });
  }, []);

  return (
    <>
      <main className="relative">
        <section className="min-h-screen bg-black rounded-t-[50px] sticky top-0 panel flex brightness-75 panel_1">
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
        <section className="rounded-t-[50px] sticky top-0 panel secondCarView">
          <main className="relative">
            <ul className="flex flex-col space-y-6 w-[200px] absolute top-1/2 left-0 text-center z-20">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className=" group flex items-center gap-4 cursor-pointer transition-all duration-300"
                >
                  <p className="w-[0px] bg-black h-[1px] transition-all duration-300 group-hover:w-[32px]"></p>
                  <p className="bg-[#ef4826] w-2 h-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
                  <h1 className="menuLink text-[#6b6b6b] uppercase font-extrabold text-sm transition-all duration-300 group-hover:text-black group-hover:text-base  ">
                    {item}
                  </h1>
                </li>
              ))}
            </ul>
            <div
              className=" relative h-[110vh]
            "
            >
              <Image
                src="/images/koz_1.jpg"
                alt=""
                fill
                className="object-cover rounded-t-[50px]"
              />
            </div>
          </main>
          <main className="bg-[#fff] main-section ">
            <About />
          </main>
        </section>
      </main>
    </>
  );
}
