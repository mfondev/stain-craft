import React from 'react';
import Image from "next/image";


export default function Maniac() {
  return (
    <div className="details detail1Text">
    <h1 className="text-[39px] md:text-[55px] font-extrabold uppercase mb-4 md:mb-8 detail1">
      MANIACS
    </h1>
    <h6 className="text-[22px] md:text-[32px] font-extrabold uppercase leading-5 mb:leading-8 mb-10">
      Twins, born in Ukraine, raised in Canada. High School dropouts.
      Trained in Italy and California. Oilstainlab is their
      un-medicated vision, a pure manifest of automotive excess & Fun.
    </h6>
    <article className=" grid place-items-center bg-[#e2e2e2] relative w-full h-[420px] md:h-[570px] overflow-hidden mb-14 ">
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
      <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute  w-full top-[120px] left-[-690px] maniacText2">
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
      <div className="flex items-center gap-[40px] pr-[100px] leading-[1] absolute w-full top-[300px] left-[-690px] maniacText3">
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
      <div className="flex items-center gap-[40px] pr-[100px] leading-[1]  absolute w-full top-[480px] left-[-690px] maniacText4">
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
      <div className="w-[230px] h-[270px] md:h-[350px] relative ">
        <Image
          src="/images/about_2.jpg"
          alt=""
          fill
          className="slideshow object-cover absolute top-0 left-0 z-[10]"
        />
        <Image
          src="/images/carImg3.jpg"
          alt=""
          fill
          className="slideshow object-cover absolute top-0 left-0 z-[20]"
        />
        <Image
          src="/images/about_3.jpg"
          alt=""
          fill
          className="slideshow object-cover absolute top-0 left-0 z-[30]"
        />
        <Image
          src="/images/carImg4.jpg"
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
    <div className="flex flex-col md:flex-row  gap-4 md:gap-0 items-start justify-between ">
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
    <div className="w-full h-[1px] bg-[#e8e8e8] my-8 lg:my-32 detail2"></div>
  </div>
  );
}
