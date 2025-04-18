import React from "react";
import Image from "next/image";

export default function Descend() {
  return (
    <>
      <section className="bg-[#ebebed] min-h-screen relative">
        <main className="flex items-center">
          <h1 className="text-[170px] leading-[1] font-extrabold uppercase pt-[50px] px-[40px]">
            Descend into <br />
            <span className="ml-[150px]">MadnesS</span> <br />
            <div className="flex gap-10">
              <span>with</span>
              <span className="text-[#ef4826] text-s">.</span>
              <span>your</span>
            </div>
            <div className="text-center">
              MF <span className="text-[#ef4826]"> 47</span>
            </div>
          </h1>
        </main>
        <div
          className=" relative h-[130vh] 
          "
        >
          <Image
            src="/images/koz_2.jpg"
            alt=""
            fill
            className="object-cover "
          />
        </div>
      </section>
     
    </>
  );
}
