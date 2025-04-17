"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { aboutAnimation } from "./animations/animation";

export default function About() {
  useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <>
      <article className="gallery scale-section w-full">
        <section className="w-1/2 h-full right absolut inset-0 z-20 backgroundIm">
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
            <div className="details detail1">
              <h1 className="text-[55px] font-extrabold uppercase mb-8 ">
                MANIACS
              </h1>
              <h6 className="text-[32px] font-extrabold uppercase leading-8 mb-10">
                Twins, born in Ukraine, raised in Canada. High School dropouts.
                Trained in Italy and California. Oilstainlab is their
                un-medicated vision, a pure manifest of automotive excess & Fun.
              </h6>
              <article className=" grid place-items-center bg-[#e2e2e2] relative w-full h-[570px] overflow-hidden mb-14 ">
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[-70px] left-[-690px] maniacText1">
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                  <p className="text-[120px] font-extrabold uppercase mt-4">
                    *
                  </p>
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                </div>
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute  w-full top-[90px] left-[-690px] maniacText2">
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                  <p className="text-[120px] font-extrabold uppercase mt-4">
                    *
                  </p>
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                </div>
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute w-full top-[250px] left-[-690px] maniacText3">
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                  <p className="text-[120px] font-extrabold uppercase mt-4">
                    *
                  </p>
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                </div>
                <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[410px] left-[-690px] maniacText4">
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                  <p className="text-[120px] font-extrabold uppercase mt-4">
                    *
                  </p>
                  <h1 className="text-[14vw] font-extrabold uppercase">
                    maniacs
                  </h1>
                </div>
                <div className="w-[230px] h-[350px] relative ">
                  <Image
                    src="/images/bmw.jpg"
                    alt=""
                    fill
                    className="slideshow object-cover absolute top-0 left-0 z-[10]"
                  />
                  <Image
                    src="/images/koz_2.jpg"
                    alt=""
                    fill
                    className="slideshow object-cover absolute top-0 left-0 z-[20]"
                  />
                  <Image
                    src="/images/koz_3.jpg"
                    alt=""
                    fill
                    className="slideshow object-cover absolute top-0 left-0 z-[30]"
                  />
                  <Image
                    src="/images/koz_4.jpg"
                    alt=""
                    fill
                    className="slideshow object-cover absolute top-0 left-0 z-[40]"
                  />
                  <Image
                    src="/images/about_1.jpg"
                    alt=""
                    fill
                    className="slideshow object-cover absolute top-0 left-0 z-[50]"
                  />
                </div>
              </article>
              <div className="flex items-start justify-between ">
                <h2 className="uppercase text-sm max-w-[60px] font-extrabold">
                  double vision
                </h2>
                <p className="max-w-[450px] text-[#787878] text-sm ">
                  Our founders “the twins” as commonly referred to by the
                  industry, have been breaking rules and records; clinching
                  world championships and responsible for 6.5 million street
                  cars. Maniacally obsessed with forging vehicles, experiences
                  and technologies beyond sanity. Inspired by those before them,
                  Oilstainlab is a new generation of trouble makers, maniacs
                  creating for maniacs.
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#e8e8e8] my-32"></div>
            </div>
            {/* mission */}
            <div className="details detail2">
              <h1 className="text-[55px] font-extrabold uppercase headers mb-8">
                MISSION
              </h1>

              <h6 className="text-[32px] font-extrabold uppercase leading-8 mb-10">
                When we started Oilstainlab in 2018, we promised never to be
                sane. Instead, we embraced that part of ourselves that had
                always been truest.
              </h6>
              <section className="mb-14">
                <div className="relative w-full h-[500px] ">
                  <Image
                    src="/images/bmw.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </section>
              <div className="flex items-start justify-between ">
                <h2 className="uppercase text-sm max-w-[60px font-extrabold">
                  too <br /> far gone
                </h2>
                <p className="max-w-[480px] text-sm text-[#787878]">
                  We're to far gone to resist. Our inner demons have full
                  control. We pine for the frenzy and madness of a bygne era. We
                  vowed to distill this into everything we do, windsweot with
                  the latest in technology and innovation. Because we know
                  therre are othrs just ike us, tire f lukewarm thrills. Just as
                  addicted to progress as they are to the past.
                </p>
              </div>
              <div className="w-full h-[1px] bg-[#e8e8e8] my-32"></div>
            </div>
            <div className="details detail3">
              <h1 className="text-[55px] font-extrabold uppercase headers mb-14">
                Time MAchine
              </h1>

              <section className="mb-14">
                <div className="w-full h-[530px] relative ">
                 
                  
                   <Image
                    src="/images/about_1.jpg"
                    alt=""
                    fill
                    className="slideshow-img object-cover absolute top-0 left-0 z-[50]"
                  />
                  <Image
                    src="/images/koz_3.jpg"
                    alt=""
                    fill
                    className="slideshow-img object-cover absolute top-0 left-0 z-[30]"
                  />
                   <Image
                    src="/images/bmw.jpg"
                    alt=""
                    fill
                    className="slideshow-img object-cover absolute top-0 left-0 z-[10]"
                  />
                  <Image
                    src="/images/koz_2.jpg"
                    alt=""
                    fill
                    className="slideshow-img object-cover absolute top-0 left-0 z-[20]"
                  />
                  <Image
                    src="/images/koz_4.jpg"
                    alt=""
                    fill
                    className="slideshow-img object-cover absolute top-0 left-0 z-[40]"
                  />
                 
                </div>
              </section>
              <div className="flex items-start justify-between mb-30 w-[550px]">
                <h2 className="uppercase text-sm max-w-[60px font-extrabold ">
                  devergent <br /> past
                </h2>
                <p className="max-w-[380px] text-[28px] leading-[1] uppercase text-center">
                  To find our future we needed to break free from the grip of
                  time.
                </p>
              </div>
              <section className="mb-14">
                <div className="w-full h-[530px] relative ">
                  <Image
                    src="/images/bmw.jpg"
                    alt=""
                    fill
                    className="slideshow-image object-cover absolute top-0 left-0 z-[10]"
                  />
                  <Image
                    src="/images/koz_2.jpg"
                    alt=""
                    fill
                    className="slideshow-image object-cover absolute top-0 left-0 z-[20]"
                  />
                  <Image
                    src="/images/koz_3.jpg"
                    alt=""
                    fill
                    className="slideshow-image object-cover absolute top-0 left-0 z-[30]"
                  />
                  <Image
                    src="/images/koz_4.jpg"
                    alt=""
                    fill
                    className="slideshow-image object-cover absolute top-0 left-0 z-[40]"
                  />
                  <Image
                    src="/images/about_1.jpg"
                    alt=""
                    fill
                    className="slideshow-image object-cover absolute top-0 left-0 z-[50]"
                  />
                </div>
              </section>

              <div className="flex items-start justify-between  mb-24">
                <h2 className="uppercase text-sm max-w-[60px font-extrabold">
                  time <br /> machine
                </h2>
                <p className="max-w-[330px] text-sm text-[#787878]">
                  Do you believe in time machines? Neither did we, until we
                  built one. A gateway to the purest era of motorsport. Timeless
                  process and materials, an escaped science experiment from an
                  alternate reality. Few go back to go forward. It would have
                  been insane for us not to.
                </p>
              </div>
              <h2 className="uppercase font-extrabold text-[54px] leading-[1] mb-24">
                When the past overtakes the future. Half-11 Prototype.
              </h2>
              <section className="mb-14">
                <div className="relative w-full h-[500px] ">
                  <Image
                    src="/images/bmw.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </section>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
