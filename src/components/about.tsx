"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.set(".detailsWrapper", {
      yPercent: 70,
      ease: "none",
    });
    gsap.to(".scale-section", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.out",
      duration: 3,
      scrollTrigger: {
        trigger: ".main-section",
        start: "top bottom",
        scrub: true,
      },
    });

    const timeline = gsap.timeline();

    timeline.fromTo(
      ".backgroundImg",
      {
        width: "100%",
      },
      {
        width: "50%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".main-section",
          start: "top 40%",
          scrub: true,
        },
      }
    );

    // timeline.to(".detailsWrapper", {
    //   yPercent: -100,
    //   ease: "none",
    // }, ">");
    // .fromTo(".detailsWrapper",{yPercent: 60},{yPercent: 0, duration: 1, ease: "power2.out"})

    // Pin the right image section
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      // markers: true,
    });

    // Photo 1 → Photo 2
    timeline.to(".photo1", {
      yPercent: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".detail2",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    timeline.fromTo(
      ".photo2",
      { yPercent: 0 },
      {
        yPercent: -100,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".detail2",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    timeline.fromTo(
      ".photo2",
      { yPercent: -100 },
      {
        yPercent: -200,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".detail3",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    timeline.fromTo(
      ".photo3",
      { yPercent: -100 },
      {
        yPercent: -200,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".detail3",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <>
      <main className="gallery scale-section relative w-full h-[820vh]">
        <section className="w-full h-full right absolute inset-0 z-20 backgroundImg">
          <article className="relative w-ful">
            <ul className="z-50 text-white h-[100vh] flex flex-col justify-center items-center absolute inset-0 w-full bg-black/25">
              <li className="uppercase font-bold text-2xl">Maniacs</li>
              <li className="uppercase font-bold text-2xl">Mission</li>
              <li className="uppercase font-bold text-2xl">Machine</li>
            </ul>
            <div className="relative w-full h-[100vh] z-10">
              <Image
                src="/images/bmw.jpg"
                alt=""
                fill
                className="object-cover photo1"
              />
            </div>
            <div className="relative w-full h-[100vh] z-10">
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
        <section className="w-1/2 absolute right-0 top-0 z-10">
          <div className="detailsWrapper px-[100px]">
            <div className="details detail1">
              <h1 className="text-[55px] font-extrabold uppercase headers mb-8 mt-[1000px">
                MANIACS
              </h1>
              <h6 className="text-[32px] font-extrabold uppercase leading-8 mb-10">
                Twins, born in Ukraine, raised in Canada. High School dropouts.
                Trained in Italy and California. Oilstainlab is their
                un-medicated vision, a pure manifest of automotive excess & Fun.
              </h6>
              <article className="grid place-items-center bg-[#e2e2e2] relative w-full h-[500px] overflow-hidden mb-8 ">
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[-70px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute  w-full top-[70px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[350px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[-70px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute  w-full top-[70px] left-[-690px] ">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[210px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[350px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[-70px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute  w-full top-[70px] left-[-690px] ">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[210px] left-[-690px]">
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
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[350px] left-[-690px]">
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
      </main>
    </>
  );
}
