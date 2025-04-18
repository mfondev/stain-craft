"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import About from "./mainNavigation/about/about";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { BsPlusLg } from "react-icons/bs";

export default function HomeHero() {
  const textShift = (e: React.FormEvent<HTMLElement>) => {
    const link = e.currentTarget;
    const tl = gsap.timeline();

    tl.to(link.querySelector(".ent-2"), { x: 135, duration: 0.3 })
      .to(link.querySelector(".ent-1"), { x: 135, duration: 0.3 }, "<")
      .to(
        link.querySelectorAll(".arr-1, .arr-2, .arr-3, .arr-4"),
        { x: 15, duration: 0.3 },
        "<"
      );
  };

  const textUnshift = (e: React.FormEvent<HTMLElement>) => {
    const link = e.currentTarget;
    const tl = gsap.timeline();

    tl.to(link.querySelector(".ent-1"), { x: -3, duration: 0.3 })
      .to(link.querySelector(".ent-2"), { x: 0, duration: 0.3 }, "<")
      .to(
        link.querySelectorAll(".arr-1, .arr-2, .arr-3, .arr-4"),
        { x: 0, duration: 0.3 },
        "<"
      );
  };
  const menuItems = [
    "Power",
    "Origin",
    "Beauty",
    "Asylum",
    "Obsession",
    "Strength",
  ];

  useEffect(() => {
    gsap.set(".commission", { y: 70, opacity: 1 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".panel_1",
        start: "top 40%",
        toggleActions: "play reverse play reverse",
        end: "bottom 20%",
        markers: true,
      },
    });

    tl.to(".commission", { y: 0, duration: 0.8, ease: "power2.out" });

    const animation = gsap.fromTo(
      ".menuLink",
      {
        x: -120,
        opacity: 0,
      },
      { x: 0, duration: 0.4, stagger: 0.2, opacity: 1 }
    );
    ScrollTrigger.create({
      trigger: ".secondCarView",
      animation: animation,
      start: "top top",
      toggleActions: "play reverse play reverse",
      // markers: true,
    });
  }, []);

  return (
    <>
      <main className="relative">
        <section className="sticky top-0 panel">
          <section className="min-h-screen bg-black rounded-t-[50px]  flex brightness-75 panel_1">
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
            </div>
          </section>
          <div className=" absolute top-1/2 right-[150px] transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 flex flex-col gap-[250px]">
            <span>
              <h1 className="uppercase text-3xl text-left font-extrabold text-white">
                staincraft
              </h1>
              <p className="uppercase text-xl text-left font-extrabold">
                where the past <br /> overtakes the future
              </p>
            </span>
            <p className="hover:bg-[#ef4826] cursor-pointer uppercase text-sm bg-white text-black rounded-full w-fit py-1 px-2 text-left font-extrabold">
              Hear sound
            </p>
          </div>
        </section>
        <section className="rounded-t-[50px] sticky top-0 panel secondCarView ">
          <main className="relative" id="car-tour">
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
            <Link
              href=""
              className="hover:text-white hover:bg-black  z-20 ml-[40px] absolute bottom-0 flex items-center justify-between w-[200px] bg-transparent border border-black text-black p-4 rounded-br-[25px]  mb-8"
              onMouseEnter={textShift}
              onMouseLeave={textUnshift}
            >
              <div className="uppercase font-bold w-[134px] h-[20px] overflow-hidden  flex items-center relative ">
                <p className="left-[-135px] ent-1 absolute text-sm ">
                  Download specs
                </p>
                <p className="ent-2 absolute text-sm">Download specs</p>
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
            <div
              className=" relative h-[110vh]
            "
            >
              <Image
                src="/images/koz_1.jpg"
                alt=""
                fill
                className="object-cover rounded-t-[50px] "
              />
            </div>
            {/* <div className="flex items-center justify-between w-[45%] bg-[#ef4826] hover:bg-[#26ef47] text-black p-4 rounded-tr-[35px] cursor-pointer">
              <h2 className="uppercase text-2xl font-extrabold">commission your mf-47</h2>
              <div className="bg-black rounded-full p-[3px]">
              <BsPlusLg className=" text-white text-[30px]" />
              </div>
            </div> */}
          </main>
          <main className="bg-[#fff] main-section ">
            <About />
          </main>
        </section>
      </main>
      <div className="commission flex items-center justify-between w-[45%] bg-[#ef4826] hover:bg-[#26ef47] text-black p-4 rounded-tr-[35px] cursor-pointer z-50 fixed bottom-0 left-0">
        <h2 className="uppercase text-2xl font-extrabold">
          commission your mf-47
        </h2>
        <div className="bg-black rounded-full p-[3px]">
          <BsPlusLg className=" text-white text-[30px]" />
        </div>
      </div>
    </>
  );
}
