import React from 'react';
import Image from "next/image";


export default function Mission() {
  return (
    <div className="details detail2Text">
    <h1 className="text-[39px] md:text-[55px]  font-extrabold uppercase headers mb-4 md:mb-8">
      MISSION
    </h1>

    <h6 className="text-[20px] md:text-[32px] font-extrabold uppercase leading-5 md:leading-8 mb-10">
      When we started Oilstainlab in 2018, we promised never to be
      sane. Instead, we embraced that part of ourselves that had
      always been truest.
    </h6>
    <section className="mb-14">
      <div className="relative w-full h-[330px] md:h-[500px] ">
        <Image
          src="/images/bmw.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-start justify-between ">
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
    <div className="w-full h-[1px] bg-[#e8e8e8] my-8 lg:my-32  detail3"></div>
    
  </div>
  );
}
