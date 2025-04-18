import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="relative">
      <section className="bg-[#ebebed] min-h-scree relative z-20">
        <div className="relative h-[180vh]">
          <main className="absolute top-0 left-0 w-full h-[100vh] flex items-cente justify-center z-10 text-center">
            <h1 className="text-[120px] leading-[1] font-extrabold uppercase pt-[50px] px-[40px]">
              Descend into <br />
              <span className="ml-[150px]">MadnesS</span> <br />
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

          <Image
            src="/images/koz_2.jpg"
            alt=""
            fill
            className="object-cover "
          />
        </div>
      </section>
      <footer className="bg-[#242424] text-[#525252] h-[95vh] flex flex-col justify-between pt-8 px-8 sticky bottom-0 z-10">
        <header className="flex items-center justify-between uppercase">
          <h3 className="uppercase text-sm font-extrabold">
            HF-11 is a registered trademark of OILSTAINLAB LLC.
          </h3>
          <p className="uppercase text-sm font-extrabold">
            All rights reserved. ©2024
          </p>
        </header>
        <div className="flex items-center justify-between">
          <h1 className="text-[259px] uppercase font-extrabold leading-[1]">
            MF
          </h1>
          <h1 className="text-[259px] uppercase font-extrabold leading-[1]">
            47
          </h1>
        </div>
      </footer>
    </main>
  );
}
