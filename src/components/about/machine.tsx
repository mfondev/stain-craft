import React from "react";
import Image from "next/image";

export default function Machine() {
  return (
    <div className="details detail3Text">
      <h1 className="text-[39px] md:text-[55px] font-extrabold uppercase mb-4 md:mb-8 detail1">
        Time <br />
        MAchine
      </h1>

      <section className="mb-14 slideshow-section">
        <div className="w-full h-[330px] md:h-[530px] relative ">
          <Image
            src="/images/carImg1.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[50]"
          />
          <Image
            src="/images/carImg3.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[30]"
          />
          <Image
            src="/images/about_2.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[10]"
          />
          <Image
            src="/images/carImg6.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[20]"
          />
          <Image
            src="/images/about_1.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[40]"
          />
        </div>
      </section>
      <div className="flex flex-col md:flex-row items-start justify-between mb-10 lg:mb-30 gap-4 md:gap-0 w-full md:w-[550px]">
        <h2 className="uppercase text-sm max-w-[60px font-extrabold ">
          devergent <br /> past
        </h2>
        <p className="max-w-[380px] text-[28px] leading-[1] uppercase text-left md:text-center">
          To find our future we needed to break free from the grip of time.
        </p>
      </div>
      <section className="mb-14 slideshow-section">
        <div className="w-full h-[330px] md:h-[530px] relative ">
          <Image
            src="/images/carImg4.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="slideshow-image object-cover absolute top-0 left-0 z-[10]"
          />
          <Image
            src="/images/carImg7.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[20]"
          />
          <Image
            src="/images/carImg6.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[30]"
          />
          <Image
            src="/images/carImg5.jpg"
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

      <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0 mb-10 md:mb-24">
        <h2 className="uppercase text-sm max-w-[60px font-extrabold">
          time <br /> machine
        </h2>
        <p className="max-w-[330px] text-sm text-[#787878]">
          Do you believe in time machines? Neither did we, until we built one. A
          gateway to the purest era of motorsport. Timeless process and
          materials, an escaped science experiment from an alternate reality.
          Few go back to go forward. It would have been insane for us not to.
        </p>
      </div>
      <h2 className="uppercase font-extrabold text-[39px] md:text-[54px] leading-[1] mb-10 md:mb-24">
        When the past overtakes the future. Half-11 Prototype.
      </h2>
      <section className="md:mb-14 slideshow-section">
        <div className="w-full h-[330px] md:h-[530px] relative ">
          <Image
            src="/images/about_3.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[50]"
          />
          <Image
            src="/images/carImg3.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[30]"
          />
          <Image
            src="/images/carImg1.jpg"
            alt=""
            fill
            className="slideshow-image object-cover absolute top-0 left-0 z-[10]"
          />

          <Image
            src="/images/carImg4.jpg"
            alt=""
            fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="slideshow-image object-cover absolute top-0 left-0 z-[40]"
          />
        </div>
      </section>
    </div>
  );
}
