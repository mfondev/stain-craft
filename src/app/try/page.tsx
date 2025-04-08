"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function page() {
  // useEffect(() => {
  //   const s = gsap.utils.toArray(".") as HTMLElement[];

  //   // Set initial position for all except the first
  //   gsap.set(s.slice(1), { yPercent: 100 });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".gallery",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //       pin: ".right",
  //       markers: true,
  //     },
  //   });

  //   s.forEach((photo, i) => {
  //     if (i === 0) return;
  //     tl.to(s[i - 1], { yPercent: 0, ease: "none" }, i);
  //     tl.to(photo, { yPercent: 0, ease: "none" }, i);
  //   });
  // }, []);

  useEffect(() => {
    // Pin the right image section
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      // markers: true,
    });
  
    // Photo 1 → Photo 2
    gsap.to(".photo1", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".detail2",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
  
    gsap.fromTo(
      ".photo2",
      { yPercent: 0 },
      {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail2",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  
   
    gsap.fromTo(
      ".photo2",
      { yPercent: -100 },
      {
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail3",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  
    gsap.fromTo(
      ".photo3",
      { yPercent: -100 },
      {
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail3",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);
  
  return (
    <>
      <div className="spacer"></div>

      <main className="gallery ">
        <section className="left">
          <div className="detailsWrapper">
            <div className="details detail1">
              <h1 className="text-[55px] font-extrabold uppercase headers mb-8">
                MANIACS
              </h1>

              <h6 className="text-[32px] font-extrabold uppercase leading-8 mb-10">
                Twins, born in Ukraine, raised in Canada. High School dropouts.
                Trained in Italy and California. Oilstainlab is their
                un-medicated vision, a pure manifest of automotive excess & Fun.
              </h6>
              <article className="grid place-items-center bg-[#e2e2e2] relative w-full h-[500px] overflow-hidden  mb-8">
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[-70px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[70px] left-[-690px] ">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[210px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[350px] left-[-690px]">
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
                  cars. Maniacally obsessed with forging vehicles, experiences
                  and technologies beyond sanity. Inspired by those before them,
                  Oilstainlab is a new generation of trouble makers, maniacs
                  creating for maniacs.
                </p>
              </div>
            </div>
            <div className="details detail2">
              <h1 className="text-[55px] font-extrabold uppercase headers mb-8">
                MISSION
              </h1>

              <h6 className="text-[32px] font-extrabold uppercase leading-8 mb-10">
                Twins, born in Ukraine, raised in Canada. High School dropouts.
                Trained in Italy and California. Oilstainlab is their
                un-medicated vision, a pure manifest of automotive excess & Fun.
              </h6>
              <article className="grid place-items-center bg-[#e2e2e2] relative w-full h-[500px] overflow-hidden  mb-8">
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[-70px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[70px] left-[-690px] ">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[210px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[350px] left-[-690px]">
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
                  cars. Maniacally obsessed with forging vehicles, experiences
                  and technologies beyond sanity. Inspired by those before them,
                  Oilstainlab is a new generation of trouble makers, maniacs
                  creating for maniacs.
                </p>
              </div>
            </div>

            <div className="details detail3">
              <h1 className="text-[55px] font-extrabold uppercase headers mb-8">
                MAchine
              </h1>

              <h6 className="text-[32px] font-extrabold uppercase leading-8 mb-10">
                Twins, born in Ukraine, raised in Canada. High School dropouts.
                Trained in Italy and California. Oilstainlab is their
                un-medicated vision, a pure manifest of automotive excess & Fun.
              </h6>
              <article className="grid place-items-center bg-[#e2e2e2] relative w-full h-[500px] overflow-hidden  mb-8">
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[-70px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[70px] left-[-690px] ">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[210px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]e w-full top-[350px] left-[-690px]">
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
                  cars. Maniacally obsessed with forging vehicles, experiences
                  and technologies beyond sanity. Inspired by those before them,
                  Oilstainlab is a new generation of trouble makers, maniacs
                  creating for maniacs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="right w-full">
          <article className="relative w-full h-full ">
            <ul className="z-50 text-white h-[100vh] flex flex-col justify-center items-center absolute inset-0 w-full bg-black/25">
              <li className="uppercase font-bold text-2xl">Maniacs</li>
              <li className="uppercase font-bold text-2xl">Mission</li>
              <li className="uppercase font-bold text-2xl">Machine</li>
            </ul>
            <div className="relative w-full h-[100vh] z-10  ">
              <Image
                src="/images/bmw.jpg"
                alt=""
                fill
                className="object-cover photo1"
              />
            </div>
            <div className="relative w-full h-[100vh] z-10 ">
              <Image
                src="/images/koz_2.jpg"
                alt=""
                fill
                className="object-cover photo2"
              />
            </div>
            <div className="relative w-full h-[100vh] z-10 ">
              <Image
                src="/images/koz_3.jpg"
                alt=""
                fill
                className="object-cover photo3"
              />
            </div>
          </article>
        </section>
      </main>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </>
  );
}
