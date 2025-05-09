"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { aboutAnimation } from "../animations/animation";
import Maniac from "./maniac";
import Machine from "./machine";
import Mission from "./mission";

export default function About() {
  const [activeTab, setActiveTab] = useState("Maniacs");

  useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <>
      <article className="gallery hidden lg:flex-row scale-section w-full lg:flex">
        <section
          className="w-1/2 h-full right absolut inset-0 z-20 backgroundIm "
          id="about"
        >
          <article className="relative">
            <ul className="z-50 text-white h-[100vh] flex flex-col justify-center items-center absolute inset-0 w-full bg-black/25 text-left">
              <div>
                <h2 className="uppercase text-[#757575] font-extrabold text-xl">
                  About
                </h2>
                <li className="uppercase text-[#757575] font-extrabold text-3xl maniacs">
                  Maniacs
                </li>
                <li className="uppercase text-[#757575] font-extrabold text-3xl mission">
                  Mission
                </li>
                <li className="uppercase text-[#757575] font-extrabold text-3xl machine">
                  Machine
                </li>
              </div>
            </ul>
            <div className="relative w-full h-[100vh] z-10">
              <Image
                src="/images/about_1.jpg"
                alt=""
                fill
                className="object-cover photo1 z-[30]"
              />
            </div>
            <div className="relative w-full h-[100vh] z-10">
              <Image
                src="/images/about_2.jpg"
                alt=""
                fill
                className="object-cover photo2 "
              />
            </div>
            <div className="relative w-full h-[100vh] z-10 ">
              <Image
                src="/images/about_3.jpg"
                alt=""
                fill
                className="object-cover photo3"
              />
            </div>
          </article>
        </section>
        <section className=" w-1/2 absolut right-0 top-0 z-10">
          <div className="detailsWrappe px-[80px">
            <Maniac />
            <Mission />
            <Machine />
          </div>
        </section>
      </article>

      {/* mobile */}
      <section className="block lg:hidden">
        <div className="relative w-full h-[45vh] z-10">
          <Image
            src="/images/about_1.jpg"
            alt="About Image"
            fill
            className="object-cover z-[10]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20">
            <h2 className="uppercase text-white font-extrabold text-[50px]">
              About
            </h2>
          </div>
        </div>

        <div className="flex justify-around border-b border-[#757575]">
          {["Maniacs", "Mission", "Machine"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-center text-[10px] cursor-pointer font-bold uppercase border-x border-[#757575] transition-all duration-300 ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="px-6 py-6">
          {activeTab === "Maniacs" && <Maniac />}
          {activeTab === "Mission" && <Mission />}
          {activeTab === "Machine" && <Machine />}
        </div>
      </section>
    </>
  );
}
