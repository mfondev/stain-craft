"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {

  return (
    <>
      <main className="relative">
        <section className="min-h-[100vh] bg-black rounded-t-[50px] car-sectio sticky top-0 panel"></section>
        <section className="min-h-[200vh] bg-amber-800 rounded-t-[50px sticky top-0 panel"></section>
      </main>
    </>
  );
}
