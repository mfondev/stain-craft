"use client";

import Navbar from "@/components/mainNavigation/navbar";
import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const split = new SplitType(".hf", { types: "chars" });
    console.log(split.chars);

    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 1,
      duration: 0.6,
    });
  }, []);

  return (
    <>
      <div className="bg-[#eaece9] h-screen">
        <Navbar />
        <h1 className="hf text-[200px] font-extrabold ">HF</h1>
      </div>
      <main>
        <h2>Less is more,</h2>
        <h2>more is less.</h2>
        <Link href="">watch video</Link>
      </main>
    </>
  );
}
