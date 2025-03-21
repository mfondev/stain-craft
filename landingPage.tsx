"use client"

import React,{useEffect} from "react";
import Link from "next/link";
import { textSlide } from "@/components/animations/animation";

export default function LandingPage() {
    useEffect(() => {
        textSlide()
    }, []);
  return (
    <div className="bg-black text-white h-screen px-6 pb-6 flex flex-col justify-between">
      <div className="flex flex-col gap-0">
        <div className="h-[140px] overflow-hidden flex flex-col">
        <h1 className="text-[115px] uppercase font-extrabold h-full h-text1">Bespoke</h1>
        <h1 className="text-[115px] uppercase font-extrabold  h-text2">Bespoke</h1>
        </div>
        <div className="h-[140px] overflow-hidden flex flex-col ml-[400px]">
        <h1 className="text-[115px] uppercase font-extrabold h-full h-text1">Myth</h1>
        <h1 className="text-[115px] uppercase font-extrabold  h-text2">Myth</h1>
        </div>
        <div className="h-[140px] overflow-hidden flex flex-col ">
        <h1 className="text-[115px] uppercase font-extrabold h-full h-text1">chaos</h1>
        <h1 className="text-[115px] uppercase font-extrabold  h-text2">chaos</h1>
        </div>
        <div className="h-[140px] overflow-hidden flex flex-col  ml-[130px]">
        <h1 className="text-[115px] uppercase font-extrabold h-full h-text1">Maniac</h1>
        <h1 className="text-[115px] uppercase font-extrabold  h-text2">Maniac</h1>
        </div>
        
      </div>
      <div className="flex items-center justify-between l-footer">
        <h3 className="text-sm uppercase">CALIFORNIA, USA, 90757</h3>
        <Link href="" className="flex items-center justify-between w-[180px] bg-[#ef4826] hover:bg-[#26ef47] text-black p-4 rounded-br-lg">
        <p className="text-sm uppercase font-bold" >Enter</p>
        <span>
            {">>"}
        </span>
        </Link>
      </div>
    </div>
  );
}
