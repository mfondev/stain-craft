import React from 'react';
import Image from "next/image";

export default function Machine() {
  return (
    <div className="details detail3">
              <h1 className="text-[55px] font-extrabold uppercase headers mb-14">
                Time MAchine
              </h1>

              <section className="mb-14 slideshow-section">
                <div className="w-full h-[530px] relative ">
                 
                  
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
              <div className="flex items-start justify-between mb-30 w-[550px]">
                <h2 className="uppercase text-sm max-w-[60px font-extrabold ">
                  devergent <br /> past
                </h2>
                <p className="max-w-[380px] text-[28px] leading-[1] uppercase text-center">
                  To find our future we needed to break free from the grip of
                  time.
                </p>
              </div>
              <section className="mb-14 slideshow-section">
                <div className="w-full h-[530px] relative ">
                  <Image
                    src="/images/carImg4.jpg"
                    alt=""
                    fill
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
              <section className="mb-14 slideshow-section">
                <div className="w-full h-[530px] relative ">
                 
                  
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
                    className="slideshow-image object-cover absolute top-0 left-0 z-[40]"
                  />
                 
                </div>
              </section>
            </div>
  );
}
