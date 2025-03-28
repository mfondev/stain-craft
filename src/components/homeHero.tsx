"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  // const panels = document.querySelectorAll(".panel");
  // const createScroll01 = () => {
  //   panels.forEach((panel, i) => {
  //     const isLast = i === panels.length - 1;
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: panel,
  //           start: "top top",

  //           scrub: 0.5,
  //         },
  //       })
  //       .to(
  //         panel,
  //         {
  //           startAt: { filter: "brightness(100%) blur(0px" },
  //           filter: isLast ? "none" : "brightness(50%) blur(10px)",
  //           scale: 0.9,
  //           borderRadius: "50px",
  //           ease: "none",
  //         },
  //         "<"
  //       );
  //   });
  // };
  // useEffect(() => {
  //   createScroll01();
  // }, []);

  return (
    <>
      <main className="relative">
        <section className="min-h-[100vh] bg-black rounded-t-[50px] car-sectio sticky top-0 panel"></section>
        <section className="min-h-[200vh] bg-amber-800 rounded-t-[50px sticky top-0 panel"></section>
      </main>
    </>
  );
}
