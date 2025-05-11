"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import CommissionForm from "../forms/commissionForm";
import { BsPlusLg } from "react-icons/bs";
import gsap from "gsap";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const commissionTimeline = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    const viewportHeight = window.innerHeight;

    gsap.set(".commission", {
      y: viewportHeight,
      opacity: 1,
    });

    commissionTimeline.current = gsap.timeline({ paused: true });

    commissionTimeline.current.to(".commissio", {
      y: 0,
      duration: 1.2,
      ease: "power2.inOut",
    });
  }, []);

  const toggleCommission = () => {
    const scrollTarget = document.documentElement;

    if (!isOpen) {
      scrollTarget.style.overflow = "hidden";
      commissionTimeline.current?.play();
    } else {
      scrollTarget.style.overflow = "";
      commissionTimeline.current?.reverse();
    }

    setIsOpen(!isOpen);
  };

  return (
    <main className="relative">
      <section className="bg-[#dadada] relative z-20">
        <div className="relative h-[80vh] md:h-[110vh] lg:h-[160vh]">
          <main className="absolute top-0 left-0 w-full lg:h-[100vh] flex items-cente justify-center z-10 text-center">
            <h1 className="text-[40px] md:text-[80px] lg:text-[160px] leading-[1] font-extrabold uppercase pt-[50px] md:px-[40px]">
              Descend into <br />
              <span className="md:ml-[150px]">MadnesS</span> <br />
              <div className="flex gap-10">
                <span>with</span>
                <span className="text-[#ef4826] text-s">.</span>
                <span>your</span>
              </div>
              <div className="text-center">
                MF <span className="text-[#ef4826]">47</span>
              </div>
            </h1>
          </main>
          <div className="absolute bottom-0 h-[70vh] w-full">
            <div className="relative h-full lg:h-[100vh] bottom-0">
              <Image
                src="/images/footer-bg.avif"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* commission */}
        <div
          className="absolute bottom-0 left-0 w-full h-[10%] bg-[#ef4826] hover:bg-[#26ef47] text-black px-4 py-4 cursor-pointer z-50 block md:hidden"
          onClick={toggleCommission}
        >
          <div className="flex items-center justify-between w-full h-full">
            <h2 className="uppercase text-[16px] font-extrabold">
              commission your mf-47
            </h2>
            <div className="bg-black rounded-full p-[3px]">
              <BsPlusLg className="text-gray-500 text-[20px] gear" />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#242424] text-[#525252] h-[50vh] lg:h-[90vh] flex flex-col justify-between pt-8 px-8 sticky bottom-0 z-10">
        <header className="flex flex-col items-center justify-center text-center gap-2 uppercase lg:flex-row lg:justify-between lg:items-center">
          <h3 className="uppercase text-[12px] md:text-sm font-extrabold">
            HF-11 is a registered trademark of OILSTAINLAB LLC.
          </h3>
          <p className="uppercase text-[12px] md:text-sm font-extrabold">
            All rights reserved. ©2024
          </p>
        </header>

        <div className="flex items-center justify-between">
          <h1 className="text-[100px] md:text-[162px] lg:text-[250px] uppercase font-extrabold leading-[1]">
            MF
          </h1>
          <h1 className="text-[100px] md:text-[162px] lg:text-[250px] uppercase font-extrabold leading-[1]">
            47
          </h1>
        </div>
      </footer>
      {/*  */}
      {/*  */}
      <div className="footer-overlayy commissio fixed bottom-0 left-0 w-full lg:w-1/2 h-[100vh] z-40 rounded-tr-[20px] lg:hidden block">
        <div className="flex items-center justify-between w-full h-[10%] bg-[#ef4826] text-black px-2 py-2 rounded-tr-[35px] cursor-pointer z-50">
          <h2 className="uppercase text-[16px] font-extrabold">
              commission your mf-47
            </h2>
          <div className="bg-black rounded-full p-[3px]">
            <BsPlusLg
              className="text-gray-500 text-[20px] gear rotate-45"
              onClick={(e) => {
                e.stopPropagation();
                toggleCommission();
              }}
            />
          </div>
        </div>
        <div className="h-[90%] bg-white px-4 py-3">
          <h2 className="text-[50px] max-w-[270px leading-[0.9] font-extrabold mb-4">
            REGISTER YOUR INTEREST IN HF-11.
          </h2>
          <CommissionForm />
        </div>
      </div>
    </main>
  );
}
