"use client";

import React, { useEffect , useState} from "react";
import Image from "next/image";
import { aboutAnimation } from "../animations/animation";
import Maniac from "./maniac";
import Machine from "./machine";
import Mission from "./mission";
export default function About() {


  useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <>
      <article className="gallery scale-section w-full">
        <section
          className="w-1/2 h-full right absolut inset-0 z-20 backgroundIm"
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
        <section className="w-1/2 absolut right-0 top-0 z-10">
          <div className="detailsWrappe px-[80px">
            <Maniac />
            <Mission />
            <Machine />
          </div>
        </section>
      </article>
    </>
  );
}
